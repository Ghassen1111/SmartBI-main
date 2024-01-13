import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ResponsableLogistiqueService } from 'src/app/services/responsable-logistique.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-pourcentage-des-benefices-des-categorie-non-vendus-rf',
  templateUrl: './chart-pourcentage-des-benefices-des-categorie-non-vendus-rf.component.html',
  styleUrls: ['./chart-pourcentage-des-benefices-des-categorie-non-vendus-rf.component.css']
})
export class ChartPourcentageDesBeneficesDesCategorieNonVendusRfComponent implements OnInit {
  doughnutChart: any;
  colors = [];
  allProduct = [];
  allCategory = [];
  nameCategory = [];
  sumPrix = [];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  constructor(private categoryService:CategoryService,private rlService:ResponsableLogistiqueService) { }

  ngOnInit() {
    if (this.role=="entreprise") {
      this.categoryService.getCategory(this.userId).subscribe(
        (Response) => {
          this.allCategory = Response.x;
          console.log("allCategory", this.allCategory);
          this.rlService.getAllProductsById(this.userId).subscribe(
            (Response) => {
              this.allProduct = Response.products
              console.log("allFactures", this.allProduct);
              for (let i = 0; i < this.allCategory.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allCategory[i].category
                this.nameCategory.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allProduct.length; j++) {
                  if (this.allProduct[j].category ==p) {
                    let B=this.allProduct[j].prix-this.allProduct[j].prixReal
                    let sommeB=B*this.allProduct[j].qty
                    sum = sum +sommeB;
                  }
                }
                this.sumPrix.push(sum)
              }
              console.log("sumPrix", this.sumPrix);
  
              this.doughnutChart = new Chart('doughnutChartPourcentageDesBeneficeDesCategoriesNonVendusRf', {
                type: 'doughnut',
                data: {
                  labels: this.nameCategory,
                  datasets: [{
                    label: 'Categorie',
                    data: this.sumPrix,
                    backgroundColor: this.colors,
                    borderColor: this.colors,
                    borderWidth: 1
                  }]
                },
                options: {
                  title: {
                    text: "doughnutChart",
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
                        return currentValue.toLocaleString() +" DT"+ " (" + percentage + "%)";
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
              this.allProduct = Response.products
              console.log("allFactures", this.allProduct);
              for (let i = 0; i < this.allCategory.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allCategory[i].category
                this.nameCategory.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allProduct.length; j++) {
                  if (this.allProduct[j].category ==p) {
                    let B=this.allProduct[j].prix-this.allProduct[j].prixReal
                    let sommeB=B*this.allProduct[j].qty
                    sum = sum +sommeB;
                  }
                }
                this.sumPrix.push(sum)
              }
              console.log("sumPrix", this.sumPrix);
  
              this.doughnutChart = new Chart('doughnutChartPourcentageDesBeneficeDesCategoriesNonVendusRf', {
                type: 'doughnut',
                data: {
                  labels: this.nameCategory,
                  datasets: [{
                    label: 'Categorie',
                    data: this.sumPrix,
                    backgroundColor: this.colors,
                    borderColor: this.colors,
                    borderWidth: 1
                  }]
                },
                options: {
                  title: {
                    text: "doughnutChart",
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
                        return currentValue.toLocaleString() +" DT"+ " (" + percentage + "%)";
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
