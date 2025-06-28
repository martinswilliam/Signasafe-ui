import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: () => {
          console.log('Registro bem-sucedido!');
          // Após o sucesso do registro, redireciona o usuário para a página de login
          // para que ele possa entrar com a nova conta.
          this.router.navigate(['/login']);
        },
        error: (err) => {
          console.error('Erro no registro!', err);
          // TODO: Mostrar uma mensagem de erro visual para o usuário
        }
      });
    }
  }
}