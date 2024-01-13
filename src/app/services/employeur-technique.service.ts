import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeurTechniqueService {
  etURL: string = "http://localhost:3000/et";
  constructor(private http:HttpClient) { }
  getAllReclamationsByIdByCategory(id:any,category:any){
    return this.http.get<{reclamations:any}>(`${this.etURL}/reclamations/${id}/${category}`);
   }
}
