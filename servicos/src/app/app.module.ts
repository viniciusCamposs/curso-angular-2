import { CursosComponent } from './../../../primeiro-projeto/src/app/cursos/cursos.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CursoModule } from './cursos/cursos.module';
import { CursosService } from './cursos/cursos.service';
import { CriarCursoModule} from './criar-curso/criar-curso.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CriarCursoModule,
    CursoModule
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
