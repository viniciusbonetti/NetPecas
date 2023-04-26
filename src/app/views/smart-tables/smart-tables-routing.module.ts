import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SmartTablesComponent } from './smart-tables.component';

const routes: Routes = [
  {
    path: '',
    component: SmartTablesComponent,
    data: {
      title: 'Smart Table'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmartTablesRoutingModule { }
