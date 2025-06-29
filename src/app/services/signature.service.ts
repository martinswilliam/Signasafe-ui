import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SignatureService {

  private apiUrl = environment.apiUrl + '/signatures';

  constructor(private http: HttpClient, private authService: AuthService) { }

  signDocument(documentId: string): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // O corpo da requisição envia o ID do documento a ser assinado
    const body = { documentId: documentId };

    return this.http.post(`${this.apiUrl}/sign`, body, { headers: headers });
  }
}