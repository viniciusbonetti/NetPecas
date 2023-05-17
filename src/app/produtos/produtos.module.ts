import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoComponent } from './produto/produto.component';
import { ButtonModule, CardModule, FormModule, GridModule, SmartTableModule } from '@coreui/angular-pro';
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
  ]
})
export class ProdutosModule { }
