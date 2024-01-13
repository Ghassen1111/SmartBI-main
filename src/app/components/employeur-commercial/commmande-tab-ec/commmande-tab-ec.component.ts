import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';
import { EmployeurCommercialService } from 'src/app/services/employeur-commercial.service';

@Component({
  selector: 'app-commmande-tab-ec',
  templateUrl: './commmande-tab-ec.component.html',
  styleUrls: ['./commmande-tab-ec.component.css']
})
export class CommmandeTabEcComponent implements OnInit {
  commandesTab:any=[];
  id:any;
  items: any = [];
  pageOfItems: Array<any>;
  constructor(private ecService:EmployeurCommercialService,private activateRoute: ActivatedRoute,private router: Router,private commandeService:CommandeService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.ecService.getAllCommandesById(this.id).subscribe(
      (Response) => {
        this.commandesTab = Response.commandes
        console.log("commmandesTab",this.commandesTab);
        
      }
    )
  }
  editStatusCommande(id: any,status:string) {
    let commande = {};
    for (let i = 0; i < this.commandesTab.length; i++) {
      if (this.commandesTab[i]._id == id) {
          this.commandesTab[i].status = status;
          commande = this.commandesTab[i];
          console.log(commande);
      }
    }
    this.commandeService.editStatusCommande(commande).subscribe(
      (Response) => {
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.ecService.getAllCommandesById(this.id).subscribe(
          (Response) => {
            this.commandesTab = Response.commandes
            console.log("commandesTab",this.commandesTab);
            
          }
        )
      }
    )
  }
  Delet(id:any){
    this.commandeService.deleteCommandeByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.ecService.getAllCommandesById(this.id).subscribe(
          (Response) => {
            this.commandesTab = Response.commandes
            console.log("commmandesTab",this.commandesTab);
            
          }
        )
      }
    )
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;

  }

}
