import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoComponent } from './produto/produto.component';
import { ButtonModule, CardModule, DatePickerModule, FormModule, GridModule, SharedModule, SmartTableModule, ToastModule } from '@coreui/angular-pro';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    CardModule,
    GridModule,
    SmartTableModule,
    ReactiveFormsModule,
    FormModule,
    ButtonModule,
    DatePickerModule,
    ToastModule,
    SharedModule
  ]
})
export class ProdutosModule { }
