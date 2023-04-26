import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullCalendarNgComponent } from './full-calendar-ng.component';

const routes: Routes = [
  {
    path: '',
    component: FullCalendarNgComponent,
    data: {
      title: 'FullCalendar'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullCalendarNgRoutingModule {
}
