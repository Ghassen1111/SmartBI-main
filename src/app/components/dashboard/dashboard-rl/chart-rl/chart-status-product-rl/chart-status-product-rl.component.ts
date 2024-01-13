import { Component, OnInit } from '@angular/core';
import { ResponsableLogistiqueService } from 'src/app/services/responsable-logistique.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-status-product-rl',
  templateUrl: './chart-status-product-rl.component.html',
  styleUrls: ['./chart-status-product-rl.component.css']
})
export class ChartStatusProductRlComponent implements OnInit {
  doughnutChart: any;
  constructor(private rlService:ResponsableLogistiqueService) { }
  yes:any=0;
  no:any=0;
  productsTab:any=[];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.rlService.getAllProductsById(this.userId).subscribe(
        (Response) => {
          this.productsTab = Response.products
          for (let i = 0; i < this.productsTab.length; i++) {
            if (this.productsTab[i].status=="yes") {
              this.yes=this.yes+1;
            }
            else{
              this.no=this.no+1;
            }
          }
      this.doughnutChart = new Chart('doughnutChartStatusPeoductRl', {
        type: 'doughnut',
        data: {
          labels: ["affiché", "non affiché"],
          datasets: [{
            label: '# Post',
            data: [this.yes, this.no],
            backgroundColor: ["#1FFF00", "#FF0000"],
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
      
    }) 
    }
    else{
      this.rlService.getAllProductsById(this.entrepriseId).subscribe(
        (Response) => {
          this.productsTab = Response.products
          for (let i = 0; i < this.productsTab.length; i++) {
            if (this.productsTab[i].status=="yes") {
              this.yes=this.yes+1;
            }
            else{
              this.no=this.no+1;
            }
          }
      this.doughnutChart = new Chart('doughnutChartStatusPeoductRl', {
        type: 'doughnut',
        data: {
          labels: ["affiché", "non affiché"],
          datasets: [{
            label: '# Post',
            data: [this.yes, this.no],
            backgroundColor: ["#1FFF00", "#FF0000"],
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
      
    })
    }
  }
  }