import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClinetService {
  clinetURL = 'http://localhost:3000/clinet';
  constructor(private http: HttpClient) { }

  getAllCommandesById(id:any){
    return this.http.get<{commandes:any}>(`${this.clinetURL}/commandes/${id}`);
   }
  getAllFacturesById(id:any){
    return this.http.get<{factures:any}>(`${this.clinetURL}/factures/${id}`);
   }
  getAllReclamationsById(id:any){
    return this.http.get<{reclamations:any}>(`${this.clinetURL}/reclamations/${id}`);
   }
}
