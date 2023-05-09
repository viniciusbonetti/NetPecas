import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracoesRoutingModule } from './configuracoes-routing.module';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { AlertModule, BadgeModule, ButtonModule, CardModule, CollapseModule, DatePickerModule, FormModule, GridModule, ModalModule, ProgressModule, SharedModule, SmartTableModule, TableModule, ToastModule, UtilitiesModule } from '@coreui/angular-pro';
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
    GridModule,
    CardModule,
    SmartTableModule,
    CollapseModule,
    TableModule,
    UtilitiesModule,
    BadgeModule,
    SharedModule,
    ButtonModule,
    AlertModule,
    DatePickerModule,
    ToastModule,
    ProgressModule,
  ]
})
export class ConfiguracoesModule { }
