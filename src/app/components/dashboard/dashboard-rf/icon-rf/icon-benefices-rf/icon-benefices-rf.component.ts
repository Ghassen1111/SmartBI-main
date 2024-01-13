import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-icon-benefices-rf',
  templateUrl: './icon-benefices-rf.component.html',
  styleUrls: ['./icon-benefices-rf.component.css']
})
export class IconBeneficesRfComponent implements OnInit {

  constructor(private factureService:FactureService) { }
  facturesTab:any=[];
  entrepriseId:any=localStorage.getItem("entrepriseId");
  allBenefices:any=0;
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.factureService.getAllFacturesById(this.userId).subscribe(
        (Response) => {
          this.facturesTab = Response.factures
          for (let i = 0; i < this.facturesTab.length; i++) {
            let B:any=0;
            let sommeB:any=0;
            B=this.facturesTab[i].product[0].prix-this.facturesTab[i].product[0].prixReal
            sommeB=B*this.facturesTab[i].qty
            this.allBenefices=this.allBenefices+sommeB;
          }
        }
      )
    }
    else{
      this.factureService.getAllFacturesById(this.entrepriseId).subscribe(
        (Response) => {
          this.facturesTab = Response.factures
          for (let i = 0; i < this.facturesTab.length; i++) {
            let B:any=0;
            let sommeB:any=0;
            B=this.facturesTab[i].product[0].prix-this.facturesTab[i].product[0].prixReal
            sommeB=B*this.facturesTab[i].qty
            this.allBenefices=this.allBenefices+sommeB;
          }
        }
      )
    }
  }


}
