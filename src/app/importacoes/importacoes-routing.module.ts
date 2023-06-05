import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PecasComponent } from './pecas/pecas.component'

const routes: Routes = [
  {
    path: 'pecas',
    title: 'Importar Peças - NetPeças',
    component: PecasComponent,
    data: {
      title: 'Peças'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImportacoesRoutingModule { }
