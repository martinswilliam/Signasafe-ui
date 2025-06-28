import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component'; // Importa o componente de login
import { RegisterComponent } from './pages/register/register.component'; // Importa o componente de registro
import { DashboardComponent } from './pages/dashboard/dashboard.component'; // Importe o novo componente
import { AuthGuard } from './guards/auth.guard'; // Importe o guarda


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard] // <-- 2. ADICIONE ESTA PROPRIEDADE À ROTA
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }