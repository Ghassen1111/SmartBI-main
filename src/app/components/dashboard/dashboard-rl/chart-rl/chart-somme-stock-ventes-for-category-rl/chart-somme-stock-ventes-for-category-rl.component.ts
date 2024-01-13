import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Chart from 'chart.js';
import { FactureService } from 'src/app/services/facture.service';
@Component({
  selector: 'app-chart-somme-stock-ventes-for-category-rl',
  templateUrl: './chart-somme-stock-ventes-for-category-rl.component.html',
  styleUrls: ['./chart-somme-stock-ventes-for-category-rl.component.css']
})
export class ChartSommeStockVentesForCategoryRlComponent implements OnInit {
  horizontalBarChart: any;
  colors = [];
  allCategory = [];
  allFactures = [];
  nameCategory = [];
  sumQty = [];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  constructor(private categoryService:CategoryService,private factureService:FactureService) { }

  ngOnInit() {
    if (this.role=="entreprise") {
      this.categoryService.getCategory(this.userId).subscribe(
        (Response) => {
          this.allCategory = Response.x;
          console.log("allCategory", this.allCategory);
          this.factureService.getAllFacturesById(this.userId).subscribe(
            (Response) => {
              this.allFactures = Response.factures
              console.log("allFactures", this.allFactures);
              for (let i = 0; i < this.allCategory.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allCategory[i].category
                this.nameCategory.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allFactures.length; j++) {
                  if (this.allFactures[j].product[0].category ==p) {
                    sum = sum + this.allFactures[j].qty
                  }
                }
                this.sumQty.push(sum)
              }
              console.log("sumQty", this.sumQty);
  
              this.horizontalBarChart = new Chart('horizontalBarChartSommeStockVentesForCategory', {
                type: 'horizontalBar',
                data: {
                  labels: this.nameCategory,
                  datasets: [{
                    label: 'Category',
                    data: this.sumQty,
                    backgroundColor: this.colors,
                    borderColor: this.colors,
                    borderWidth: 1
                  }]
                },
                options: {
                  title: {
                    text: "chart de produit les plus achetés dans le site",
                    display: true
                  },
                  tooltips: {
                    callbacks: {
                      label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var total = dataset.data.reduce(function (previousValue, currentValue) {
                          return previousValue + currentValue;
                        });
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = Math.floor((currentValue / total) * 100 + 0.5);
                        return currentValue + " (" + percentage + "%)";
                      }
                    }
                  },
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  }
                }
              });
            });
        });
    }
    else{
      this.categoryService.getCategory(this.entrepriseId).subscribe(
        (Response) => {
          this.allCategory = Response.x;
          console.log("allCategory", this.allCategory);
          this.factureService.getAllFacturesById(this.entrepriseId).subscribe(
            (Response) => {
              this.allFactures = Response.factures
              console.log("allFactures", this.allFactures);
              for (let i = 0; i < this.allCategory.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allCategory[i].category
                this.nameCategory.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allFactures.length; j++) {
                  if (this.allFactures[j].product[0].category ==p) {
                    sum = sum + this.allFactures[j].qty
                  }
                }
                this.sumQty.push(sum)
              }
              console.log("sumQty", this.sumQty);
  
              this.horizontalBarChart = new Chart('horizontalBarChartSommeStockVentesForCategory', {
                type: 'horizontalBar',
                data: {
                  labels: this.nameCategory,
                  datasets: [{
                    label: 'Category',
                    data: this.sumQty,
                    backgroundColor: this.colors,
                    borderColor: this.colors,
                    borderWidth: 1
                  }]
                },
                options: {
                  title: {
                    text: "chart de produit les plus achetés dans le site",
                    display: true
                  },
                  tooltips: {
                    callbacks: {
                      label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var total = dataset.data.reduce(function (previousValue, currentValue) {
                          return previousValue + currentValue;
                        });
                        var currentValue = dataset.data[tooltipItem.index];
                        var percentage = Math.floor((currentValue / total) * 100 + 0.5);
                        return currentValue + " (" + percentage + "%)";
                      }
                    }
                  },
                  scales: {
                    yAxes: [{
                      ticks: {
                        beginAtZero: true
                      }
                    }]
                  }
                }
              });
            });
        });
    }
  }

}

