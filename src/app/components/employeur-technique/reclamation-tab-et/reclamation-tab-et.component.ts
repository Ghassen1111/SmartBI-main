import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeurTechniqueService } from 'src/app/services/employeur-technique.service';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation-tab-et',
  templateUrl: './reclamation-tab-et.component.html',
  styleUrls: ['./reclamation-tab-et.component.css']
})
export class ReclamationTabEtComponent implements OnInit {
  reclamationsTab:any=[];
  id:any;
  category: any = localStorage.getItem('category')
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private etService:EmployeurTechniqueService,private reclamationService:ReclamationService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.etService.getAllReclamationsByIdByCategory(this.id,this.category).subscribe(
      (Response) => {
        this.reclamationsTab = Response.reclamations
        console.log("reclamationsTab", this.reclamationsTab);
      }
    )
    
  }
  editStatusReclamation(id: any,status:string) {
    let reclamation = {};
    for (let i = 0; i < this.reclamationsTab.length; i++) {
      if (this.reclamationsTab[i]._id == id) {
          this.reclamationsTab[i].status = status;
          reclamation = this.reclamationsTab[i];
          console.log(reclamation);
      }
    }
    this.reclamationService.editStatusReclamation(reclamation).subscribe(
      (Response) => {
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.etService.getAllReclamationsByIdByCategory(this.id,this.category).subscribe(
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
