import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsableTechniqueService {

  rtURL: string = "http://localhost:3000/rt";
  constructor(private http:HttpClient) { }

  getAllEmployeursById(id:any){
    return this.http.get<{employeurs:any}>(`${this.rtURL}/employeurs/${id}`);
   }
   getAllReclamationsById(id:any){
    return this.http.get<{reclamations:any}>(`${this.rtURL}/reclamations/${id}`);
   }
}
