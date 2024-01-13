import { Component, OnInit } from '@angular/core';
import { ResponsableTechniqueService } from 'src/app/services/responsable-technique.service';

@Component({
  selector: 'app-icon-reclamation-rt',
  templateUrl: './icon-reclamation-rt.component.html',
  styleUrls: ['./icon-reclamation-rt.component.css']
})
export class IconReclamationRtComponent implements OnInit {

  constructor(private rtService:ResponsableTechniqueService) { }
  reclamationsTab: any = [];
  entrepriseId:any=localStorage.getItem("entrepriseId");
  allReclamation:any=0;
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.rtService.getAllReclamationsById(this.userId).subscribe(
        (Response) => {
          this.reclamationsTab = Response.reclamations
          console.log("reclamationsTab", this.reclamationsTab);
          for (let i = 0; i < this.reclamationsTab.length; i++) {
            this.allReclamation=this.allReclamation+1;
            
          }
        }
      )
    }
    else{
      this.rtService.getAllReclamationsById(this.entrepriseId).subscribe(
        (Response) => {
          this.reclamationsTab = Response.reclamations
          console.log("reclamationsTab", this.reclamationsTab);
          for (let i = 0; i < this.reclamationsTab.length; i++) {
            this.allReclamation=this.allReclamation+1;
            
          }
        }
      )
    }
  }

}
