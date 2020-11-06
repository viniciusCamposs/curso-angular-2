import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent{

  curso: string[] = ['Angular 2'];

  mostrarCursos = false;

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
  }

  constructor() { }


}
