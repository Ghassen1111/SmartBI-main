import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';
import { ResponsableCommercialService } from 'src/app/services/responsable-commercial.service';

@Component({
  selector: 'app-commandes-tab-rc',
  templateUrl: './commandes-tab-rc.component.html',
  styleUrls: ['./commandes-tab-rc.component.css']
})
export class CommandesTabRcComponent implements OnInit {
  commandesTab:any=[];
  id:any;
  items: any = [];
  pageOfItems: Array<any>;
  constructor(private rcService:ResponsableCommercialService,private activateRoute: ActivatedRoute,private router: Router,private commandeService:CommandeService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.rcService.getAllCommandesById(this.id).subscribe(
      (Response) => {
        this.commandesTab = Response.commandes
        console.log("commmandesTab",this.commandesTab);
        
      }
    )
  }
  Delet(id:any){
    this.commandeService.deleteCommandeByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.rcService.getAllCommandesById(this.id).subscribe(
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
