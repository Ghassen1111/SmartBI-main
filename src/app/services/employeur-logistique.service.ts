import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeurLogistiqueService {
  elURL: string = "http://localhost:3000/el";
  constructor(private http: HttpClient) { }
  getAllProductsById(id:any){
    return this.http.get<{products:any}>(`${this.elURL}/products/${id}`);
   }
}
