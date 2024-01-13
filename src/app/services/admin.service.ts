import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class  AdminService {
  adminURL: string = "http://localhost:3000/admin";
  constructor(private http: HttpClient) {  }

  getAllEntreprise(){
   return this.http.get<{entreprise:any}>(`${this.adminURL}/entreprise`);
  }
  getAllUsers(){
   return this.http.get<{users:any}>(`${this.adminURL}/users`);
  }
 }
