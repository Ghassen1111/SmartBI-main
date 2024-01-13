import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-chart-post-user-admin',
  templateUrl: './chart-post-user-admin.component.html',
  styleUrls: ['./chart-post-user-admin.component.css']
})
export class ChartPostUserAdminComponent implements OnInit {
  barChart: any;
  constructor(private adminService: AdminService) { }
  allUsers=[];
  responsable:any=0;
  employeur:any=0;
  client:any=0;
  ngOnInit() {
    this.adminService.getAllUsers().subscribe(
      (Response) => {
        this.allUsers = Response.users;
        for (let i = 0; i < this.allUsers.length; i++) {
          if (this.allUsers[i].post=="responsable") {
            this.responsable=this.responsable+1;
          }
          else if(this.allUsers[i].post=="employeur") {
            this.employeur=this.employeur+1;
          }
          else{
            this.client=this.client+1;
          }
        }
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ["responsable", "assistante", "client"],
        datasets: [{
          label: '# Post',
          data: [this.responsable, this.employeur,this.client],
          backgroundColor: ["#FBFF00", "#8e5ea2", "#00A2FF"],
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
