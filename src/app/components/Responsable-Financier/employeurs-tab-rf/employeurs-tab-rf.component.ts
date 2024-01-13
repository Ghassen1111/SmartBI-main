import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ResponsableFinancierService } from 'src/app/services/responsable-financier.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-employeurs-tab-rf',
  templateUrl: './employeurs-tab-rf.component.html',
  styleUrls: ['./employeurs-tab-rf.component.css']
})
export class EmployeursTabRfComponent implements OnInit {

  employeursTabRf:any=[];
  id:any;
  categoryTab:any=[];
  entrepriseId:any=localStorage.getItem("entrepriseId");
  items: any = [];
  pageOfItems: Array<any>;
  constructor(private rfService:ResponsableFinancierService,private activateRoute: ActivatedRoute,private categoryService:CategoryService,private userService:UserService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.rfService.getAllEmployeursById(this.id).subscribe(
      (Response) => {
        this.employeursTabRf = Response.employeurs
      }
    )
    ///select 
    this.categoryService.getCategory(this.entrepriseId).subscribe(
      (Response) => {
        this.categoryTab = Response.x;
        console.log("categoryTab",this.categoryTab)
        
      }
    )
  }
  Delet(id:any){
    this.userService.deleteUserByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.rfService.getAllEmployeursById(this.id).subscribe(
          (Response) => {
            this.employeursTabRf = Response.employeurs
          }
        )
      }
    )
  }
  addCategoryEmployeur(id,category){
    let employeur = {};
    for (let i = 0; i < this.employeursTabRf.length; i++) {
      if (this.employeursTabRf[i]._id == id) {
          this.employeursTabRf[i].category = category;
          employeur = this.employeursTabRf[i];
          console.log(employeur);
      }
    }
    this.userService.editCategoryUser(employeur).subscribe(
      (Response) => {
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.rfService.getAllEmployeursById(this.id).subscribe(
          (Response) => {
            this.employeursTabRf = Response.employeurs
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
