import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ResponsableLogistiqueService } from 'src/app/services/responsable-logistique.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-somme-product-for-category-rl',
  templateUrl: './chart-somme-product-for-category-rl.component.html',
  styleUrls: ['./chart-somme-product-for-category-rl.component.css']
})
export class ChartSommeProductForCategoryRlComponent implements OnInit {
  pieChart: any;
  colors = [];
  allCategory = [];
  allProducts = [];
  nameProduct = [];
  sumCommandes = [];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  constructor(private rlService:ResponsableLogistiqueService,private categoryService:CategoryService) { }

  ngOnInit() {
    if (this.role=="entreprise") {
      this.categoryService.getCategory(this.userId).subscribe(
        (Response) => {
          this.allCategory = Response.x;
          console.log("allCategory", this.allCategory);
          this.rlService.getAllProductsById(this.userId).subscribe(
            (Response) => {
              this.allProducts = Response.products
              console.log("allProducts", this.allProducts);
              for (let i = 0; i < this.allCategory.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allCategory[i].category
                this.nameProduct.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allProducts.length; j++) {
                  if (this.allProducts[j].category ==p) {
                    sum = sum + 1;
                  }
                }
                this.sumCommandes.push(sum)
              }
              console.log("sum commandes", this.sumCommandes);
  
              this.pieChart = new Chart('pieChartSommeProductForCategory', {
                type: 'pie',
                data: {
                  labels: this.nameProduct,
                  datasets: [{
                    label: 'Product',
                    data: this.sumCommandes,
                    backgroundColor: this.colors,
                    borderColor: this.colors,
                    borderWidth: 1
                  }]
                },
                options: {
                  title: {
                    text: "pieChart",
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
          this.rlService.getAllProductsById(this.entrepriseId).subscribe(
            (Response) => {
              this.allProducts = Response.products
              console.log("allProducts", this.allProducts);
              for (let i = 0; i < this.allCategory.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allCategory[i].category
                this.nameProduct.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allProducts.length; j++) {
                  if (this.allProducts[j].category ==p) {
                    sum = sum + 1;
                  }
                }
                this.sumCommandes.push(sum)
              }
              console.log("sum commandes", this.sumCommandes);
  
              this.pieChart = new Chart('pieChartSommeProductForCategory', {
                type: 'pie',
                data: {
                  labels: this.nameProduct,
                  datasets: [{
                    label: 'Product',
                    data: this.sumCommandes,
                    backgroundColor: this.colors,
                    borderColor: this.colors,
                    borderWidth: 1
                  }]
                },
                options: {
                  title: {
                    text: "pieChart",
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

