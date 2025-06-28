import { Component, OnInit } from '@angular/core'; // Adicione OnInit
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
// Implemente a interface OnInit
export class DashboardComponent implements OnInit {

  userEmail: string = ''; // Propriedade para guardar o email

  constructor(private authService: AuthService, private router: Router) {}

  // ngOnInit é um "gancho de ciclo de vida" que roda uma vez quando o componente é criado.
  ngOnInit(): void {
    const decodedToken = this.authService.getDecodedToken();
    if (decodedToken && decodedToken.sub) {
      // No nosso backend, definimos o 'subject' (sub) do token como o email do usuário.
      this.userEmail = decodedToken.sub;
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}