import { Component, OnInit } from '@angular/core';
import { ResponsableCommercialService } from 'src/app/services/responsable-commercial.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-status-commande-rc',
  templateUrl: './chart-status-commande-rc.component.html',
  styleUrls: ['./chart-status-commande-rc.component.css']
})
export class ChartStatusCommandeRcComponent implements OnInit {
  doughnutChart: any;
  constructor(private rcService:ResponsableCommercialService) { }
  yes:any=0;
  no:any=0;
  commandesTab:any=[];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.rcService.getAllCommandesById(this.userId).subscribe(
        (Response) => {
          this.commandesTab = Response.commandes
          for (let i = 0; i < this.commandesTab.length; i++) {
            if (this.commandesTab[i].status=="yes") {
              this.yes=this.yes+1;
            }
            else{
              this.no=this.no+1;
            }
          }
      this.doughnutChart = new Chart('doughnutChartStatusCommandeRc', {
        type: 'doughnut',
        data: {
          labels: ["In Stock", "No Stock"],
          datasets: [{
            label: '# Post',
            data: [this.yes, this.no],
            backgroundColor: ["#27AE60", "#A93226"],
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
      this.rcService.getAllCommandesById(this.entrepriseId).subscribe(
        (Response) => {
          this.commandesTab = Response.commandes
          for (let i = 0; i < this.commandesTab.length; i++) {
            if (this.commandesTab[i].status=="yes") {
              this.yes=this.yes+1;
            }
            else{
              this.no=this.no+1;
            }
          }
      this.doughnutChart = new Chart('doughnutChartStatusCommandeRc', {
        type: 'doughnut',
        data: {
          labels: ["In Stock", "No Stock"],
          datasets: [{
            label: '# Post',
            data: [this.yes, this.no],
            backgroundColor: ["#27AE60", "#A93226"],
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
