import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/services/entreprise.service';

@Component({
  selector: 'app-icon-responsable',
  templateUrl: './icon-responsable.component.html',
  styleUrls: ['./icon-responsable.component.css']
})
export class IconResponsableComponent implements OnInit {
  respensablesTab:any=[];
  userId:any=localStorage.getItem('userId')
  allResponsables:any=0;
  constructor(private entrepriseService:EntrepriseService) { }

  ngOnInit() {
    this.entrepriseService.getAllResponsablesById(this.userId).subscribe(
      (Response) => {
        this.respensablesTab = Response.respensables;
        console.log(this.respensablesTab)
        for (let i = 0; i < this.respensablesTab.length; i++) {
          this.allResponsables=this.allResponsables+1;
        }
      }
    )
  }

}
