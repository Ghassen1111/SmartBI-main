import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsableCommercialService {

  rcURL: string = "http://localhost:3000/rc";
  constructor(private http:HttpClient) { }

  getAllEmployeursById(id:any){
    return this.http.get<{employeurs:any}>(`${this.rcURL}/employeurs/${id}`);
   }
   getAllFournisseursById(id:any){
    return this.http.get<{fournisseurs:any}>(`${this.rcURL}/fournisseurs/${id}`);
   }
   getAllCommandesById(id:any){
    return this.http.get<{commandes:any}>(`${this.rcURL}/commandes/${id}`);
   }
  }