import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-fournisseurs-tab',
  templateUrl: './fournisseurs-tab.component.html',
  styleUrls: ['./fournisseurs-tab.component.css']
})
export class FournisseursTabComponent implements OnInit {
  fournisseursTab:any=[];
  id:any;
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private entrepriseService:EntrepriseService,private userservice:UserService,private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.entrepriseService.getAllFournisseursById(this.id).subscribe(
      (Response) => {
        this.fournisseursTab = Response.fournisseurs
      }
    )
  }
  Delet(id:any){
    this.userservice.deleteUserByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.entrepriseService.getAllFournisseursById(this.id).subscribe(
          (Response) => {
            this.fournisseursTab = Response.fournisseurs
          }
        )
      }
    )
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;
  
    }
}
