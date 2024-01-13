import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-employeur',
  templateUrl: './edit-employeur.component.html',
  styleUrls: ['./edit-employeur.component.css']
})
export class EditEmployeurComponent implements OnInit {
  id:any;
  user:any={};
  signupForm: FormGroup;
  constructor( private userService:UserService,private activateRoute:ActivatedRoute,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      img: [''],
      name: ['',[Validators.required, Validators.minLength(3)]],
      firstName: ['',[Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required, Validators.minLength(3)]],
      address: ['',[Validators.required, Validators.minLength(3)]],
      tel: ['',[Validators.required]],
      sexe: [''],
      email: ['',[Validators.email, Validators.required, Validators.pattern("[a-z0-9._%+-]+@[SmartBI]+\.[com]{3,4}$")]],
      pwd:['',[Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      contrats:[''],
      salaire:['',[Validators.required]],
      role:[''],
      country: ['']
    })
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.userService.getProfile(this.id).subscribe(
      (Response) => {
        this.user = Response.user
        console.log("profile",this.user);
      }
      
    )
  }
  editUser() {
    this.userService.editUser(this.user).subscribe(
      (Response) => {   
      })
      let entrepriseId=localStorage.getItem('entrepriseId')
      this.router.navigate([`employeurTab/${entrepriseId}`]);
  }

}
