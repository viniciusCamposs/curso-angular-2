import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

import { AuthService } from '../login/auth.service';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    router: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean{

    console.log('AuthGuard');

    if(this.authService.usuarioEstaAutenticado()){
      return true;
    }

    this.router.navigate(['/login'])

    return false;
  }
}

