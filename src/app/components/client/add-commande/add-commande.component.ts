import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.css']
})
export class AddCommandeComponent implements OnInit {
  id:any;
  product:any={};
  commandeForm: FormGroup;
  MessageError:String;
  msgError: string;
  constructor(private productService:ProductService,private commandeService:CommandeService,private activateRoute:ActivatedRoute,private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.productService.displayProductById(this.id).subscribe(
      (Response) => {
        this.product = Response.product
        console.log("product",this.product);
      }
      
    )
    this.commandeForm = this.formBuilder.group({
      qty: ['',[Validators.required]],
    })
  }
  addCommande(id:any){
    if (this.commandeForm.value.qty <= 0) {
      this.MessageError="Quantity < 0"
    }
    else{
      this.commandeForm.value.clientId=localStorage.getItem("userId");
      this.commandeForm.value.entrepriseId=localStorage.getItem("entrepriseId");
      this.commandeForm.value.employeurId=localStorage.getItem('employeurId')
      this.commandeForm.value.productId=id
      this.commandeForm.value.status="no"
      console.log("here user object", this.commandeForm.value);
      this.commandeService.addCommande(this.commandeForm.value).subscribe(
        (Response) => {
          console.log("here response after add", Response.message);
          if (Response.message == "Email exsist") {
            this.msgError = Response.message
          }
          else {
            let id = localStorage.getItem("userId")
            this.router.navigate([`commandeTabClinet/${id}`]);
          }
  
        }
      )
    }

  }

}
