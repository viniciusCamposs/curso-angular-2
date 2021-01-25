import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CadastroRoutingModule } from './cadastro-routing.module';
import { ClienteComponent } from 'src/app/components/cadastro/cliente/cliente.component';
import { CadastroComponent } from 'src/app/components/cadastro/cadastro.component';


@NgModule({
  declarations: [ClienteComponent, CadastroComponent],
  imports: [
    CommonModule,
    CadastroRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CadastroModule { }
