import { Component, OnInit } from '@angular/core';
import { ResponsableTechniqueService } from 'src/app/services/responsable-technique.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-status-reclamation-rt',
  templateUrl: './chart-status-reclamation-rt.component.html',
  styleUrls: ['./chart-status-reclamation-rt.component.css']
})
export class ChartStatusReclamationRtComponent implements OnInit {
  doughnutChart: any;
  constructor(private rtService:ResponsableTechniqueService) { }
  yes:any=0;
  no:any=0;
  reclamationsTab:any=[];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.rtService.getAllReclamationsById(this.userId).subscribe(
        (Response) => {
          this.reclamationsTab = Response.reclamations
          for (let i = 0; i < this.reclamationsTab.length; i++) {
            if (this.reclamationsTab[i].status=="yes") {
              this.yes=this.yes+1;
            }
            else{
              this.no=this.no+1;
            }
          }
      this.doughnutChart = new Chart('doughnutChartStatusReclamationRt', {
        type: 'doughnut',
        data: {
          labels: ["terminé", "en cours"],
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
      this.rtService.getAllReclamationsById(this.entrepriseId).subscribe(
        (Response) => {
          this.reclamationsTab = Response.reclamations
          for (let i = 0; i < this.reclamationsTab.length; i++) {
            if (this.reclamationsTab[i].status=="yes") {
              this.yes=this.yes+1;
            }
            else{
              this.no=this.no+1;
            }
          }
      this.doughnutChart = new Chart('doughnutChartStatusReclamationRt', {
        type: 'doughnut',
        data: {
          labels: ["terminé", "en cours"],
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
