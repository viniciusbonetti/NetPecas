import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutoComponent } from './produto/produto.component';


@NgModule({
  declarations: [
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule
  ]
})
export class ProdutosModule { }
