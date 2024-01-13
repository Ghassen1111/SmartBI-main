import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { ResponsableRessourcesHumainesService } from 'src/app/services/responsable-ressources-humaines.service';
@Component({
  selector: 'app-chart-role-employeur-rh',
  templateUrl: './chart-role-employeur-rh.component.html',
  styleUrls: ['./chart-role-employeur-rh.component.css']
})
export class ChartRoleEmployeurRhComponent implements OnInit {
  barChart: any;
  constructor(private rrhService:ResponsableRessourcesHumainesService) { }
  employeursTab = [];
  el: any = 0;
  ec: any = 0;
  ef: any = 0;
  et: any = 0;
  entrepriseId:any=localStorage.getItem("entrepriseId")
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.rrhService.getAllEmployeursById(this.userId).subscribe(
        (Response) => {
          this.employeursTab = Response.employeurs
          for (let i = 0; i < this.employeursTab.length; i++) {
            if(this.employeursTab[i].role =='employeur logistique'){
              this.el=this.el+1;
            }
            else if(this.employeursTab[i].role =='employeur commercial'){
              this.ec=this.ec+1;
            }
            else if(this.employeursTab[i].role =='employeur financier'){
              this.ef=this.ef+1;
            }
            else{
              this.et=this.et+1;
            }
          }
          console.log(this.el);
          this.barChart = new Chart('barChart', {
            type: 'bar',
            data: {
              labels: ["assistante logistique", "assistante commercial", "assistante financier","assistante technique"],
              datasets: [{
                label: '# Post',
                data: [this.el,this.ec,this.ef,this.et],
                backgroundColor: ["#27AE60", "#2471A3", "#BA4A00","#6C3483"],
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
          this.employeursTab = Response.employeurs
          for (let i = 0; i < this.employeursTab.length; i++) {
            if(this.employeursTab[i].role =='employeur logistique'){
              this.el=this.el+1;
            }
            else if(this.employeursTab[i].role =='employeur commercial'){
              this.ec=this.ec+1;
            }
            else if(this.employeursTab[i].role =='employeur financier'){
              this.ef=this.ef+1;
            }
            else{
              this.et=this.et+1;
            }
          }
          console.log(this.el);
          this.barChart = new Chart('barChart', {
            type: 'bar',
            data: {
              labels: ["assistante logistique", "assistante commercial", "assistante financier","assistante technique"],
              datasets: [{
                label: '# Post',
                data: [this.el,this.ec,this.ef,this.et],
                backgroundColor: ["#27AE60", "#2471A3", "#BA4A00","#6C3483"],
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

