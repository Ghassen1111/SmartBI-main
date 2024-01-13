import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsableLogistiqueService {

  rlURL: string = "http://localhost:3000/rl";
  constructor(private http:HttpClient) { }

  getAllEmployeursById(id:any){
    return this.http.get<{employeurs:any}>(`${this.rlURL}/employeurs/${id}`);
   }
   getAllProductsById(id:any){
    return this.http.get<{products:any}>(`${this.rlURL}/products/${id}`);
   }
}

