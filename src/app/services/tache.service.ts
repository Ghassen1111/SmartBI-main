import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TacheService {
  tacheURL: string = "http://localhost:3000/tache";
  constructor(private http:HttpClient) { }

  addTache(obj: any) {
    return this.http.post<{ message: any; }>(this.tacheURL, obj);
  }
  //get add
  getMyAddTachesById(myId: any) {
    return this.http.get<{ taches: any }>(`${this.tacheURL}/getMyAddTache/${myId}`);
  }
  //get tache
  getAllTachesById(id: any) {
    return this.http.get<{ taches: any }>(`${this.tacheURL}/taches/${id}`);
  }
  editStatusTache(obj: any){ 
    return this.http.put<{message:any}>(`${this.tacheURL}/status/${obj.id}`,obj);
  
  }
  deleteTacheByTd(id: any) {
    return this.http.delete<{ message: any }>(`${this.tacheURL}/${id}`);
  }
}
