import { Component, OnInit } from '@angular/core';
import { ResponsableLogistiqueService } from 'src/app/services/responsable-logistique.service';

@Component({
  selector: 'app-icon-stock-rl',
  templateUrl: './icon-stock-rl.component.html',
  styleUrls: ['./icon-stock-rl.component.css']
})
export class IconStockRlComponent implements OnInit {

  constructor(private rlService:ResponsableLogistiqueService) { }
  productsTab:any=[];
  entrepriseId:any=localStorage.getItem("entrepriseId");
  allStock:any=0;
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.rlService.getAllProductsById(this.userId).subscribe(
        (Response) => {
          this.productsTab = Response.products
          for (let i = 0; i < this.productsTab.length; i++) {
            this.allStock=this.allStock+this.productsTab[i].qty;
          }
        }
      )
    }
    else{
      this.rlService.getAllProductsById(this.entrepriseId).subscribe(
        (Response) => {
          this.productsTab = Response.products
          for (let i = 0; i < this.productsTab.length; i++) {
            this.allStock=this.allStock+this.productsTab[i].qty;
          }
        }
      )
    }
  }

}
