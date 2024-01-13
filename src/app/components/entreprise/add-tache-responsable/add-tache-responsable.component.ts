import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EntrepriseService } from 'src/app/services/entreprise.service';
import { TacheService } from 'src/app/services/tache.service';
import readXlsxFile from 'read-excel-file'
@Component({
  selector: 'app-add-tache-responsable',
  templateUrl: './add-tache-responsable.component.html',
  styleUrls: ['./add-tache-responsable.component.css']
})
export class AddTacheResponsableComponent implements OnInit {
  fullDate: String;
  respensablesTab: any = [];
  id: any;
  tacheForm: FormGroup;
  msgError: string;
  tachesTab: any = [];
  items:any=[];
  pageOfItems: Array<any>;
  constructor(private entrepriseService: EntrepriseService, private activateRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private tacheService: TacheService) { }

  ngOnInit() {
    this.tacheForm = this.formBuilder.group({
      yourId: [''],
      tache: ['', [Validators.required]],

    })
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.entrepriseService.getAllResponsablesById(this.id).subscribe(
      (Response) => {
        this.respensablesTab = Response.respensables;
        console.log(this.respensablesTab)

      }
    )
    //tables
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
          this.router.navigate([`addTacheResponsable/${this.id}`]);
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
  excelRead(e:any){
  let fileReaded:any;
  fileReaded=e.target.files[0];
  let type =e.target.files[0].name.split('.').pop();
  const schema = {
    '_id': {
      // JSON object property name.
      prop: '_id',
      type: String,
      required: false
    },
    'yourId': {
      prop: 'yourId',
      type: String,
      required: false
    },
    'myId': {
      prop: 'myId',
      type: String,
      required: false
    },
    'tache': {
      prop: 'tache',
      type: String,
      required: false
    },
    'date': {
      prop: 'date',
      type: Date,
      required: false
    },
    'status': {
      prop: 'status',
      type: String,
      required: false
    },

  };
 readXlsxFile(e.target.files[0],{schema}).then((data)=>{
  console.log(data);
  if (data.rows) {
     for (let i of data.rows) {
      this.tacheService.addTache(i).subscribe(
        (Response) => {
          console.log("here response after add", Response.message);
          if (Response.message == "Email exsist") {
            this.msgError = Response.message
          }
        }
      )
    }
  }
  console.log('tabes',this.tachesTab);
  this.router.navigate([`addTacheResponsable/${this.id}`]);
  this.tacheService.getMyAddTachesById(this.id).subscribe(
   (Response) => {
     this.tachesTab = Response.taches;
     console.log("tachesTab", this.tachesTab)
 
   }
 )
 }) 
}
onChangePage(x: Array<any>) {
  // update current page of items
  this.pageOfItems = x;

  }
}