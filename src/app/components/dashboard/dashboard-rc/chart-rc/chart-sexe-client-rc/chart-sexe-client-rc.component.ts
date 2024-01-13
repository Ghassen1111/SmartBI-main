import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ResponsableCommercialService } from 'src/app/services/responsable-commercial.service';
@Component({
  selector: 'app-chart-sexe-client-rc',
  templateUrl: './chart-sexe-client-rc.component.html',
  styleUrls: ['./chart-sexe-client-rc.component.css']
})
export class ChartSexeClientRcComponent implements OnInit {
  PieChart: any;
  constructor(private rcService:ResponsableCommercialService) { }
  homme:any=0;
  famme:any=0;
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
            if (this.fournisseursTabRc[i].sexe=="homme") {
              this.homme=this.homme+1;
            }
            else{
              this.famme=this.famme+1;
            }
          }
      this.PieChart = new Chart('PieChartSexeClientRc', {
        type: 'pie',
        data: {
          labels: ["homme", "femme"],
          datasets: [{
            label: '# Post',
            data: [this.homme, this.famme],
            backgroundColor: ["#006BFB", "#FC58FF "],
            borderWidth: 1
          }]
        },
        options: {
          title: {
            text: "PieChart",
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
            if (this.fournisseursTabRc[i].sexe=="homme") {
              this.homme=this.homme+1;
            }
            else{
              this.famme=this.famme+1;
            }
          }
      this.PieChart = new Chart('PieChartSexeClientRc', {
        type: 'pie',
        data: {
          labels: ["homme", "femme"],
          datasets: [{
            label: '# Post',
            data: [this.homme, this.famme],
            backgroundColor: ["#006BFB", "#FC58FF "],
            borderWidth: 1
          }]
        },
        options: {
          title: {
            text: "PieChart",
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