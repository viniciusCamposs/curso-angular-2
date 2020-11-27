import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos.routing.module';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos.component';
import { CursosService } from './cursos.service';

@NgModule({
        imports: [
            CommonModule,
            CursosRoutingModule
        ],
        exports: [],
        declarations: [
            CursosComponent,
            CursoDetalheComponent,
            CursoNaoEncontradoComponent
        ],
        providers: [CursosService]
})

export class CursosModule { } 