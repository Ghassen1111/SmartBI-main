import { Component, OnInit } from '@angular/core';
import { ResponsableRessourcesHumainesService } from 'src/app/services/responsable-ressources-humaines.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-country-employeur-rh',
  templateUrl: './chart-country-employeur-rh.component.html',
  styleUrls: ['./chart-country-employeur-rh.component.css']
})
export class ChartCountryEmployeurRhComponent implements OnInit {
  barChart: any;
  constructor(private rrhService:ResponsableRessourcesHumainesService) { }
  allUsers=[];
  allCountry = [];
  sumUserCountry = [];
  colors = [];
  entrepriseId:any=localStorage.getItem("entrepriseId")
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.rrhService.getAllEmployeursById(this.userId).subscribe(
        (Response) => {
          this.allUsers = Response.employeurs;
          this.allCountry.push(this.allUsers[1].country)
          let Country: any = this.allUsers[1].country
            for (let i = 0; i < this.allUsers.length; i++) {
              for (let i = 0; i < this.allUsers.length; i++) {
                if (this.allUsers[i].country != Country && !this.allCountry.includes(this.allUsers[i].country)) {
                  Country = this.allUsers[i].country;
                  this.allCountry.push(Country)
                }
              }
            }
          console.log("country", this.allCountry);
          for (let i = 0; i < this.allCountry.length; i++) {
            this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
            let C = this.allCountry[i]
            let sum: any = 0;
            for (let j = 0; j < this.allUsers.length; j++) {
              if (this.allUsers[j].country == C) {
                console.log(C);
                sum = sum + 1
              }
            }
            this.sumUserCountry.push(sum)
          }
          console.log(this.sumUserCountry);
      this.barChart = new Chart('barChartCountry', {
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
      this.rrhService.getAllEmployeursById(this.entrepriseId).subscribe(
        (Response) => {
          this.allUsers = Response.employeurs;
          this.allCountry.push(this.allUsers[1].country)
          let Country: any = this.allUsers[1].country
            for (let i = 0; i < this.allUsers.length; i++) {
              for (let i = 0; i < this.allUsers.length; i++) {
                if (this.allUsers[i].country != Country && !this.allCountry.includes(this.allUsers[i].country)) {
                  Country = this.allUsers[i].country;
                  this.allCountry.push(Country)
                }
              }
            }
          console.log("country", this.allCountry);
          for (let i = 0; i < this.allCountry.length; i++) {
            this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
            let C = this.allCountry[i]
            let sum: any = 0;
            for (let j = 0; j < this.allUsers.length; j++) {
              if (this.allUsers[j].country == C) {
                console.log(C);
                sum = sum + 1
              }
            }
            this.sumUserCountry.push(sum)
          }
          console.log(this.sumUserCountry);
      this.barChart = new Chart('barChartCountry', {
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
