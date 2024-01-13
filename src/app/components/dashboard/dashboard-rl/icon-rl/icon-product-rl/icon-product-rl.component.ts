import { Component, OnInit } from '@angular/core';
import { ResponsableLogistiqueService } from 'src/app/services/responsable-logistique.service';

@Component({
  selector: 'app-icon-product-rl',
  templateUrl: './icon-product-rl.component.html',
  styleUrls: ['./icon-product-rl.component.css']
})
export class IconProductRlComponent implements OnInit {

  constructor(private rlService:ResponsableLogistiqueService) { }
  productsTab:any=[];
  entrepriseId:any=localStorage.getItem("entrepriseId");
  allProduct:any=0;
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.rlService.getAllProductsById(this.userId).subscribe(
        (Response) => {
          this.productsTab = Response.products
          for (let i = 0; i < this.productsTab.length; i++) {
            this.allProduct=this.allProduct+1;
          }
        }
      ) 
    }
    else{
      this.rlService.getAllProductsById(this.entrepriseId).subscribe(
        (Response) => {
          this.productsTab = Response.products
          for (let i = 0; i < this.productsTab.length; i++) {
            this.allProduct=this.allProduct+1;
          }
        }
      )
    }
  }

}
