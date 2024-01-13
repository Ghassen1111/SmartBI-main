import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  UIsAuthenticated: any;
  userIsAuthenticated: any;
  private authListenerSubs: Subscription;
  role: string;
  title = 'SmartBI';
  constructor(private userService: UserService,private activateRouted: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.UIsAuthenticated = this.userService.getIsAuth();
    console.log('here auth', this.UIsAuthenticated);
    this.authListenerSubs = this.userService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.UIsAuthenticated = isAuthenticated;
    });
  }
  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
    this.role = localStorage.getItem("role")
  }
}
