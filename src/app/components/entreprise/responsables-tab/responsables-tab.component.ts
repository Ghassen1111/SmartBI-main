import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-responsables-tab',
  templateUrl: './responsables-tab.component.html',
  styleUrls: ['./responsables-tab.component.css']
})
export class ResponsablesTabComponent implements OnInit {
  respensablesTab:any=[];
  id:any;
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private entrepriseService:EntrepriseService,private userservice:UserService,private activateRoute: ActivatedRoute,private adminService: AdminService,private router:Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.entrepriseService.getAllResponsablesById(this.id).subscribe(
      (Response) => {
        this.respensablesTab = Response.respensables;
        console.log(this.respensablesTab)
        
      }
    )
  }
  nav(){
    this.router.navigate(['addResponsable']);
  }
  Delet(id:any){
    this.userservice.deleteUserByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.entrepriseService.getAllResponsablesById(this.id).subscribe(
          (Response) => {
            this.respensablesTab = Response.respensables;
            console.log(this.respensablesTab)
            
          }
        )
      }
    )
  }

editUser(id:any){
  this.router.navigate([`editResponsable/${id}`]);
}
editStatusUser(id: any,status:string) {
  let employeur = {};
  for (let i = 0; i < this.respensablesTab.length; i++) {
    if (this.respensablesTab[i]._id == id) {
        this.respensablesTab[i].status = status;
        employeur = this.respensablesTab[i];
        console.log(employeur);
    }
  }
  this.userservice.editStatusUser(employeur).subscribe(
    (Response) => {
      this.id = this.activateRoute.snapshot.paramMap.get('id');
      this.entrepriseService.getAllResponsablesById(this.id).subscribe(
        (Response) => {
          this.respensablesTab = Response.respensables;
          console.log(this.respensablesTab)
          
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
