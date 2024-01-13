import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  factureURL = 'http://localhost:3000/facture';
  constructor(private http: HttpClient) { }

  addFacture(facture:any) {
    return this.http.post<{ message: string }>(this.factureURL, facture)  
  }
  getAllFacturesById(id:any){
    return this.http.get<{factures:any}>(`${this.factureURL}/factures/${id}`);
   }
   displayFactureById(id:any){
    return this.http.get<{facture:any}>(`${this.factureURL}/display/${id}`);
   }
}
