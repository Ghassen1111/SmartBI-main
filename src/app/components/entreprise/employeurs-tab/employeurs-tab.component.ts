import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employeurs-tab',
  templateUrl: './employeurs-tab.component.html',
  styleUrls: ['./employeurs-tab.component.css']
})
export class EmployeursTabComponent implements OnInit {
  employeursTab:any=[];
  id:any;
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private entrepriseService:EntrepriseService,private userservice:UserService,private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.entrepriseService.getAllEmployeursById(this.id).subscribe(
      (Response) => {
        this.employeursTab = Response.employeurs
      }
    )
  }
  Delet(id:any){
    this.userservice.deleteUserByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.entrepriseService.getAllEmployeursById(this.id).subscribe(
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
