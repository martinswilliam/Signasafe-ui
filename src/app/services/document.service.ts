import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private apiUrl = environment.apiUrl + '/documents';

  constructor(private http: HttpClient, private authService: AuthService) { }

  upload(file: File): Observable<any> {
    // Para enviar arquivos, usamos o objeto FormData.
    const formData = new FormData();
    formData.append('file', file, file.name);

    // Precisamos enviar nosso token JWT para autorizar a requisição.
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Enviamos a requisição POST com o formData e os headers.
    return this.http.post(`${this.apiUrl}/upload`, formData, { headers: headers });
  }
  // ADICIONE ESTE MÉTODO COMPLETO
  getMyDocuments(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(`${this.apiUrl}/my-documents`, { headers: headers });
  }
}