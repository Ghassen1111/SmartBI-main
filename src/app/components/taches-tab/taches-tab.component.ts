import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-taches-tab',
  templateUrl: './taches-tab.component.html',
  styleUrls: ['./taches-tab.component.css']
})
export class TachesTabComponent implements OnInit {
  id: any;
  tachesTab: any = [];
  items:any=[];
  pageOfItems: Array<any>;
  constructor( private activateRoute: ActivatedRoute, private tacheService: TacheService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.tacheService.getAllTachesById(this.id).subscribe(
      (Response) => {
        this.tachesTab = Response.taches;
        console.log("tachesTab", this.tachesTab)

      }
    )
  }
  editStatusTache(id: any,status:string) {
    let tache = {};
    for (let i = 0; i < this.tachesTab.length; i++) {
      if (this.tachesTab[i]._id == id) {
          this.tachesTab[i].status = status;
          tache = this.tachesTab[i];
          console.log(tache);
      }
    }
    this.tacheService.editStatusTache(tache).subscribe(
      (Response) => {
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.tacheService.getAllTachesById(this.id).subscribe(
          (Response) => {
            this.tachesTab = Response.taches;
            console.log("tachesTab", this.tachesTab)
          }
        )
      }
    )
  }
  onChangePage(x: Array<any>) {
    // update current page of items
    this.pageOfItems = x;
  
    }

}
