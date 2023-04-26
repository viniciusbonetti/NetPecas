import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconModule } from '@coreui/icons-angular';
import { ButtonModule, CardModule, GridModule, TableModule } from '@coreui/angular-pro';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    CardModule,
    IconModule,
    GridModule,
    ButtonModule,
    TableModule
  ]
})
export class InvoiceModule {
}
