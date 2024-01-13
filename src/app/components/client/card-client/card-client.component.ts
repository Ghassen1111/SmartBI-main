import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-client',
  templateUrl: './card-client.component.html',
  styleUrls: ['./card-client.component.css']
})
export class CardClientComponent implements OnInit {
  @Input() x:any;
  constructor( private router: Router) { }

  ngOnInit() {
  }
  addCommande(id:any) {
    // alert(id);
    this.router.navigate([`addCommande/${id}`]);
  }
  

}
