import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id:any;
  user:any={};
    constructor( private userService:UserService,private activateRoute:ActivatedRoute) { }
  
    ngOnInit() {
      this.id = this.activateRoute.snapshot.paramMap.get('id');
      this.userService.getProfile(this.id).subscribe(
        (Response) => {
          this.user = Response.user
          console.log("profile",this.user);
        }
        
      )
   
    
    }

}
