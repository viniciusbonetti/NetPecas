import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FabricanteComponent } from './fabricante/fabricante.component';

const routes: Routes = [
  {
    path: 'fabricante',
    component: FabricanteComponent,
    data: {
      title: 'Fabricante'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfiguracoesRoutingModule { }
