import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, TableModule } from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FabricanteComponent
  ],
  imports: [
    CommonModule,
    ConfiguracoesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule,
    TableModule,
  ]
})
export class ConfiguracoesModule { }
