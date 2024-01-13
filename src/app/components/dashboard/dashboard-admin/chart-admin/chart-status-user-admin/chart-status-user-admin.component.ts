import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-status-user-admin',
  templateUrl: './chart-status-user-admin.component.html',
  styleUrls: ['./chart-status-user-admin.component.css']
})
export class ChartStatusUserAdminComponent implements OnInit {
  doughnutChart: any;
  constructor(private adminService: AdminService) { }
  allUsers=[];
  yes:any=0;
  no:any=0;
  ngOnInit() {
    this.adminService.getAllUsers().subscribe(
      (Response) => {
        this.allUsers = Response.users;
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
