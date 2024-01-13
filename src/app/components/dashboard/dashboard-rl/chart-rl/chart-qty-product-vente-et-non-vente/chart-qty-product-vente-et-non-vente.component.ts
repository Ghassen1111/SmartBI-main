import { Component, OnInit } from '@angular/core';
import { ResponsableLogistiqueService } from 'src/app/services/responsable-logistique.service';
import Chart from 'chart.js';
import { FactureService } from 'src/app/services/facture.service';
@Component({
  selector: 'app-chart-qty-product-vente-et-non-vente',
  templateUrl: './chart-qty-product-vente-et-non-vente.component.html',
  styleUrls: ['./chart-qty-product-vente-et-non-vente.component.css']
})
export class ChartQtyProductVenteEtNonVenteComponent implements OnInit {
  barChart: any;
  allProduct = [];
  allProducts = [];
  allfactures = [];
  nameProduct = [];
  sumStockNonVente = [];
  sumStockVente = [];
  entrepriseId: any = localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  constructor(private rlService: ResponsableLogistiqueService, private factureService: FactureService) { }

  ngOnInit() {
    if (this.role=="entreprise") {
      this.rlService.getAllProductsById(this.userId).subscribe(
        (Response) => {
          this.allProduct = Response.products;
          console.log("allCategory", this.allProduct);
          this.rlService.getAllProductsById(this.userId).subscribe(
            (Response) => {
              this.allProducts = Response.products
              console.log("allProducts", this.allProducts);
              for (let i = 0; i < this.allProduct.length; i++) {
                let p = this.allProduct[i].name
                this.nameProduct.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allProducts.length; j++) {
                  if (this.allProducts[j].name == p) {
                    sum = sum + this.allProducts[j].qty
                  }
                }
                this.sumStockNonVente.push(sum)
              }
              console.log("sumStockNonVente", this.sumStockNonVente);
              //facture
              this.factureService.getAllFacturesById(this.userId).subscribe(
                (Response) => {
                  this.allfactures = Response.factures
                  console.log("allfactures", this.allfactures);
                  for (let i = 0; i < this.allProduct.length; i++) {
                    let p = this.allProduct[i].name
                    let sum: any = 0;
                    for (let j = 0; j < this.allfactures.length; j++) {
                      if (this.allfactures[j].product[0].name == p) {
                        sum = sum + this.allfactures[j].qty
                      }
                    }
                    this.sumStockVente.push(sum)
                  }
                  console.log("sumStockNonVente", this.sumStockNonVente);
  
                  this.barChart = new Chart('GroupedBarChartQtyProductVenteEtNonVente', {
                    type: 'bar',
                    data: {
                      labels: this.nameProduct,
                      datasets: [
                        {
                          label: "quantité invendus",
                          backgroundColor: "#3e95cd",
                          data: this.sumStockNonVente
                        }, {
                          label: "quantité vendus",
                          backgroundColor: "#8e5ea2",
                          data: this.sumStockVente
                        }
                      ]
                    },
                    options: {
                      title: {
                        text: "GroupedBar",
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
        });
    }
    else{
      this.rlService.getAllProductsById(this.entrepriseId).subscribe(
        (Response) => {
          this.allProduct = Response.products;
          console.log("allCategory", this.allProduct);
          this.rlService.getAllProductsById(this.entrepriseId).subscribe(
            (Response) => {
              this.allProducts = Response.products
              console.log("allProducts", this.allProducts);
              for (let i = 0; i < this.allProduct.length; i++) {
                let p = this.allProduct[i].name
                this.nameProduct.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allProducts.length; j++) {
                  if (this.allProducts[j].name == p) {
                    sum = sum + this.allProducts[j].qty
                  }
                }
                this.sumStockNonVente.push(sum)
              }
              console.log("sumStockNonVente", this.sumStockNonVente);
              //facture
              this.factureService.getAllFacturesById(this.entrepriseId).subscribe(
                (Response) => {
                  this.allfactures = Response.factures
                  console.log("allfactures", this.allfactures);
                  for (let i = 0; i < this.allProduct.length; i++) {
                    let p = this.allProduct[i].name
                    let sum: any = 0;
                    for (let j = 0; j < this.allfactures.length; j++) {
                      if (this.allfactures[j].product[0].name == p) {
                        sum = sum + this.allfactures[j].qty
                      }
                    }
                    this.sumStockVente.push(sum)
                  }
                  console.log("sumStockNonVente", this.sumStockNonVente);
  
                  this.barChart = new Chart('GroupedBarChartQtyProductVenteEtNonVente', {
                    type: 'bar',
                    data: {
                      labels: this.nameProduct,
                      datasets: [
                        {
                          label: "quantité invendus",
                          backgroundColor: "#3e95cd",
                          data: this.sumStockNonVente
                        }, {
                          label: "quantité vendus",
                          backgroundColor: "#8e5ea2",
                          data: this.sumStockVente
                        }
                      ]
                    },
                    options: {
                      title: {
                        text: "GroupedBar",
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
        });
    }
  }

}
