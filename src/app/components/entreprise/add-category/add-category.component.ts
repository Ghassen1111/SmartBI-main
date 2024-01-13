import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  categoryForm: FormGroup;
  categoryTab:any=[];
  entrepriseId:any=localStorage.getItem("userId");
  msgError: string;
  constructor(private formBuilder: FormBuilder,private router: Router,private categoryService:CategoryService) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      category: ['',Validators.required]
    })
    this.categoryService.getCategory(this.entrepriseId).subscribe(
      (Response) => {
        this.categoryTab = Response.x;
        console.log("categoryTab",this.categoryTab)
        
      }
    )
  }
 AddCategory() {
    this.categoryForm.value.entrepriseId=localStorage.getItem("userId");
    console.log("here user object", this.categoryForm.value);
    this.categoryService.addCategory(this.categoryForm.value).subscribe(
      (Response) => {
        console.log("here response after add", Response.message);
        if (Response.message == "Email exsist") {
          this.msgError = Response.message
        }
        else {
          this.router.navigate([`addCategory`]);
        }
        this.categoryService.getCategory(this.entrepriseId).subscribe(
          (Response) => {
            this.categoryTab = Response.x;
            console.log("categoryTab",this.categoryTab)
            
          }
        )
      }
    )
  }
  Delet(id:any){
    this.categoryService.deleteCategoryByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.categoryService.getCategory(this.entrepriseId).subscribe(
          (Response) => {
            this.categoryTab = Response.x;
            console.log("categoryTab",this.categoryTab)  
          }
        )
      }
    )
  }
  

}
