import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/auth';

  // <<< ESSA LINHA ESTÁ FALTANDO NO SEU ARQUIVO
  private tokenKey = 'signasafe_auth_token'; 

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  // Salva o token no localStorage
  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Recupera o token do localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Remove o token para fazer logout
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Verifica se o usuário está logado (se existe um token)
  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  // Método para logar um usuário
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }
}