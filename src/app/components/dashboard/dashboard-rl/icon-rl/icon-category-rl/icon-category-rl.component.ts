import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-icon-category-rl',
  templateUrl: './icon-category-rl.component.html',
  styleUrls: ['./icon-category-rl.component.css']
})
export class IconCategoryRlComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }
  entrepriseId:any=localStorage.getItem("entrepriseId");
  categoryTab:any=[];
  allCategory:any=0;
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.categoryService.getCategory(this.userId).subscribe(
        (Response) => {
          this.categoryTab = Response.x;
          console.log("categoryTab",this.categoryTab)
          for (let i = 0; i < this.categoryTab.length; i++) {
            this.allCategory=this.allCategory+1;
            
          }
        }
      ) 
    }
    else{
      this.categoryService.getCategory(this.entrepriseId).subscribe(
        (Response) => {
          this.categoryTab = Response.x;
          console.log("categoryTab",this.categoryTab)
          for (let i = 0; i < this.categoryTab.length; i++) {
            this.allCategory=this.allCategory+1;
            
          }
        }
      )
    }
  }

}
