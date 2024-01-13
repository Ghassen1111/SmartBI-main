import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commande.service';
import { FactureService } from 'src/app/services/facture.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-payment-commande',
  templateUrl: './payment-commande.component.html',
  styleUrls: ['./payment-commande.component.css']
})
export class PaymentCommandeComponent implements OnInit {
  fullDate: string;
  msgError: string;
  id: any;
  product: any = {};
  commande: any = {};
  factureForm: FormGroup;
  ///somme prix*qty
  somme: any;
  //TVA
  TVA: any;
  //prix+TVA
  totalPrix: any;
  constructor(private commandeService: CommandeService, private activateRoute: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private factureService: FactureService, private productService: ProductService) { }

  ngOnInit() {
    this.factureForm = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.maxLength(16), Validators.minLength(16)]],
      dateCard: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(5)]],
      cvvCode: ['', [Validators.required, Validators.maxLength(3), Validators.minLength(3)]],
      methodPayment: ['', [Validators.required]]
    })
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.commandeService.getCommandeForPaymentById(this.id).subscribe(
      (Response) => {
        this.commande = Response.commande
        console.log("commande", this.commande);
        this.somme = (this.commande[0].product[0].prix) * (this.commande[0].qty)
        this.TVA = (((this.commande[0].product[0].prix) * (this.commande[0].qty)) * 19) / 100
        this.totalPrix = this.somme + this.TVA
      }
    )
  }
  addFacture(commandeId: any, productId: any, clientId: any, employeurId: any, entrepriseId: any, qty: number) {
    this.factureForm.value.productId = productId;
    this.factureForm.value.clientId = clientId;
    this.factureForm.value.employeurId = employeurId;
    this.factureForm.value.entrepriseId = entrepriseId;
    this.factureForm.value.qty = qty;
    this.factureForm.value.TVA = this.TVA;
    this.factureForm.value.totalPrix = this.totalPrix;
    //date 
    var d = new Date();
    var date = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
    this.fullDate = date;
    console.log(this.fullDate);
    this.factureForm.value.date = this.fullDate;
    //
    this.factureService.addFacture(this.factureForm.value).subscribe(
      (Response) => {
        console.log("here response after add", Response.message);
        if (Response.message == "Email exsist") {
          this.msgError = Response.message
        }
        else {
          ///edit qty product
          this.productService.displayProductById(productId).subscribe(
            (Response) => {
              this.product = Response.product
              this.product.qty = (this.product.qty - qty)
              this.productService.editQtyProduct(this.product).subscribe(
                (Response) => {
                  console.log("here ", Response.message);
                }
              )
            }
          )
          //delet commande
          this.commandeService.deleteCommandeByTd(commandeId).subscribe(
            (Response) => {
              console.log("here ", Response.message);
            }
          )
          let id = localStorage.getItem("userId")
          this.router.navigate([`factureTabClient/${id}`]);
        }

      }
    )

  }

}
