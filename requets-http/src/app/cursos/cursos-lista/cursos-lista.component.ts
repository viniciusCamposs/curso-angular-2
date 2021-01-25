import { CursosListaService } from './../cursos.service';
import { Curso } from './../curso';
import { Component, OnInit } from '@angular/core';
import { empty, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertModalServicesService } from 'src/app/shared/alert-modal-services.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

 // cursos: Curso[];

  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: CursosListaService,
    private alertModalServicesService: AlertModalServicesService
    ) { }

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh(){
    this.cursos$ = this.service.list()
    .pipe(
      catchError(error => {
        console.error(error);
       // this.error$.next(true);
        this.handleError();
        return empty();
      })
    );
  }

  handleError(){
    this.alertModalServicesService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde');
  }

}
