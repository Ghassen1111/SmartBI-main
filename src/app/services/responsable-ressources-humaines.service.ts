import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResponsableRessourcesHumainesService {
  rrhURL: string = "http://localhost:3000/rrh";
  constructor(private http:HttpClient) { }

  getAllEmployeursById(id:any){
    return this.http.get<{employeurs:any}>(`${this.rrhURL}/employeurs/${id}`);
   }
}
