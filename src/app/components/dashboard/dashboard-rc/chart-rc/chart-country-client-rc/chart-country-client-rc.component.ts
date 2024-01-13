import { Component, OnInit } from '@angular/core';
import { ResponsableCommercialService } from 'src/app/services/responsable-commercial.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-country-client-rc',
  templateUrl: './chart-country-client-rc.component.html',
  styleUrls: ['./chart-country-client-rc.component.css']
})
export class ChartCountryClientRcComponent implements OnInit {
  barChart: any;
  constructor(private rcService:ResponsableCommercialService) { }
  allCountry = [];
  sumUserCountry = [];
  colors = [];
  fournisseursTabRc:any=[];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.rcService.getAllFournisseursById(this.userId).subscribe(
        (Response) => {
          this.fournisseursTabRc = Response.fournisseurs
          this.allCountry.push(this.fournisseursTabRc[1].country)
          let Country: any = this.fournisseursTabRc[1].country
            for (let i = 0; i < this.fournisseursTabRc.length; i++) {
              for (let i = 0; i < this.fournisseursTabRc.length; i++) {
                if (this.fournisseursTabRc[i].country != Country && !this.allCountry.includes(this.fournisseursTabRc[i].country)) {
                  Country = this.fournisseursTabRc[i].country;
                  this.allCountry.push(Country)
                }
              }
            }
          console.log("country", this.allCountry);
          for (let i = 0; i < this.allCountry.length; i++) {
            this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
            let C = this.allCountry[i]
            let sum: any = 0;
            for (let j = 0; j < this.fournisseursTabRc.length; j++) {
              if (this.fournisseursTabRc[j].country == C) {
                console.log(C);
                sum = sum + 1
              }
            }
            this.sumUserCountry.push(sum)
          }
          console.log(this.sumUserCountry);
      this.barChart = new Chart('barChartCountryClientRc', {
        type: 'bar',
        data: {
          labels:  this.allCountry,
          datasets: [{
            label: '# Post',
            data: this.sumUserCountry,
            backgroundColor: this.colors,
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
      this.rcService.getAllFournisseursById(this.entrepriseId).subscribe(
        (Response) => {
          this.fournisseursTabRc = Response.fournisseurs
          this.allCountry.push(this.fournisseursTabRc[1].country)
          let Country: any = this.fournisseursTabRc[1].country
            for (let i = 0; i < this.fournisseursTabRc.length; i++) {
              for (let i = 0; i < this.fournisseursTabRc.length; i++) {
                if (this.fournisseursTabRc[i].country != Country && !this.allCountry.includes(this.fournisseursTabRc[i].country)) {
                  Country = this.fournisseursTabRc[i].country;
                  this.allCountry.push(Country)
                }
              }
            }
          console.log("country", this.allCountry);
          for (let i = 0; i < this.allCountry.length; i++) {
            this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
            let C = this.allCountry[i]
            let sum: any = 0;
            for (let j = 0; j < this.fournisseursTabRc.length; j++) {
              if (this.fournisseursTabRc[j].country == C) {
                console.log(C);
                sum = sum + 1
              }
            }
            this.sumUserCountry.push(sum)
          }
          console.log(this.sumUserCountry);
      this.barChart = new Chart('barChartCountryClientRc', {
        type: 'bar',
        data: {
          labels:  this.allCountry,
          datasets: [{
            label: '# Post',
            data: this.sumUserCountry,
            backgroundColor: this.colors,
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
