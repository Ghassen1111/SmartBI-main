import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-display-facture',
  templateUrl: './display-facture.component.html',
  styleUrls: ['./display-facture.component.css']
})
export class DisplayFactureComponent implements OnInit {
  id:any;
  facture:any={};
  constructor(private factureService:FactureService,private activateRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.factureService.displayFactureById(this.id).subscribe(
      (Response) => {
        this.facture = Response.facture
        console.log("facture",this.facture);
      }
      
    )
  }

}
