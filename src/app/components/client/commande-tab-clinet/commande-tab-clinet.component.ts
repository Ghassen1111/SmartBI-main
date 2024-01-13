import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinetService } from 'src/app/services/clinet.service';
import { CommandeService } from 'src/app/services/commande.service';

@Component({
  selector: 'app-commande-tab-clinet',
  templateUrl: './commande-tab-clinet.component.html',
  styleUrls: ['./commande-tab-clinet.component.css']
})
export class CommandeTabClinetComponent implements OnInit {
  commandesTab:any=[];
  id:any;
  items: any = [];
  pageOfItems: Array<any>;
  constructor(private clinetService:ClinetService,private activateRoute: ActivatedRoute,private router: Router,private commandeService:CommandeService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.clinetService.getAllCommandesById(this.id).subscribe(
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
        this.clinetService.getAllCommandesById(this.id).subscribe(
          (Response) => {
            this.commandesTab = Response.commandes
            console.log("commandesTab",this.commandesTab);
            
          }
        )
      }
    )
  }
  paymentCommande(id:any){
    this.router.navigate([`paymentCommande/${id}`]);
  }
  nav(){
    let id = localStorage.getItem('entrepriseId')
    this.router.navigate([`storeClient/${id}`]);
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;

  }

}
