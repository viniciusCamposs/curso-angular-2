import { CursosListaService } from './../cursos.service';
import { Curso } from './../curso';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

 // cursos: Curso[];

  cursos$: Observable<Curso[]>;

  constructor(private service: CursosListaService) { }

  ngOnInit(): void {
   // this.service.list()
      //.subscribe(dados => this.cursos = dados);

      this.cursos$ = this.service.list();
  }

}
