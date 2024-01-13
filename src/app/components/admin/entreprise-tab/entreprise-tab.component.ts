import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-entreprise-tab',
  templateUrl: './entreprise-tab.component.html',
  styleUrls: ['./entreprise-tab.component.css']
})
export class EntrepriseTabComponent implements OnInit {
  entreprise:any=[];
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private adminService: AdminService,private userservice:UserService) { }

  ngOnInit() {
    this.adminService.getAllEntreprise().subscribe(
      (Response) => {
        this.entreprise = Response.entreprise
      }
    )
  }
  Delet(id:any){
    this.userservice.deleteUserByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.adminService.getAllEntreprise().subscribe(
          (Response) => {
            this.entreprise = Response.entreprise;
          }
        )
      }
    )
  }
  editStatusUser(id: any,status:string) {
    let entreprise = {};
    for (let i = 0; i < this.entreprise.length; i++) {
      if (this.entreprise[i]._id == id) {
          this.entreprise[i].status = status;
          entreprise = this.entreprise[i];
          console.log(entreprise);
      }
    }
    this.userservice.editStatusUser(entreprise).subscribe(
      (Response) => {
        this.adminService.getAllEntreprise().subscribe(
          (Response) => {
            this.entreprise = Response.entreprise
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
