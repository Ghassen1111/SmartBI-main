import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  commandeURL = 'http://localhost:3000/commande';
  constructor(private http: HttpClient) { }
  
  addCommande(commande:any) {
    return this.http.post<{ message: string }>(this.commandeURL, commande)
  }
  editStatusCommande(obj: any){ 
    return this.http.put<{message:any}>(`${this.commandeURL}/status/${obj.id}`,obj);
  
  }
   deleteCommandeByTd(id: any) {
    return this.http.delete<{ message: any }>(`${this.commandeURL}/${id}`);
  }
  ///ll payment////
  getCommandeForPaymentById(id:any){
    return this.http.get<{commande:any}>(`${this.commandeURL}/commandeForPayment/${id}`);
   }
}
