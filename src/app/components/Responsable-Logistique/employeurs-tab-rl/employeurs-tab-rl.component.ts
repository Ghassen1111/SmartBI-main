import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponsableLogistiqueService } from 'src/app/services/responsable-logistique.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employeurs-tab-rl',
  templateUrl: './employeurs-tab-rl.component.html',
  styleUrls: ['./employeurs-tab-rl.component.css']
})
export class EmployeursTabRlComponent implements OnInit {
  employeursTabRl:any=[];
  id:any;
  items: any = [];
  pageOfItems: Array<any>;
  constructor(private rlService:ResponsableLogistiqueService,private userservice:UserService,private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.rlService.getAllEmployeursById(this.id).subscribe(
      (Response) => {
        this.employeursTabRl = Response.employeurs
      }
    )
  }
  Delet(id:any){
    this.userservice.deleteUserByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.rlService.getAllEmployeursById(this.id).subscribe(
          (Response) => {
            this.employeursTabRl = Response.employeurs
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
