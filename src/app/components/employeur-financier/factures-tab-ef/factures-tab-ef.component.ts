import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-factures-tab-ef',
  templateUrl: './factures-tab-ef.component.html',
  styleUrls: ['./factures-tab-ef.component.css']
})
export class FacturesTabEfComponent implements OnInit {
  T: any = [];
  facturesTab: any = [];
  id: any;
  category: any = localStorage.getItem('category');
  items: any = [];
  pageOfItems: Array<any>;
  constructor(private factureService: FactureService, private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.factureService.getAllFacturesById(this.id).subscribe(
      (Response) => {
        this.T = Response.factures
        for (let i = 0; i < this.T.length; i++) {
          if (this.T[i].product[0].category == this.category) {
            this.facturesTab.push(this.T[i])
          }
        }
        console.log("facturesTab", this.facturesTab);
      }
    )
  }
  displayFacture(id: any) {
    this.router.navigate([`displayFacture/${id}`]);
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;

  }
}
