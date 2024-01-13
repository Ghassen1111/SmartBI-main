import { Component, OnInit } from '@angular/core';
import { ResponsableCommercialService } from 'src/app/services/responsable-commercial.service';

@Component({
  selector: 'app-icon-commande-rc',
  templateUrl: './icon-commande-rc.component.html',
  styleUrls: ['./icon-commande-rc.component.css']
})
export class IconCommandeRcComponent implements OnInit {

  constructor(private rcService:ResponsableCommercialService) { }
  commandesTab:any=[];
  entrepriseId:any=localStorage.getItem('entrepriseId')
  allCommande:any=0
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.rcService.getAllCommandesById(this.userId).subscribe(
        (Response) => {
          this.commandesTab = Response.commandes
          for (let i = 0; i < this.commandesTab.length; i++) {
              this.allCommande=this.allCommande+1;
          }
        }
      )
    }
    else{
      this.rcService.getAllCommandesById(this.entrepriseId).subscribe(
        (Response) => {
          this.commandesTab = Response.commandes
          for (let i = 0; i < this.commandesTab.length; i++) {
              this.allCommande=this.allCommande+1;
          }
        }
      )
    }
  }

}
