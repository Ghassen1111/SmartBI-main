import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-entreprise',
  templateUrl: './dashboard-entreprise.component.html',
  styleUrls: ['./dashboard-entreprise.component.css']
})
export class DashboardEntrepriseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  dashboardRh() {
    this.router.navigate(['dashboardRh']);
  }
  dashboardRc() {
    this.router.navigate(['dashboardRc']);
  }
  dashboardRf() {
    this.router.navigate(['dashboardRf']);
  }
  dashboardRl() {
    this.router.navigate(['dashboardRl']);
  }
  dashboardRt() {
    this.router.navigate(['dashboardRt']);
  }
}
