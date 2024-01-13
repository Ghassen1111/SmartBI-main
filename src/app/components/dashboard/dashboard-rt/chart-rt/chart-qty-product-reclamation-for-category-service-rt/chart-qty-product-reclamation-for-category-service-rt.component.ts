import { Component, OnInit } from '@angular/core';
import { ResponsableTechniqueService } from 'src/app/services/responsable-technique.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-qty-product-reclamation-for-category-service-rt',
  templateUrl: './chart-qty-product-reclamation-for-category-service-rt.component.html',
  styleUrls: ['./chart-qty-product-reclamation-for-category-service-rt.component.css']
})
export class ChartQtyProductReclamationForCategoryServiceRtComponent implements OnInit {
  barChart: any;
  constructor(private rtService:ResponsableTechniqueService) { }
  commercial:any=0;
  financier:any=0;
  logistique:any=0;
  technique:any=0;
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
            if (this.reclamationsTab[i].probleme=="commercial") {
              this.commercial=this.commercial+this.reclamationsTab[i].qty;
            }
            else if(this.reclamationsTab[i].probleme=="financier"){
              this.financier=this.financier+this.reclamationsTab[i].qty;
            }
            else if(this.reclamationsTab[i].probleme=="logistique"){
              this.logistique=this.logistique+this.reclamationsTab[i].qty;
            }
            else{
              this.technique=this.technique+this.reclamationsTab[i].qty;
            }
          }
      this.barChart = new Chart('barChartQtyProductReclamationForCategoryServiceRt', {
        type: 'bar',
        data: {
          labels: ["Commercial", "Financier","Logistique","Technique"],
          datasets: [{
            label: '# Service',
            data: [this.commercial,this.financier,this.logistique,this.technique],
            backgroundColor: ["#36FF00", "#FF0000","#FFEC00","#0004FF"],
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
      this.rtService.getAllReclamationsById(this.entrepriseId).subscribe(
        (Response) => {
          this.reclamationsTab = Response.reclamations
          for (let i = 0; i < this.reclamationsTab.length; i++) {
            if (this.reclamationsTab[i].probleme=="commercial") {
              this.commercial=this.commercial+this.reclamationsTab[i].qty;
            }
            else if(this.reclamationsTab[i].probleme=="financier"){
              this.financier=this.financier+this.reclamationsTab[i].qty;
            }
            else if(this.reclamationsTab[i].probleme=="logistique"){
              this.logistique=this.logistique+this.reclamationsTab[i].qty;
            }
            else{
              this.technique=this.technique+this.reclamationsTab[i].qty;
            }
          }
      this.barChart = new Chart('barChartQtyProductReclamationForCategoryServiceRt', {
        type: 'bar',
        data: {
          labels: ["Commercial", "Financier","Logistique","Technique"],
          datasets: [{
            label: '# Service',
            data: [this.commercial,this.financier,this.logistique,this.technique],
            backgroundColor: ["#36FF00", "#FF0000","#FFEC00","#0004FF"],
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
