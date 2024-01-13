import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  entrepriseId:any=localStorage.getItem("entrepriseId");
  productForm: FormGroup;
  categoryTab:any=[];
  id:any;
  product:any={};
  constructor(private productService:ProductService,private activateRoute:ActivatedRoute,private categoryService:CategoryService,private formBuilder: FormBuilder,private router: Router) { }

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
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.productService.displayProductById(this.id).subscribe(
      (Response) => {
        this.product = Response.product
        console.log("product",this.product);
      }
      
    )
  }
  editProduct() {
    this.productService.editProduct(this.product).subscribe(
      (Response) => {   
      })
      let userId=localStorage.getItem('userId')
      this.router.navigate([`productTabEl/${userId}`]);
  }

}
