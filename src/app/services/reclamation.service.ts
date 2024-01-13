import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  reclamationURL = 'http://localhost:3000/reclamation';
  constructor(private http:HttpClient) { }

  addReclamation(obj: any) {
    return this.http.post<{ message: any; }>(this.reclamationURL, obj);
  }
  editStatusReclamation(obj: any){ 
    return this.http.put<{message:any}>(`${this.reclamationURL}/status/${obj.id}`,obj);
  
  }
  deleteReclamationByTd(id: any) {
    return this.http.delete<{ message: any }>(`${this.reclamationURL}/${id}`);
  }
}
