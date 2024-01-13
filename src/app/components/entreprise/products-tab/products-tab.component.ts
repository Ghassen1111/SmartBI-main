import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-tab',
  templateUrl: './products-tab.component.html',
  styleUrls: ['./products-tab.component.css']
})
export class ProductsTabComponent implements OnInit {

  productsTab: any = [];
  id: any;
  items: any = [];
  pageOfItems: Array<any>;
  constructor(private entrepriseService: EntrepriseService, private activateRoute: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.entrepriseService.getAllProductsById(this.id).subscribe(
      (Response) => {
        this.productsTab = Response.products
        console.log("productTab", this.productsTab);

      }
    )
  }
  Delet(id: any) {
    this.productService.deleteProductByTd(id).subscribe(
      (Response) => {
        console.log("here ", Response.message);
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.entrepriseService.getAllProductsById(this.id).subscribe(
          (Response) => {
            this.productsTab = Response.products
            console.log("productTab", this.productsTab);

          }
        )
      }
    )
  }
  editStatusProduct(id: any, status: string) {
    let product = {};
    for (let i = 0; i < this.productsTab.length; i++) {
      if (this.productsTab[i]._id == id) {
        this.productsTab[i].status = status;
        product = this.productsTab[i];
        console.log(product);
      }
    }
    this.productService.editStatusProduct(product).subscribe(
      (Response) => {
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.entrepriseService.getAllProductsById(this.id).subscribe(
          (Response) => {
            this.productsTab = Response.products
            console.log("productTab", this.productsTab);

          }
        )
      }
    )
  }
  displayProduct(id: any) {
    this.router.navigate([`displayProduct/${id}`]);
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;

  }
}

