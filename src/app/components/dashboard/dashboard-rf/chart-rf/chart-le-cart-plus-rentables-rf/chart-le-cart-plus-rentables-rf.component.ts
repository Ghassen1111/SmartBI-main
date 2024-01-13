import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-le-cart-plus-rentables-rf',
  templateUrl: './chart-le-cart-plus-rentables-rf.component.html',
  styleUrls: ['./chart-le-cart-plus-rentables-rf.component.css']
})
export class ChartLeCartPlusRentablesRfComponent implements OnInit {
  horizontalBarChart: any;
  constructor(private factureService:FactureService) { }
  D17:any=0;
  Visa:any=0;
  MasterCard:any=0;
  allFactures:any=[];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.factureService.getAllFacturesById(this.userId).subscribe(
        (Response) => {
          this.allFactures = Response.factures
          for (let i = 0; i < this.allFactures.length; i++) {
            if (this.allFactures[i].methodPayment=="Visa") {
              this.Visa=this.Visa+this.allFactures[i].totalPrix;
            }
            else if(this.allFactures[i].methodPayment=="Master-card"){
              this.MasterCard=this.MasterCard+this.allFactures[i].totalPrix;
            }
            else{
              this.D17=this.D17+this.allFactures[i].totalPrix;
            }
          }
      this.horizontalBarChart = new Chart('horizontalBarChartLeCartPlusRentablesRf', {
        type: 'bar',
        data: {
          labels: ["Visa", "Master-card","D17"],
          datasets: [{
            label: '# Post',
            data: [this.Visa, this.MasterCard,this.D17],
            backgroundColor: ["#23FF00", "#FF0000","#0004FF"],
            borderWidth: 1
          }]
        },
        options: {
          title: {
            text: "horizontalBar",
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
      
    })
    }
    else{
      this.factureService.getAllFacturesById(this.entrepriseId).subscribe(
        (Response) => {
          this.allFactures = Response.factures
          for (let i = 0; i < this.allFactures.length; i++) {
            if (this.allFactures[i].methodPayment=="Visa") {
              this.Visa=this.Visa+this.allFactures[i].totalPrix;
            }
            else if(this.allFactures[i].methodPayment=="Master-card"){
              this.MasterCard=this.MasterCard+this.allFactures[i].totalPrix;
            }
            else{
              this.D17=this.D17+this.allFactures[i].totalPrix;
            }
          }
      this.horizontalBarChart = new Chart('horizontalBarChartLeCartPlusRentablesRf', {
        type: 'bar',
        data: {
          labels: ["Visa", "Master-card","D17"],
          datasets: [{
            label: '# Post',
            data: [this.Visa, this.MasterCard,this.D17],
            backgroundColor: ["#23FF00", "#FF0000","#0004FF"],
            borderWidth: 1
          }]
        },
        options: {
          title: {
            text: "horizontalBar",
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
      
    })
    }
  }
  }
