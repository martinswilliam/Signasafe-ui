import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    // Se o usuário está logado, permita o acesso à rota
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      // Se não estiver logado, redirecione para a página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}