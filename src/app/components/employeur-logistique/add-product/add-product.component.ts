import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  imagePreview:any='assets/img/avatar-stock.png';
  entrepriseId:any=localStorage.getItem("entrepriseId");
  productForm: FormGroup;
  categoryTab:any=[];
  msgError: string;
  constructor(private categoryService:CategoryService,private formBuilder: FormBuilder,private productService:ProductService,private router: Router) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      img: [''],
      name: ['',[Validators.required, Validators.minLength(2)]],
      prixReal: ['',[Validators.required]],
      qty: ['',[Validators.required]],
      prix: ['',[Validators.required]],
      category: ['',[Validators.required]],
      description: ['',[Validators.required , Validators.minLength(20)]],
    })
    this.categoryService.getCategory(this.entrepriseId).subscribe(
      (Response) => {
        this.categoryTab = Response.x;
        console.log("categoryTab",this.categoryTab)
        
      }
    )
  }
  AddProduct() {
    this.productForm.value.employeurId=localStorage.getItem("userId");
    this.productForm.value.entrepriseId=localStorage.getItem("entrepriseId");
    this.productForm.value.status="yes"
    console.log("here user object", this.productForm.value);
    this.productService.addProduct(this.productForm.value, this.productForm.value.img).subscribe(
      (Response) => {
        console.log("here response after add", Response.message);
        if (Response.message == "Email exsist") {
          this.msgError = Response.message
        }
        else {
          let id = localStorage.getItem("userId")
          this.router.navigate([`productTabEl/${id}`]);
        }

      }
    )
  }
  onImageSelected(event: Event) { 
    const file = (event.target as HTMLInputElement).files[0];
    this.productForm.patchValue({ img: file });
    this.productForm.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    console.log(this.imagePreview);
    
  }

}
