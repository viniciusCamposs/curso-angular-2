import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteDadosComponent } from 'src/app/components/dados/cliente-dados/cliente-dados.component';
import { DadosComponent } from 'src/app/components/dados/dados.component';


const routes: Routes = [
  {
    path: '',
    component: DadosComponent,
    children: [
      {
        path: 'cliente-dados',
        component: ClienteDadosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DadosRoutingModule { }
