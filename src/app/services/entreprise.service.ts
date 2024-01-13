
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  entrepriseURL: string = "http://localhost:3000/entreprise";
  constructor(private http:HttpClient) { }
  
  getAllResponsablesById(id:any){
    return this.http.get<{respensables:any}>(`${this.entrepriseURL}/respensables/${id}`);
   }
  getAllEmployeursById(id:any){
    return this.http.get<{employeurs:any}>(`${this.entrepriseURL}/employeurs/${id}`);
   }
   getAllFournisseursById(id:any){
    return this.http.get<{fournisseurs:any}>(`${this.entrepriseURL}/fournisseurs/${id}`);
   }
   getAllProductsById(id:any){
    return this.http.get<{products:any}>(`${this.entrepriseURL}/products/${id}`);
   }
}

