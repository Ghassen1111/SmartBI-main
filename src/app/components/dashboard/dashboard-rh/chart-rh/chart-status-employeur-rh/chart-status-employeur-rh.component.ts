import { Component, OnInit } from '@angular/core';
import { ResponsableRessourcesHumainesService } from 'src/app/services/responsable-ressources-humaines.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-status-employeur-rh',
  templateUrl: './chart-status-employeur-rh.component.html',
  styleUrls: ['./chart-status-employeur-rh.component.css']
})
export class ChartStatusEmployeurRhComponent implements OnInit {
  doughnutChart: any;
  constructor(private rrhService:ResponsableRessourcesHumainesService) { }
  allUsers=[];
  yes:any=0;
  no:any=0;
  entrepriseId:any=localStorage.getItem("entrepriseId")
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.rrhService.getAllEmployeursById(this.userId).subscribe(
        (Response) => {
          this.allUsers = Response.employeurs;
          for (let i = 0; i < this.allUsers.length; i++) {
            if (this.allUsers[i].status=="yes") {
              this.yes=this.yes+1;
            }
            else{
              this.no=this.no+1;
            }
          }
      this.doughnutChart = new Chart('doughnutChart', {
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
      this.rrhService.getAllEmployeursById(this.entrepriseId).subscribe(
        (Response) => {
          this.allUsers = Response.employeurs;
          for (let i = 0; i < this.allUsers.length; i++) {
            if (this.allUsers[i].status=="yes") {
              this.yes=this.yes+1;
            }
            else{
              this.no=this.no+1;
            }
          }
      this.doughnutChart = new Chart('doughnutChart', {
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
