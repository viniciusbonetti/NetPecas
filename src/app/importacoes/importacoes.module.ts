import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportacoesRoutingModule } from './importacoes-routing.module';
import { PecasComponent } from './pecas/pecas.component';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, SharedModule, SmartTableModule, ToastModule } from '@coreui/angular-pro';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PecasComponent
  ],
  imports: [
    CommonModule,
    ImportacoesRoutingModule,
    CardModule,
    GridModule,
    SmartTableModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    ToastModule,
    SharedModule,
    ModalModule,
  ]
})
export class ImportacoesModule { }
