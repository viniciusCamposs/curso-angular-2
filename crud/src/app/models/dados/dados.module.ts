import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DadosRoutingModule } from './dados-routing.module';
import { DadosComponent } from 'src/app/components/dados/dados.component';
import { ClienteDadosComponent } from 'src/app/components/dados/cliente-dados/cliente-dados.component';



@NgModule({
  declarations: [DadosComponent, ClienteDadosComponent],
  imports: [
    CommonModule,
    DadosRoutingModule
  ]
})
export class DadosModule { }
