import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-icon-user-admin',
  templateUrl: './icon-user-admin.component.html',
  styleUrls: ['./icon-user-admin.component.css']
})
export class IconUserAdminComponent implements OnInit {
  users:any=[];
  allUsers:any=0
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(
      (Response) => {
        this.users = Response.users
        for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].role!="Admin") {
            this.allUsers=this.allUsers+1;
          }
        }
      }
    )
  }

}
