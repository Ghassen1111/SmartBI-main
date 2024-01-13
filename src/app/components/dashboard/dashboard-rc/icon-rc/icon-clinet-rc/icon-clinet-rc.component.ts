import { Component, OnInit } from '@angular/core';
import { ResponsableCommercialService } from 'src/app/services/responsable-commercial.service';

@Component({
  selector: 'app-icon-clinet-rc',
  templateUrl: './icon-clinet-rc.component.html',
  styleUrls: ['./icon-clinet-rc.component.css']
})
export class IconClinetRcComponent implements OnInit {
  fournisseursTabRc:any=[];
  allClient:any=0
  entrepriseId:any=localStorage.getItem('entrepriseId')  
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  constructor(private rcService:ResponsableCommercialService) { }

  ngOnInit() {
    if (this.role=="entreprise") {
      this.rcService.getAllFournisseursById(this.userId).subscribe(
        (Response) => {
          this.fournisseursTabRc = Response.fournisseurs
          for (let i = 0; i < this.fournisseursTabRc.length; i++) {
            if (this.fournisseursTabRc[i].role=="fournisseur") {
              this.allClient=this.allClient+1;
            }
          }
        }
      )
    }
    else{
      this.rcService.getAllFournisseursById(this.entrepriseId).subscribe(
        (Response) => {
          this.fournisseursTabRc = Response.fournisseurs
          for (let i = 0; i < this.fournisseursTabRc.length; i++) {
            if (this.fournisseursTabRc[i].role=="fournisseur") {
              this.allClient=this.allClient+1;
            }
          }
        }
      )
    }
  }

}
