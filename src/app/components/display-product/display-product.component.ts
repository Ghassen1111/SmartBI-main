import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {
  id:any;
  product:any={};
  constructor(private productService:ProductService,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.productService.displayProductById(this.id).subscribe(
      (Response) => {
        this.product = Response.product
        console.log("product",this.product);
      }
      
    )
  }

}
