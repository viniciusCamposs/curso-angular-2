import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { IFormCanDeactivate } from './iform-candeactivate';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {
  
  canDeactivate(
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {

        console.log('Guarda de desativação!');

        return component.podeDesativar ? component.podeDesativar() : true;
  }
}
