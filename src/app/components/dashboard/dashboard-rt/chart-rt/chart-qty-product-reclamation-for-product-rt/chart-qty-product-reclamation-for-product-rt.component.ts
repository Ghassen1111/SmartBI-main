import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ResponsableLogistiqueService } from 'src/app/services/responsable-logistique.service';
import { ResponsableTechniqueService } from 'src/app/services/responsable-technique.service';
@Component({
  selector: 'app-chart-qty-product-reclamation-for-product-rt',
  templateUrl: './chart-qty-product-reclamation-for-product-rt.component.html',
  styleUrls: ['./chart-qty-product-reclamation-for-product-rt.component.css']
})
export class ChartQtyProductReclamationForProductRtComponent implements OnInit {
  pieChart: any;
  colors = [];
  allProducts = [];
  allReclamation = [];
  nameProduct = [];
  sumQtyReclamation = [];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  constructor(private rlService:ResponsableLogistiqueService,private rtService:ResponsableTechniqueService) { }

  ngOnInit() {
    if (this.role=="entreprise") {
      this.rlService.getAllProductsById(this.userId).subscribe(
        (Response) => {
          this.allProducts = Response.products
          this.rtService.getAllReclamationsById(this.userId).subscribe(
            (Response) => {
              this.allReclamation = Response.reclamations
              console.log("allReclamation", this.allReclamation);
              for (let i = 0; i < this.allProducts.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allProducts[i].name
                this.nameProduct.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allReclamation.length; j++) {
                  if (this.allReclamation[j].product[0].name ==p) {
                    sum = sum +this.allReclamation[j].qty;
                  }
                }
                this.sumQtyReclamation.push(sum)
              }
              console.log("sum commandes", this.sumQtyReclamation);
  
              this.pieChart = new Chart('pieChartQtyReclamationForProduct', {
                type: 'pie',
                data: {
                  labels: this.nameProduct,
                  datasets: [{
                    label: 'Produit',
                    data: this.sumQtyReclamation,
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
      this.rlService.getAllProductsById(this.entrepriseId).subscribe(
        (Response) => {
          this.allProducts = Response.products
          this.rtService.getAllReclamationsById(this.entrepriseId).subscribe(
            (Response) => {
              this.allReclamation = Response.reclamations
              console.log("allReclamation", this.allReclamation);
              for (let i = 0; i < this.allProducts.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allProducts[i].name
                this.nameProduct.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allReclamation.length; j++) {
                  if (this.allReclamation[j].product[0].name ==p) {
                    sum = sum +this.allReclamation[j].qty;
                  }
                }
                this.sumQtyReclamation.push(sum)
              }
              console.log("sum commandes", this.sumQtyReclamation);
  
              this.pieChart = new Chart('pieChartQtyReclamationForProduct', {
                type: 'pie',
                data: {
                  labels: this.nameProduct,
                  datasets: [{
                    label: 'Produit',
                    data: this.sumQtyReclamation,
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
