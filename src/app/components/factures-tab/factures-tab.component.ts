import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinetService } from 'src/app/services/clinet.service';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-factures-tab',
  templateUrl: './factures-tab.component.html',
  styleUrls: ['./factures-tab.component.css']
})
export class FacturesTabComponent implements OnInit {
  facturesTab:any=[];
  id:any;
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private factureService:FactureService,private activateRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.factureService.getAllFacturesById(this.id).subscribe(
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
