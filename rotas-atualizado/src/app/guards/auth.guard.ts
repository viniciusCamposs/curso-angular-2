import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, CanLoad } from '@angular/router';

import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';
import { Route } from '@angular/compiler/src/core';

@Injectable({ 
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean{

    console.log('AuthGuard');

    return this.verificarAcesso();
   
  }

  private verificarAcesso(){
    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login'])

    return false;
  }

  	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
      console.log('canLoad: Verificando se o usuário pode carregar o cod do módulo');

      return this.verificarAcesso();
    }

}

