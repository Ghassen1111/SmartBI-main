import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: any = {};
  loginForm: FormGroup;
  errorMessage:String;
  constructor(private fb: FormBuilder,
  private userService: UserService) { }
  ngOnInit() {
  this.loginForm = this.fb.group({
  email: [''],
  pwd: ['']
  })
  }
  validateLogin() {
  this.userService.login(this.login.email, this.login.pwd);
  this.userService.err.subscribe((err) => {
    if(err){
      this.errorMessage="Vérifier vos informations de connexion."
    }
    console.log(err);
  });
  }
}
