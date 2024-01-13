import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { ResponsableFinancierService } from 'src/app/services/responsable-financier.service';
import { ResponsableTechniqueService } from 'src/app/services/responsable-technique.service';

@Component({
  selector: 'app-reclamation-tab-rf',
  templateUrl: './reclamation-tab-rf.component.html',
  styleUrls: ['./reclamation-tab-rf.component.css']
})
export class ReclamationTabRfComponent implements OnInit {
  reclamationsTab: any = [];
  id: any;
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private rfService:ResponsableFinancierService,private reclamationService:ReclamationService,private activateRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.rfService.getAllReclamationsById(this.id).subscribe(
      (Response) => {
        this.reclamationsTab = Response.reclamations
        console.log("reclamationsTab", this.reclamationsTab);

      }
    )
  }
  displayFacture(id: any) {
    this.router.navigate([`displayFacture/${id}`]);
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;
  
    }

}
