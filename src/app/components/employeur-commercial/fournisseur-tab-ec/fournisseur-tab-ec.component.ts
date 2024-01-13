import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeurCommercialService } from 'src/app/services/employeur-commercial.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-fournisseur-tab-ec',
  templateUrl: './fournisseur-tab-ec.component.html',
  styleUrls: ['./fournisseur-tab-ec.component.css']
})
export class FournisseurTabEcComponent implements OnInit {

  fournisseursTabEc:any=[];
  id:any;
  items: any = [];
  pageOfItems: Array<any>;
  constructor(private ecService:EmployeurCommercialService,private userservice:UserService,private activateRoute: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.ecService.getAllFournisseursById(this.id).subscribe(
      (Response) => {
        this.fournisseursTabEc = Response.fournisseurs
      }
    )
  }
  nav(){
    this.router.navigate([`addFournisseur`]);
  }
  Delet(id:any){
    this.userservice.deleteUserByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.ecService.getAllFournisseursById(this.id).subscribe(
          (Response) => {
            this.fournisseursTabEc = Response.fournisseurs
          }
        )
      }
    )
  }
  editUser(id:any){
    this.router.navigate([`editClient/${id}`]);
  }
  editStatusUser(id: any,status:string) {
    let employeur = {};
    for (let i = 0; i < this.fournisseursTabEc.length; i++) {
      if (this.fournisseursTabEc[i]._id == id) {
          this.fournisseursTabEc[i].status = status;
          employeur = this.fournisseursTabEc[i];
          console.log(employeur);
      }
    }
    this.userservice.editStatusUser(employeur).subscribe(
      (Response) => {
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.ecService.getAllFournisseursById(this.id).subscribe(
          (Response) => {
            this.fournisseursTabEc = Response.fournisseurs
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
