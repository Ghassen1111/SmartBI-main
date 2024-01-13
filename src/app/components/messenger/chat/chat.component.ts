import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageTab: any = [];
  reponseTab: any = [];
  T: any = [];
  messengerForm: FormGroup;
  identitéForm: FormGroup;
  userId = localStorage.getItem('userId');
  idUsserMessenger = localStorage.getItem("idUserMessenger");
  fullDate: String;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.messengerForm = this.formBuilder.group({
      message: [''],
    })
    this.identitéForm = this.formBuilder.group({
      myId: [""],
      yourId: [""],
    })
    this.identitéForm.value.yourId = localStorage.getItem("idUserMessenger")
    this.identitéForm.value.myId = localStorage.getItem("userId")
    this.userService.getMessage(this.identitéForm.value).subscribe(
      (Response) => {
        this.messageTab = Response.x
        console.log("here response after message", Response.x);
        for (let i = 0; i < this.messageTab.length; i++) {
          if ((this.messageTab[i].myId == this.userId && this.messageTab[i].yourId == this.idUsserMessenger) || (this.messageTab[i].myId == this.idUsserMessenger && this.messageTab[i].yourId == this.userId)) {
            this.T.push(this.messageTab[i]);
          }
        }
        console.log("Tab", this.T);
      }
    )
  }
  messenger() {
    this.messengerForm.value.yourId = localStorage.getItem("idUserMessenger")
    this.messengerForm.value.myId = localStorage.getItem("userId")
    //date 
    var d = new Date();
    var date = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
    var hours = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    this.fullDate = date + ' ' + hours;
    console.log(this.fullDate);
    this.messengerForm.value.date = this.fullDate
    console.log("here user object", this.messengerForm.value);
    this.userService.addMessage(this.messengerForm.value).subscribe(
      (Response) => {
        console.log("here response after message", Response.message);
        this.identitéForm.value.yourId = localStorage.getItem("idUserMessenger")
        this.identitéForm.value.myId = localStorage.getItem("userId")
        this.userService.getMessage(this.identitéForm.value).subscribe(
          (Response) => {
            this.messageTab = Response.x
            this.T.splice(this.T);
            for (let i = 0; i < this.messageTab.length; i++) {
              if ((this.messageTab[i].myId == this.userId && this.messageTab[i].yourId == this.idUsserMessenger) || (this.messageTab[i].myId == this.idUsserMessenger && this.messageTab[i].yourId == this.userId)) {
                this.T.push(this.messageTab[i]);
              }
            }
            console.log("here response after message", Response.x);
          }
        )
      }
    )
  }
}
