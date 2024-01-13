import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-icon-salaire-rf',
  templateUrl: './icon-salaire-rf.component.html',
  styleUrls: ['./icon-salaire-rf.component.css']
})
export class IconSalaireRfComponent implements OnInit {

  constructor(private adminService: AdminService) { }
  users:any=[];
  allSalaire:any=0
  entrepriseId:any=localStorage.getItem("entrepriseId")
  userId:any=localStorage.getItem('userId')
  role:any=localStorage.getItem('role')
  ngOnInit() {
    if (this.role=="entreprise") {
      this.adminService.getAllUsers().subscribe(
        (Response) => {
          this.users = Response.users
          for (let i = 0; i < this.users.length; i++) {
            if((this.users[i].entrepriseId==this.userId && this.users[i].post=="employeur")||(this.users[i].entrepriseId==this.userId && this.users[i].post=="responsable")) {
              this.allSalaire=this.allSalaire+this.users[i].salaire;
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
            if((this.users[i].entrepriseId==this.entrepriseId && this.users[i].post=="employeur")||(this.users[i].entrepriseId==this.entrepriseId && this.users[i].post=="responsable")) {
              this.allSalaire=this.allSalaire+this.users[i].salaire;
            }
          }
        }
      )
    }
  }
  }

