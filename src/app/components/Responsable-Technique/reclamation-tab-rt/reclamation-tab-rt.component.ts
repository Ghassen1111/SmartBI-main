import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { ResponsableTechniqueService } from 'src/app/services/responsable-technique.service';

@Component({
  selector: 'app-reclamation-tab-rt',
  templateUrl: './reclamation-tab-rt.component.html',
  styleUrls: ['./reclamation-tab-rt.component.css']
})
export class ReclamationTabRtComponent implements OnInit {
  reclamationsTab: any = [];
  id: any;
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private rtService:ResponsableTechniqueService,private reclamationService:ReclamationService,private activateRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.rtService.getAllReclamationsById(this.id).subscribe(
      (Response) => {
        this.reclamationsTab = Response.reclamations
        console.log("reclamationsTab", this.reclamationsTab);

      }
    )
  }
  Delet(id: any) {
    this.reclamationService.deleteReclamationByTd(id).subscribe(
      (Response) => {
        console.log("here ", Response.message);
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.rtService.getAllReclamationsById(this.id).subscribe(
          (Response) => {
            this.reclamationsTab = Response.reclamations
            console.log("reclamationsTab", this.reclamationsTab);

          }
        )
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
