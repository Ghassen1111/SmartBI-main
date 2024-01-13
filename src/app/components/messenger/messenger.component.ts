import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  id: any;
  userMessengerTab: any = [];
  usersTab: any = [];
  userId: any = localStorage.getItem('userId');
  entrepriseId:any=localStorage.getItem("entrepriseId")
  role: any = localStorage.getItem("role");
  constructor(private userService: UserService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.userService.getUserMessanger(this.id, this.userId).subscribe(
      (Response) => {
        this.userMessengerTab = Response.x
        console.log("ahmed", this.userMessengerTab);
        for (let i = 0; i < this.userMessengerTab.length; i++) {
          if (this.role == "Admin") {
            if(this.userMessengerTab[i].role != "Admin"){
              this.usersTab.push(this.userMessengerTab[i])
            }
          }
          else if (this.role == "entreprise") {
            if (((this.userMessengerTab[i].entrepriseId == this.userId) || (this.userMessengerTab[i].role == "Admin")) && (this.userMessengerTab[i].role != "fournisseur")) {
              this.usersTab.push(this.userMessengerTab[i])
            }
          }
          else if (this.role == "fournisseur") {
            if (this.userMessengerTab[i].role == "Admin") {
              this.usersTab.push(this.userMessengerTab[i])
            }
          }
          else{
            if((((this.userMessengerTab[i].entrepriseId == this.entrepriseId) || (this.userMessengerTab[i].role == "Admin") ||(this.userMessengerTab[i]._id==this.entrepriseId)) && ((this.userMessengerTab[i].role != "fournisseur")&&(this.userMessengerTab[i]._id!=this.userId)))){
              this.usersTab.push(this.userMessengerTab[i])
            }
          }
        }
      }
    )
  }
  idUserMessenger(id: any) {
    localStorage.setItem("idUserMessenger", id)
    location.reload();
  }
}
