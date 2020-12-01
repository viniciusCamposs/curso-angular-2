import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlunoFormComponent } from './../alunos/aluno-form/aluno-form.component';


@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
  
  canDeactivate(
    component: AlunoFormComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {

        console.log('Guarda de desativação!');

        return component.podeMudarRota();
  }
}
