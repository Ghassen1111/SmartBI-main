import { Component, OnInit } from '@angular/core';
import { ResponsableCommercialService } from 'src/app/services/responsable-commercial.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-status-clinet-rc',
  templateUrl: './chart-status-clinet-rc.component.html',
  styleUrls: ['./chart-status-clinet-rc.component.css']
})
export class ChartStatusClinetRcComponent implements OnInit {
  doughnutChart: any;
  constructor(private rcService:ResponsableCommercialService) { }
  yes:any=0;
  no:any=0;
  fournisseursTabRc:any=[];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.rcService.getAllFournisseursById(this.userId).subscribe(
        (Response) => {
          this.fournisseursTabRc = Response.fournisseurs
          for (let i = 0; i < this.fournisseursTabRc.length; i++) {
            if (this.fournisseursTabRc[i].status=="yes") {
              this.yes=this.yes+1;
            }
            else{
              this.no=this.no+1;
            }
          }
      this.doughnutChart = new Chart('doughnutChartStatusClinetRc', {
        type: 'doughnut',
        data: {
          labels: ["active", "non active"],
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
      this.rcService.getAllFournisseursById(this.entrepriseId).subscribe(
        (Response) => {
          this.fournisseursTabRc = Response.fournisseurs
          for (let i = 0; i < this.fournisseursTabRc.length; i++) {
            if (this.fournisseursTabRc[i].status=="yes") {
              this.yes=this.yes+1;
            }
            else{
              this.no=this.no+1;
            }
          }
      this.doughnutChart = new Chart('doughnutChartStatusClinetRc', {
        type: 'doughnut',
        data: {
          labels: ["active", "non active"],
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
