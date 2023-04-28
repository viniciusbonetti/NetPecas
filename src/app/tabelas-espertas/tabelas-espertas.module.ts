import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabelasEspertasRoutingModule } from './tabelas-espertas-routing.module';
import { TabelaEspertaTesteComponent } from './tabela-esperta-teste/tabela-esperta-teste.component';
import { SmartTableModule } from '@coreui/angular-pro';


@NgModule({
  declarations: [
    TabelaEspertaTesteComponent
  ],
  imports: [
    CommonModule,
    TabelasEspertasRoutingModule,
    SmartTableModule
  ]
})
export class TabelasEspertasModule { }
