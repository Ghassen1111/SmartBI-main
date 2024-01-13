import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { ResponsableTechniqueService } from 'src/app/services/responsable-technique.service';
import Chart from 'chart.js';
@Component({
  selector: 'app-chart-qty-product-reclamation-for-category-rt',
  templateUrl: './chart-qty-product-reclamation-for-category-rt.component.html',
  styleUrls: ['./chart-qty-product-reclamation-for-category-rt.component.css']
})
export class ChartQtyProductReclamationForCategoryRtComponent implements OnInit {
  horizontalBarChart: any;
  colors = [];
  allCategory = [];
  allReclamation = [];
  nameCategory = [];
  sumQty = [];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  constructor(private categoryService:CategoryService,private rtService:ResponsableTechniqueService) { }

  ngOnInit() {
    if (this.role=="entreprise") {
      this.categoryService.getCategory(this.userId).subscribe(
        (Response) => {
          this.allCategory = Response.x;
          console.log("allCategory", this.allCategory);
          this.rtService.getAllReclamationsById(this.userId).subscribe(
            (Response) => {
              this.allReclamation = Response.reclamations
              console.log("allReclamation", this.allReclamation);
              for (let i = 0; i < this.allCategory.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allCategory[i].category
                this.nameCategory.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allReclamation.length; j++) {
                  if (this.allReclamation[j].product[0].category ==p) {
                    sum = sum + this.allReclamation[j].qty
                  }
                }
                this.sumQty.push(sum)
              }
              console.log("sumQty", this.sumQty);
  
              this.horizontalBarChart = new Chart('horizontalBarQtyReclamationForCategory', {
                type: 'horizontalBar',
                data: {
                  labels: this.nameCategory,
                  datasets: [{
                    label: 'Category',
                    data: this.sumQty,
                    backgroundColor: this.colors,
                    borderColor: this.colors,
                    borderWidth: 1
                  }]
                },
                options: {
                  title: {
                    text: "horizontalBarChart",
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
            });
        }); 
    }
    else{
      this.categoryService.getCategory(this.entrepriseId).subscribe(
        (Response) => {
          this.allCategory = Response.x;
          console.log("allCategory", this.allCategory);
          this.rtService.getAllReclamationsById(this.entrepriseId).subscribe(
            (Response) => {
              this.allReclamation = Response.reclamations
              console.log("allReclamation", this.allReclamation);
              for (let i = 0; i < this.allCategory.length; i++) {
                this.colors.push(`rgb(${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)},${Math.floor(Math.random() * 100)})`)
                let p = this.allCategory[i].category
                this.nameCategory.push(p)
                let sum: any = 0;
                for (let j = 0; j < this.allReclamation.length; j++) {
                  if (this.allReclamation[j].product[0].category ==p) {
                    sum = sum + this.allReclamation[j].qty
                  }
                }
                this.sumQty.push(sum)
              }
              console.log("sumQty", this.sumQty);
  
              this.horizontalBarChart = new Chart('horizontalBarQtyReclamationForCategory', {
                type: 'horizontalBar',
                data: {
                  labels: this.nameCategory,
                  datasets: [{
                    label: 'Category',
                    data: this.sumQty,
                    backgroundColor: this.colors,
                    borderColor: this.colors,
                    borderWidth: 1
                  }]
                },
                options: {
                  title: {
                    text: "horizontalBarChart",
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
            });
        });
    }
  }

}
