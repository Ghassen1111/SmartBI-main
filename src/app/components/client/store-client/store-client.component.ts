import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store-client',
  templateUrl: './store-client.component.html',
  styleUrls: ['./store-client.component.css']
})
export class StoreClientComponent implements OnInit {
  productsTab: any = [];
  id: any;
  entrepriseId:any=localStorage.getItem("entrepriseId");
  categoryTab:any=[];
  items: any = [];
  pageOfItems: Array<any>;
  constructor(private activateRoute: ActivatedRoute, private productService: ProductService, private router: Router,private categoryService:CategoryService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.productService.getStoreById(this.id).subscribe(
      (Response) => {
        this.productsTab = Response.x
        console.log("productTab", this.productsTab);

      }
    )
    ////category
    this.categoryService.getCategory(this.entrepriseId).subscribe(
      (Response) => {
        this.categoryTab = Response.x;
        console.log("categoryTab", this.categoryTab)

      }
    )
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;

  }

}
