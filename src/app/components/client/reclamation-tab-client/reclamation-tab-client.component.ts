import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinetService } from 'src/app/services/clinet.service';
import { ReclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-reclamation-tab-client',
  templateUrl: './reclamation-tab-client.component.html',
  styleUrls: ['./reclamation-tab-client.component.css']
})
export class ReclamationTabClientComponent implements OnInit {
  reclamationsTab:any=[];
  id:any;
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private clinetService:ClinetService,private reclamationService:ReclamationService,private activateRoute: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.clinetService.getAllReclamationsById(this.id).subscribe(
      (Response) => {
        this.reclamationsTab = Response.reclamations
        console.log("reclamationsTab",this.reclamationsTab);
        
      }
    )
  }
  Delet(id:any){
    this.reclamationService.deleteReclamationByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.clinetService.getAllReclamationsById(this.id).subscribe(
          (Response) => {
            this.reclamationsTab = Response.reclamations
            console.log("reclamationsTab",this.reclamationsTab);
            
          }
        )
      }
    )
  }
  nav(){
    let id = localStorage.getItem("userId")
    this.router.navigate([`addReclamationClient/${id}`]);
  }
  displayFacture(id:any){
    this.router.navigate([`displayFacture/${id}`]);
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;
  
    }

}
