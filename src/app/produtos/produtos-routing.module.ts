import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {
    path: 'produto',
    title: 'Produto - NetPeças',
    component: ProdutoComponent,
    data: {
      title: 'Fabricante'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
