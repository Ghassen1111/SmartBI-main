import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-icon-user-rh',
  templateUrl: './icon-user-rh.component.html',
  styleUrls: ['./icon-user-rh.component.css']
})
export class IconUserRhComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  users:any=[];
  allUsers:any=0
  entrepriseId:any=localStorage.getItem("entrepriseId")
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.adminService.getAllUsers().subscribe(
        (Response) => {
          this.users = Response.users
          for (let i = 0; i < this.users.length; i++) {
            if(this.users[i].entrepriseId==this.userId && this.users[i].post=="employeur") {
              this.allUsers=this.allUsers+1;
            }
          }
        }
      ) 
    }
    else{
      this.adminService.getAllUsers().subscribe(
        (Response) => {
          this.users = Response.users
          for (let i = 0; i < this.users.length; i++) {
            if(this.users[i].entrepriseId==this.entrepriseId && this.users[i].post=="employeur") {
              this.allUsers=this.allUsers+1;
            }
          }
        }
      )
    }
  }
  }

