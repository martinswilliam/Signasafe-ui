import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthService } from '../services/auth.service';

// Vamos criar "dublês" (mocks) para os serviços que o AuthGuard depende.
// Isso nos permite testar o Guard de forma isolada.
class MockAuthService {
  // Podemos controlar o retorno deste método em cada teste
  isLoggedIn(): boolean {
    return true;
  }
}

class MockRouter {
  // Criamos um método 'navigate' falso para podermos verificar se ele foi chamado
  navigate(path: string[]) {}
}

// A descrição do nosso conjunto de testes para o AuthGuard
describe('AuthGuard', () => {
  let guard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  // O beforeEach é executado antes de cada teste ('it')
  beforeEach(() => {
    TestBed.configureTestingModule({
      // Nós fornecemos o AuthGuard real e os nossos dublês para as dependências dele.
      providers: [
        AuthGuard,
        { provide: AuthService, useClass: MockAuthService },
        { provide: Router, useClass: MockRouter }
      ]
    });

    // Pegamos as instâncias do nosso ambiente de teste
    guard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('deve permitir a ativação da rota se o usuário estiver logado', () => {
    // Forçamos o nosso mock a retornar 'true'
    spyOn(authService, 'isLoggedIn').and.returnValue(true);

    // Executamos o guarda e esperamos que o resultado seja 'true'
    const canActivate = guard.canActivate({} as any, {} as any);
    expect(canActivate).toBe(true);
  });

  it('deve bloquear a rota e redirecionar para /login se o usuário não estiver logado', () => {
    // Forçamos o nosso mock a retornar 'false'
    spyOn(authService, 'isLoggedIn').and.returnValue(false);
    // Criamos um "espião" no método navigate do nosso mock de router
    const navigateSpy = spyOn(router, 'navigate');

    // Executamos o guarda e esperamos que o resultado seja 'false'
    const canActivate = guard.canActivate({} as any, {} as any);
    expect(canActivate).toBe(false);

    // Verificamos se o método de redirecionamento foi chamado com o caminho correto
    expect(navigateSpy).toHaveBeenCalledWith(['/login']);
  });
});