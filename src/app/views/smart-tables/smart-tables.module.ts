import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  AlertModule,
  BadgeModule,
  ButtonModule,
  CardModule,
  CollapseModule,
  GridModule,
  SharedModule,
  SmartTableModule,
  TableModule,
  UtilitiesModule
} from '@coreui/angular-pro';

import { DocsComponentsModule } from '@docs-components/docs-components.module';

import { SmartTablesRoutingModule } from './smart-tables-routing.module';
import { SmartTablesComponent } from './smart-tables.component';

import { SmartTablesBasicExampleComponent } from './smart-tables-basic-example/smart-tables-basic-example.component';
import {
  SmartTablesSelectableExampleComponent
} from './smart-tables-selectable-example/smart-tables-selectable-example.component';
import {
  SmartTablesDownloadableExampleComponent
} from './smart-tables-downloadable-example/smart-tables-downloadable-example.component';

@NgModule({
  declarations: [
    SmartTablesComponent,
    SmartTablesBasicExampleComponent,
    SmartTablesSelectableExampleComponent,
    SmartTablesDownloadableExampleComponent
  ],
  imports: [
    CommonModule,
    DocsComponentsModule,
    SmartTablesRoutingModule,
    GridModule,
    CardModule,
    SmartTableModule,
    CollapseModule,
    TableModule,
    UtilitiesModule,
    BadgeModule,
    SharedModule,
    ButtonModule,
    AlertModule
  ]
})
export class SmartTablesModule {
}
