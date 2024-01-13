import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeurCommercialService {

  ecURL: string = "http://localhost:3000/ec";
  constructor(private http:HttpClient) { }

  getAllFournisseursById(id:any){
    return this.http.get<{fournisseurs:any}>(`${this.ecURL}/fournisseurs/${id}`);
   }
  getAllCommandesById(id:any){
    return this.http.get<{commandes:any}>(`${this.ecURL}/commandes/${id}`);
   }
}
