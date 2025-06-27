import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Importa nosso serviço
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  // Injeta o AuthService no construtor
  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Em vez de console.log, agora chamamos o serviço
      this.authService.login(this.loginForm.value).subscribe({
        // 'subscribe' é como dizemos: "execute a chamada e me avise quando a resposta chegar"
        next: (response) => {
          // Código a ser executado em caso de sucesso
          console.log('Login bem-sucedido!', response);
          // TODO: Salvar o token e redirecionar o usuário
        },
        error: (err) => {
          // Código a ser executado em caso de erro
          console.error('Erro no login!', err);
          // TODO: Mostrar uma mensagem de erro para o usuário
        }
      });
    }
  }
}