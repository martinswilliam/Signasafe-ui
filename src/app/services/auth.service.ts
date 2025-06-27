import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // A URL base da nossa API backend.
  // No futuro, isso deve vir de um arquivo de environment.
  private apiUrl = 'http://localhost:8080/auth';

  // Injetamos o HttpClient no construtor para que possamos usá-lo
  constructor(private http: HttpClient) { }

  // Método para registrar um usuário
  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Método para logar um usuário
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}