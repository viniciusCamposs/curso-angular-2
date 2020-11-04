import { Component} from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent{

  cursos: string[] = ["Angular 2", "Java", "C#"];
  
  constructor() { }


}
