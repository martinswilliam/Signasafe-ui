import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; // Importa o componente de login
import { RegisterComponent } from './pages/register/register.component'; // Importa o componente de registro

const routes: Routes = [
  // Adiciona as novas rotas aqui
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }