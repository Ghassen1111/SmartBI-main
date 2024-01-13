import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsableCommercialService } from 'src/app/services/responsable-commercial.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-fournisseurs-tab-rc',
  templateUrl: './fournisseurs-tab-rc.component.html',
  styleUrls: ['./fournisseurs-tab-rc.component.css']
})
export class FournisseursTabRcComponent implements OnInit {

  fournisseursTabRc:any=[];
  id:any;
  constructor(private rcService:ResponsableCommercialService,private userservice:UserService,private activateRoute: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.rcService.getAllFournisseursById(this.id).subscribe(
      (Response) => {
        this.fournisseursTabRc = Response.fournisseurs
      }
    )
  }
  Delet(id:any){
    this.userservice.deleteUserByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.rcService.getAllFournisseursById(this.id).subscribe(
          (Response) => {
            this.fournisseursTabRc = Response.fournisseurs
          }
        )
      }
    )
  }

}
