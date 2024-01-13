import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeurFinancierService {
 efURL = 'http://localhost:3000/Ef';
  constructor(private http: HttpClient) { }
}
