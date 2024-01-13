import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})
export class AddFournisseurComponent implements OnInit {

  imagePreview:any='';
  signupForm: FormGroup;
  msgError: string;
  constructor(private formBuilder: FormBuilder,private userService: UserService,private router: Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      img: [''],
      firstName: ['',[Validators.required, Validators.minLength(3)]],
      lastName: ['',[Validators.required, Validators.minLength(3)]],
      address: ['',[Validators.required, Validators.minLength(3)]],
      tel: ['',[Validators.required]],
      sexe: [''],
      email: ['',[Validators.email, Validators.required, Validators.pattern("[a-z0-9._%+-]+@[SmartBI]+\.[com]{3,4}$")]],
      pwd:['',[Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      country:[''],
    })
  }
  signupFournisseur() {
    this.signupForm.value.entrepriseId=localStorage.getItem("entrepriseId");
    this.signupForm.value.employeurId=localStorage.getItem("userId");
    this.signupForm.value.nameEntreprise=localStorage.getItem("nEntrepris");
    this.signupForm.value.role="fournisseur";
    this.signupForm.value.status="yes"
    console.log("here user object", this.signupForm.value);
    this.userService.signup(this.signupForm.value, this.signupForm.value.img).subscribe(
      (Response) => {
        console.log("here response after signup", Response.message);
        if (Response.message == "Email exsist") {
          this.msgError = Response.message
        }
        else {
          let id = localStorage.getItem("userId")
          this.router.navigate([`fournisseurTabEc/${id}`]);
        }

      }
    )
  }
  onImageSelected(event: Event) { 
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    console.log(this.imagePreview);
    
  }


}
