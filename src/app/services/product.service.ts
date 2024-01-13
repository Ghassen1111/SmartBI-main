import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productURL = 'http://localhost:3000/product';
  constructor(private http: HttpClient) { }
  addProduct(obj: any,img:File) {
    let formData = new FormData();
    formData.append("img",img);
    formData.append("name",obj.name);
    formData.append("qty",obj.qty);
    formData.append("prixReal",obj.prixReal);
    formData.append("prix",obj.prix);
    formData.append("category",obj.category);
    formData.append("description",obj.description);
    formData.append("employeurId",obj.employeurId);
    formData.append("entrepriseId",obj.entrepriseId);
    formData.append("status",obj.status);
    return this.http.post<{ message: any; }>(this.productURL, formData);
  }
  getStoreById(id:any){
    return this.http.get<{x:any}>(`${this.productURL}/store/${id}`);
   }
  displayProductById(id:any){
    return this.http.get<{product:any}>(`${this.productURL}/display/${id}`);
   }
   editQtyProduct(obj: any){ 
    return this.http.put<{message:any}>(`${this.productURL}/editQty/${obj.id}`,obj);
  
  }
   editStatusProduct(obj: any){ 
    return this.http.put<{message:any}>(`${this.productURL}/status/${obj.id}`,obj);
  
  }
   editProduct(obj: any){ 
    return this.http.put<{message:any}>(`${this.productURL}/product/${obj.id}`,obj);
  
  }
  deleteProductByTd(id: any) {
    return this.http.delete<{ message: any }>(`${this.productURL}/${id}`);
  }
}
