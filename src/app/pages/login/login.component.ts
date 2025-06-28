import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Importa nosso serviço
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router'; // Importe o Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  // Injeta o AuthService no construtor
  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Login bem-sucedido!', response);

          // 1. Salva o token usando nosso serviço
          this.authService.saveToken(response.token);

          // 2. Redireciona o usuário para a página de dashboard
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Erro no login!', err);
          // TODO: Mostrar uma mensagem de erro visual para o usuário
        }
      });
    }
  }
}