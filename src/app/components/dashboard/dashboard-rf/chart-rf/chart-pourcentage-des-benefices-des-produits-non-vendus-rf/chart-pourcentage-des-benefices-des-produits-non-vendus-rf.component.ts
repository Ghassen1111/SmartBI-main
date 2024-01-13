import { Component, OnInit } from '@angular/core';
import { ResponsableLogistiqueService } from 'src/app/services/responsable-logistique.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-pourcentage-des-benefices-des-produits-non-vendus-rf',
  templateUrl: './chart-pourcentage-des-benefices-des-produits-non-vendus-rf.component.html',
  styleUrls: ['./chart-pourcentage-des-benefices-des-produits-non-vendus-rf.component.css']
})
export class ChartPourcentageDesBeneficesDesProduitsNonVendusRfComponent implements OnInit {
  barChart: any;
  colors = [];
  allProduct = [];
  allProducts = [];
  nameProduct = [];
  sumPrix = [];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  constructor(private rlService:ResponsableLogistiqueService) { }

  ngOnInit() {
    if (this.role=="entreprise") {
      this.rlService.getAllProductsById(this.userId).subscribe(
        (Response) => {
          this.allProducts = Response.products
          console.log("allProducts", this.allProducts);
          this.rlService.getAllProductsById(this.userId).subscribe(
            (Response) => {
              this.allProduct = Response.products
              console.log("allProduct", this.allProduct);
              for (let i = 0; i < this.allProducts.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allProducts[i].name
                this.nameProduct.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allProduct.length; j++) {
                  if (this.allProduct[j].name ==p) {
                    let B=this.allProduct[j].prix-this.allProduct[j].prixReal
                    let sommeB=B*this.allProduct[j].qty
                    sum = sum +sommeB;
                  }
                }
                this.sumPrix.push(sum)
              }
              console.log("sumPrix", this.sumPrix);
  
              this.barChart = new Chart('barChartPourcentageDesBeneficeDesProduitsNonVendusRf', {
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
          this.rlService.getAllProductsById(this.entrepriseId).subscribe(
            (Response) => {
              this.allProduct = Response.products
              console.log("allProduct", this.allProduct);
              for (let i = 0; i < this.allProducts.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allProducts[i].name
                this.nameProduct.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allProduct.length; j++) {
                  if (this.allProduct[j].name ==p) {
                    let B=this.allProduct[j].prix-this.allProduct[j].prixReal
                    let sommeB=B*this.allProduct[j].qty
                    sum = sum +sommeB;
                  }
                }
                this.sumPrix.push(sum)
              }
              console.log("sumPrix", this.sumPrix);
  
              this.barChart = new Chart('barChartPourcentageDesBeneficeDesProduitsNonVendusRf', {
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
