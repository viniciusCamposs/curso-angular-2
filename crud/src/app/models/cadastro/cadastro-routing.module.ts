import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from 'src/app/components/cadastro/cadastro.component';
import { ClienteComponent } from 'src/app/components/cadastro/cliente/cliente.component';

const routes: Routes = [
  {
    path: '',
    component: CadastroComponent,
    children: [
      {
        path: 'cliente',
        component: ClienteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroRoutingModule { }
