import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-sexe-user-admin',
  templateUrl: './chart-sexe-user-admin.component.html',
  styleUrls: ['./chart-sexe-user-admin.component.css']
})
export class ChartSexeUserAdminComponent implements OnInit {
  PieChart: any;
  constructor(private adminService: AdminService) { }
  allUsers=[];
  homme:any=0;
  famme:any=0;
  ngOnInit() {
    this.adminService.getAllUsers().subscribe(
      (Response) => {
        this.allUsers = Response.users;
        for (let i = 0; i < this.allUsers.length; i++) {
          if (this.allUsers[i].sexe=="homme") {
            this.homme=this.homme+1;
          }
          else{
            this.famme=this.famme+1;
          }
        }
    this.PieChart = new Chart('PieChart', {
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
