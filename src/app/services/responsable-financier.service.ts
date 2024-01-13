import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsableFinancierService {

  rfURL: string = "http://localhost:3000/rf";
  constructor(private http:HttpClient) { }

  getAllEmployeursById(id:any){
    return this.http.get<{employeurs:any}>(`${this.rfURL}/employeurs/${id}`);
   }
   getAllReclamationsById(id:any){
    return this.http.get<{reclamations:any}>(`${this.rfURL}/reclamations/${id}`);
   }
}
