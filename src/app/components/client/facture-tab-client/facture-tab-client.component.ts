import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinetService } from 'src/app/services/clinet.service';

@Component({
  selector: 'app-facture-tab-client',
  templateUrl: './facture-tab-client.component.html',
  styleUrls: ['./facture-tab-client.component.css']
})
export class FactureTabClientComponent implements OnInit {
  facturesTab:any=[];
  id:any;
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private clinetService:ClinetService,private activateRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.clinetService.getAllFacturesById(this.id).subscribe(
      (Response) => {
        this.facturesTab = Response.factures
        console.log("facturesTab",this.facturesTab);
        
      }
    )
  }
  displayFacture(id:any){
    this.router.navigate([`displayFacture/${id}`]);
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;
  
    }

}
