import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';

import { GoogleMapsComponent } from './google-maps.component';
import { MapsRoutingModule } from './maps-routing.module';

import { BadgeModule, CardModule } from '@coreui/angular-pro';
import { IconModule } from '@coreui/icons-angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';

@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MapsRoutingModule,
    CardModule,
    IconModule,
    BadgeModule,
    DocsComponentsModule,
    GoogleMapsModule
  ],
  providers: [],
  declarations: [GoogleMapsComponent],
  exports: [GoogleMapsComponent],
  bootstrap: [GoogleMapsComponent]
})
export class MapsModule {
}
