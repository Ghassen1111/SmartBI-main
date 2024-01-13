import { Component, OnInit } from '@angular/core';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-icon-tva-rf',
  templateUrl: './icon-tva-rf.component.html',
  styleUrls: ['./icon-tva-rf.component.css']
})
export class IconTvaRfComponent implements OnInit {
  constructor(private factureService:FactureService) { }
  facturesTab:any=[];
  entrepriseId:any=localStorage.getItem("entrepriseId");
  allTVA:any=0;
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.factureService.getAllFacturesById(this.userId).subscribe(
        (Response) => {
          this.facturesTab = Response.factures
          for (let i = 0; i < this.facturesTab.length; i++) {
            this.allTVA=this.allTVA+this.facturesTab[i].TVA;
          }
        }
      )
    }
    else{
      this.factureService.getAllFacturesById(this.entrepriseId).subscribe(
        (Response) => {
          this.facturesTab = Response.factures
          for (let i = 0; i < this.facturesTab.length; i++) {
            this.allTVA=this.allTVA+this.facturesTab[i].TVA;
          }
        }
      )
    }
  }


}
