import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponsableTechniqueService } from 'src/app/services/responsable-technique.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employeurs-tab-rt',
  templateUrl: './employeurs-tab-rt.component.html',
  styleUrls: ['./employeurs-tab-rt.component.css']
})
export class EmployeursTabRtComponent implements OnInit {

  employeursTabRt:any=[];
  id:any;
  items: any = [];
  pageOfItems: Array<any>;
  constructor(private rtService:ResponsableTechniqueService,private userService:UserService,private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.rtService.getAllEmployeursById(this.id).subscribe(
      (Response) => {
        this.employeursTabRt = Response.employeurs
      }
    )
  }
  Delet(id:any){
    this.userService.deleteUserByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.rtService.getAllEmployeursById(this.id).subscribe(
          (Response) => {
            this.employeursTabRt = Response.employeurs
          }
        )
      }
    )
  }
  addCategoryEmployeur(id,category){
    let employeur = {};
    for (let i = 0; i < this.employeursTabRt.length; i++) {
      if (this.employeursTabRt[i]._id == id) {
          this.employeursTabRt[i].category = category;
          employeur = this.employeursTabRt[i];
          console.log(employeur);
      }
    }
    this.userService.editCategoryUser(employeur).subscribe(
      (Response) => {
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.rtService.getAllEmployeursById(this.id).subscribe(
          (Response) => {
            this.employeursTabRt = Response.employeurs
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
