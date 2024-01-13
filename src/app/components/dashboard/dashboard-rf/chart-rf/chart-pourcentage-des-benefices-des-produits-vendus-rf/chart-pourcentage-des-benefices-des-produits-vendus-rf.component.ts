import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';
import { ResponsableLogistiqueService } from 'src/app/services/responsable-logistique.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-pourcentage-des-benefices-des-produits-vendus-rf',
  templateUrl: './chart-pourcentage-des-benefices-des-produits-vendus-rf.component.html',
  styleUrls: ['./chart-pourcentage-des-benefices-des-produits-vendus-rf.component.css']
})
export class ChartPourcentageDesBeneficesDesProduitsVendusRfComponent implements OnInit {
  barChart: any;
  colors = [];
  allFactures = [];
  allProducts = [];
  nameProduct = [];
  sumPrix = [];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  constructor(private factureService:FactureService,private rlService:ResponsableLogistiqueService) { }

  ngOnInit() {
    if (this.role=="entreprise") {
      this.rlService.getAllProductsById(this.userId).subscribe(
        (Response) => {
          this.allProducts = Response.products
          console.log("allProducts", this.allProducts);
          this.factureService.getAllFacturesById(this.userId).subscribe(
            (Response) => {
              this.allFactures = Response.factures
              console.log("allFactures", this.allFactures);
              for (let i = 0; i < this.allProducts.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allProducts[i].name
                this.nameProduct.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allFactures.length; j++) {
                  if (this.allFactures[j].product[0].name ==p) {
                    let B=this.allFactures[j].product[0].prix-this.allFactures[j].product[0].prixReal
                    let sommeB=B*this.allFactures[j].qty
                    sum = sum +sommeB;
                  }
                }
                this.sumPrix.push(sum)
              }
              console.log("sumPrix", this.sumPrix);
  
              this.barChart = new Chart('barChartPourcentageDesBeneficeDesProduitsVendusRf', {
                type: 'bar',
                data: {
                  labels: this.nameProduct,
                  datasets: [{
                    label: 'Product',
                    data: this.sumPrix,
                    backgroundColor: this.colors,
                    borderColor: this.colors,
                    borderWidth: 1
                  }]
                },
                options: {
                  title: {
                    text: "barChart",
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
      this.rlService.getAllProductsById(this.entrepriseId).subscribe(
        (Response) => {
          this.allProducts = Response.products
          console.log("allProducts", this.allProducts);
          this.factureService.getAllFacturesById(this.entrepriseId).subscribe(
            (Response) => {
              this.allFactures = Response.factures
              console.log("allFactures", this.allFactures);
              for (let i = 0; i < this.allProducts.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allProducts[i].name
                this.nameProduct.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allFactures.length; j++) {
                  if (this.allFactures[j].product[0].name ==p) {
                    let B=this.allFactures[j].product[0].prix-this.allFactures[j].product[0].prixReal
                    let sommeB=B*this.allFactures[j].qty
                    sum = sum +sommeB;
                  }
                }
                this.sumPrix.push(sum)
              }
              console.log("sumPrix", this.sumPrix);
  
              this.barChart = new Chart('barChartPourcentageDesBeneficeDesProduitsVendusRf', {
                type: 'bar',
                data: {
                  labels: this.nameProduct,
                  datasets: [{
                    label: 'Product',
                    data: this.sumPrix,
                    backgroundColor: this.colors,
                    borderColor: this.colors,
                    borderWidth: 1
                  }]
                },
                options: {
                  title: {
                    text: "barChart",
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
