import { Component, OnInit } from '@angular/core';
import { ResponsableCommercialService } from 'src/app/services/responsable-commercial.service';
import { ResponsableLogistiqueService } from 'src/app/services/responsable-logistique.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-somme-commande-for-product-rc',
  templateUrl: './chart-somme-commande-for-product-rc.component.html',
  styleUrls: ['./chart-somme-commande-for-product-rc.component.css']
})
export class ChartSommeCommandeForProductRcComponent implements OnInit {
  polarAreaChart: any;
  colors = [];
  allProduct = [];
  allcommmandes = [];
  nameProduct = [];
  sumCommandes = [];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  constructor(private rlService:ResponsableLogistiqueService,private rcService:ResponsableCommercialService) { }

  ngOnInit() {
    if (this.role=="entreprise") {
      this.rlService.getAllProductsById(this.userId).subscribe(
        (Response) => {
          this.allProduct = Response.products
          console.log("allProduct", this.allProduct);
          this.rcService.getAllCommandesById(this.userId).subscribe(
            (Response) => {
              this.allcommmandes = Response.commandes
              console.log("all commandes", this.allcommmandes);
              for (let i = 0; i < this.allProduct.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allProduct[i].name
                this.nameProduct.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allcommmandes.length; j++) {
                  if (this.allcommmandes[j].product[0].name == p) {
                    sum = sum + this.allcommmandes[j].qty
                  }
                }
                this.sumCommandes.push(sum)
              }
              console.log("sum commandes", this.sumCommandes);
  
              this.polarAreaChart = new Chart('polarAreaChartSommeQtyCommandeForProduct', {
                type: 'polarArea',
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
                    text: "polarArea",
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
      this.rlService.getAllProductsById(this.entrepriseId).subscribe(
        (Response) => {
          this.allProduct = Response.products
          console.log("allProduct", this.allProduct);
          this.rcService.getAllCommandesById(this.entrepriseId).subscribe(
            (Response) => {
              this.allcommmandes = Response.commandes
              console.log("all commandes", this.allcommmandes);
              for (let i = 0; i < this.allProduct.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allProduct[i].name
                this.nameProduct.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allcommmandes.length; j++) {
                  if (this.allcommmandes[j].product[0].name == p) {
                    sum = sum + this.allcommmandes[j].qty
                  }
                }
                this.sumCommandes.push(sum)
              }
              console.log("sum commandes", this.sumCommandes);
  
              this.polarAreaChart = new Chart('polarAreaChartSommeQtyCommandeForProduct', {
                type: 'polarArea',
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
                    text: "polarArea",
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
