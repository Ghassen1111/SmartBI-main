import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryURL = 'http://localhost:3000/category';
  constructor(private http: HttpClient) { }

  addCategory(obj: any) {
    return this.http.post<{ message: any; }>(this.categoryURL, obj);
  }
  getCategory(entrepriseId: any) {
    return this.http.get<{ x: any }>(`${this.categoryURL}/${entrepriseId}`);
  }
  deleteCategoryByTd(id: any) {
    return this.http.delete<{ message: any }>(`${this.categoryURL}/${id}`);
  }
}
