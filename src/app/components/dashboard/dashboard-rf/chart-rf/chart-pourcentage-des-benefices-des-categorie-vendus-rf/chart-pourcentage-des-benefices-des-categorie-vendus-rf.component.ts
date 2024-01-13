import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Chart from 'chart.js';
import { FactureService } from 'src/app/services/facture.service';
@Component({
  selector: 'app-chart-pourcentage-des-benefices-des-categorie-vendus-rf',
  templateUrl: './chart-pourcentage-des-benefices-des-categorie-vendus-rf.component.html',
  styleUrls: ['./chart-pourcentage-des-benefices-des-categorie-vendus-rf.component.css']
})
export class ChartPourcentageDesBeneficesDesCategorieVendusRfComponent implements OnInit {
  doughnutChart: any;
  colors = [];
  allFactures = [];
  allCategory = [];
  nameCategory = [];
  sumPrix = [];
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
                    let B=this.allFactures[j].product[0].prix-this.allFactures[j].product[0].prixReal
                    let sommeB=B*this.allFactures[j].qty
                    sum = sum +sommeB;
                  }
                }
                this.sumPrix.push(sum)
              }
              console.log("sumPrix", this.sumPrix);
  
              this.doughnutChart = new Chart('doughnutChartPourcentageDesBeneficeDesCategoriesVendusRf', {
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
                    let B=this.allFactures[j].product[0].prix-this.allFactures[j].product[0].prixReal
                    let sommeB=B*this.allFactures[j].qty
                    sum = sum +sommeB;
                  }
                }
                this.sumPrix.push(sum)
              }
              console.log("sumPrix", this.sumPrix);
  
              this.doughnutChart = new Chart('doughnutChartPourcentageDesBeneficeDesCategoriesVendusRf', {
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