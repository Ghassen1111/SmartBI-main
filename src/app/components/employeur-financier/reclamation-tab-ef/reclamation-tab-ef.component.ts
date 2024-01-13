import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { ResponsableFinancierService } from 'src/app/services/responsable-financier.service';

@Component({
  selector: 'app-reclamation-tab-ef',
  templateUrl: './reclamation-tab-ef.component.html',
  styleUrls: ['./reclamation-tab-ef.component.css']
})
export class ReclamationTabEfComponent implements OnInit {
  T:any=[];
  reclamationsTab: any = [];
  id: any;
  category: any = localStorage.getItem('category')
  constructor(private rfService: ResponsableFinancierService, private reclamationService: ReclamationService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.rfService.getAllReclamationsById(this.id).subscribe(
      (Response) => {
        this.T = Response.reclamations
        for (let i = 0; i < this.T.length; i++) {
          if (this.T[i].product[0].category==this.category) {
            this.reclamationsTab.push(this.T[i])
          }
        }
        console.log("reclamationsTab", this.reclamationsTab);

      }
    )
  }
  displayFacture(id: any) {
    this.router.navigate([`displayFacture/${id}`]);
  }

}
