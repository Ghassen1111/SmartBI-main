import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeurLogistiqueService } from 'src/app/services/employeur-logistique.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-tab-el',
  templateUrl: './product-tab-el.component.html',
  styleUrls: ['./product-tab-el.component.css']
})
export class ProductTabElComponent implements OnInit {
  productsTab:any=[];
  id:any;
  items: any = [];
  pageOfItems: Array<any>;
  constructor(private elService:EmployeurLogistiqueService,private activateRoute: ActivatedRoute,private productService:ProductService,private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.elService.getAllProductsById(this.id).subscribe(
      (Response) => {
        this.productsTab = Response.products
        console.log("productTab",this.productsTab);
        
      }
    )
  }
  Delet(id:any){
    this.productService.deleteProductByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.elService.getAllProductsById(this.id).subscribe(
          (Response) => {
            this.productsTab = Response.products
            console.log("productTab",this.productsTab);
            
          }
        )
      }
    )
  }
  displayProduct(id:any){
    this.router.navigate([`displayProduct/${id}`]);
  }
  editProduct(id:any){
    this.router.navigate([`editProduct/${id}`]);
  }
  nav(){
    this.router.navigate(['addProduct']);
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;

  }
}
