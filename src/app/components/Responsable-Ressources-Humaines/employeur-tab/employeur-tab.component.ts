import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsableRessourcesHumainesService } from 'src/app/services/responsable-ressources-humaines.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employeur-tab',
  templateUrl: './employeur-tab.component.html',
  styleUrls: ['./employeur-tab.component.css']
})
export class EmployeurTabComponent implements OnInit {
  employeursTab:any=[];
  id:any;
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private rrhService:ResponsableRessourcesHumainesService,private userservice:UserService,private activateRoute: ActivatedRoute,private router:Router,private userService:UserService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.rrhService.getAllEmployeursById(this.id).subscribe(
      (Response) => {
        this.employeursTab = Response.employeurs
      }
    )
  }
  nav(){
    this.router.navigate(['addEmployeur']);
  }
  Delet(id:any){
    this.userservice.deleteUserByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.rrhService.getAllEmployeursById(this.id).subscribe(
          (Response) => {
            this.employeursTab = Response.employeurs
          }
        )
      }
    )
  }
  editUser(id:any){
    this.router.navigate([`editEmployeur/${id}`]);
  }
  editStatusUser(id: any,status:string) {
    let employeur = {};
    for (let i = 0; i < this.employeursTab.length; i++) {
      if (this.employeursTab[i]._id == id) {
          this.employeursTab[i].status = status;
          employeur = this.employeursTab[i];
          console.log(employeur);
      }
    }
    this.userService.editStatusUser(employeur).subscribe(
      (Response) => {
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.rrhService.getAllEmployeursById(this.id).subscribe(
          (Response) => {
            this.employeursTab = Response.employeurs
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
