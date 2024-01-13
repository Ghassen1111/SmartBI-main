import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-tab',
  templateUrl: './user-tab.component.html',
  styleUrls: ['./user-tab.component.css']
})
export class UserTabComponent implements OnInit {
  users:any=[];
  entreprise:any=[];
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private adminService: AdminService,private userservice:UserService) { }

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(
      (Response) => {
        this.users = Response.users
      }
    )
    ////select entreprise
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
        this.adminService.getAllUsers().subscribe(
          (Response) => {
            this.users = Response.users
          }
        )
      }
    )
  }
  editStatusUser(id: any,status:string) {
    let user = {};
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i]._id == id) {
          this.users[i].status = status;
          user = this.users[i];
          console.log(user);
      }
    }
    this.userservice.editStatusUser(user).subscribe(
      (Response) => {
        this.adminService.getAllUsers().subscribe(
          (Response) => {
            this.users = Response.users
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
