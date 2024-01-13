import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponsableFinancierService } from 'src/app/services/responsable-financier.service';
import { TacheService } from 'src/app/services/tache.service';

@Component({
  selector: 'app-add-tache-employeur-rf',
  templateUrl: './add-tache-employeur-rf.component.html',
  styleUrls: ['./add-tache-employeur-rf.component.css']
})
export class AddTacheEmployeurRfComponent implements OnInit {
  fullDate: String;
  employeursTab: any = [];
  id: any;
  tacheForm: FormGroup;
  msgError: string;
  tachesTab: any = [];
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private rfService:ResponsableFinancierService, private activateRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private tacheService: TacheService) { }

  ngOnInit() {
    this.tacheForm = this.formBuilder.group({
      yourId: [''],
      tache: ['', [Validators.required]],

    })
    let entrepriseId = localStorage.getItem("entrepriseId");
    this.rfService.getAllEmployeursById(entrepriseId).subscribe(
      (Response) => {
        this.employeursTab = Response.employeurs
      }
    )
    //tables
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.tacheService.getMyAddTachesById(this.id).subscribe(
      (Response) => {
        this.tachesTab = Response.taches;
        console.log("tachesTab", this.tachesTab)

      }
    )
  }
  addTache() {
    this.tacheForm.value.myId = this.id
    this.tacheForm.value.status = 'no'
    //date 
    var d = new Date();
    var date = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
    this.fullDate = date;
    console.log(this.fullDate);
    this.tacheForm.value.date = this.fullDate;
    console.log("here user object", this.tacheForm.value);
    this.tacheService.addTache(this.tacheForm.value).subscribe(
      (Response) => {
        console.log("here response after add", Response.message);
        if (Response.message == "Email exsist") {
          this.msgError = Response.message
        }
        else {
          this.router.navigate([`addTacheEmployeurRf/${this.id}`]);
        }
        this.tacheService.getMyAddTachesById(this.id).subscribe(
          (Response) => {
            this.tachesTab = Response.taches;
            console.log("tachesTab", this.tachesTab)

          }
        )
      }
    )
  }
  Delet(id:any){
    this.tacheService.deleteTacheByTd(id).subscribe(
      (Response)=>{
        console.log("here ",Response.message);
        this.id = this.activateRoute.snapshot.paramMap.get('id');
        this.tacheService.getMyAddTachesById(this.id).subscribe(
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
