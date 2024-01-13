import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponsableCommercialService } from 'src/app/services/responsable-commercial.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employeurs-tab-rc',
  templateUrl: './employeurs-tab-rc.component.html',
  styleUrls: ['./employeurs-tab-rc.component.css']
})
export class EmployeursTabRcComponent implements OnInit {

  employeursTabRc:any=[];
  id:any;
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private rcService:ResponsableCommercialService,private userservice:UserService,private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.rcService.getAllEmployeursById(this.id).subscribe(
      (Response) => {
        this.employeursTabRc = Response.employeurs
      }
    )
  }
  Delet(id:any){
    this.userservice.deleteUserByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.rcService.getAllEmployeursById(this.id).subscribe(
          (Response) => {
            this.employeursTabRc = Response.employeurs
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
