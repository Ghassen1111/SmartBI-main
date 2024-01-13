import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-icon-ventes-rl',
  templateUrl: './icon-ventes-rl.component.html',
  styleUrls: ['./icon-ventes-rl.component.css']
})
export class IconVentesRlComponent implements OnInit {

  constructor(private factureService:FactureService) { }
  facturesTab:any=[];
  entrepriseId:any=localStorage.getItem("entrepriseId");
  allQtyVentes:any=0;
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.factureService.getAllFacturesById(this.userId).subscribe(
        (Response) => {
          this.facturesTab = Response.factures
          for (let i = 0; i < this.facturesTab.length; i++) {
            this.allQtyVentes=this.allQtyVentes+this.facturesTab[i].qty;
          }
        }
      )
    }
    else{
      this.factureService.getAllFacturesById(this.entrepriseId).subscribe(
        (Response) => {
          this.facturesTab = Response.factures
          for (let i = 0; i < this.facturesTab.length; i++) {
            this.allQtyVentes=this.allQtyVentes+this.facturesTab[i].qty;
          }
        }
      )
    }
  }

}
