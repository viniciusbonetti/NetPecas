import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoComponent } from './produto/produto.component';
import { ButtonModule, CardModule, DatePickerModule, FormModule, GridModule, ModalModule, SharedModule, SmartTableModule, ToastModule } from '@coreui/angular-pro';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';


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
    SharedModule,
    ModalModule,
    CurrencyMaskModule,
  ]
})
export class ProdutosModule { }
