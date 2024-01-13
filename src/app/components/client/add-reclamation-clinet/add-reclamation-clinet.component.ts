import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClinetService } from 'src/app/services/clinet.service';
import { ReclamationService } from 'src/app/services/reclamation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-reclamation-clinet',
  templateUrl: './add-reclamation-clinet.component.html',
  styleUrls: ['./add-reclamation-clinet.component.css']
})
export class AddReclamationClinetComponent implements OnInit {
  entreprise:any={};
  reclamationForm: FormGroup;
  facturesTab:any=[];
  id:any;
  MessageErrorQty1:String;
  MessageErrorQty2:String;
  constructor( private userService:UserService,private clinetService:ClinetService,private reclamationService:ReclamationService,private activateRoute: ActivatedRoute,private router: Router,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.reclamationForm = this.formBuilder.group({
      factureId: [''],
      probleme:[''],
      qty: ['',[Validators.required]],
      text: ['',[Validators.required]],
    })
    //image entreprise
    let idEntreprise = localStorage.getItem('entrepriseId');
    this.userService.getProfile(idEntreprise).subscribe(
      (Response) => {
        this.entreprise = Response.user
        console.log("entreprise",this.entreprise);
      }
    )
    //select facture
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.clinetService.getAllFacturesById(this.id).subscribe(
      (Response) => {
        this.facturesTab = Response.factures
        console.log("facturesTab",this.facturesTab);
        
      }
    )
  }
  addReclamation(){
    if (this.reclamationForm.value.qty <= 0) {
      this.MessageErrorQty1="Quantity < 0"
    }
    else if (!this.MessageErrorQty1 && !this.MessageErrorQty2) {
      for (let i = 0; i < this.facturesTab.length; i++) {
        if (this.facturesTab[i]._id == this.reclamationForm.value.factureId) {
          if (this.reclamationForm.value.qty>this.facturesTab[i].qty) {
            this.MessageErrorQty2="Quantity > Quantity de facture"
          }
          else{
            this.reclamationForm.value.productId=this.facturesTab[i].product[0]._id
            this.reclamationForm.value.clientId=localStorage.getItem('userId')  
            this.reclamationForm.value.entrepriseId=localStorage.getItem('entrepriseId')  
            this.reclamationForm.value.status="no"  
            console.log("here user object", this.reclamationForm.value);
            this.reclamationService.addReclamation(this.reclamationForm.value).subscribe(
              (Response) => {
                  let id = localStorage.getItem("userId")
                  this.router.navigate([`reclamationTabClient/${id}`]);
              }
            )
          }
          }
        } 
      }
  }
}
