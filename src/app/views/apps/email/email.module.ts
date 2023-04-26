import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BadgeModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  HeaderModule,
  SharedModule
} from '@coreui/angular-pro';

import { IconModule } from '@coreui/icons-angular';

import { EmailRoutingModule } from './email-routing.module';
import { InboxComponent } from './inbox/inbox.component';
import { ComposeComponent } from './compose/compose.component';
import { MessageComponent } from './message/message.component';
import { InboxMessageComponent } from './inbox-message/inbox-message.component';
import { MailToolbarComponent } from './mail-toolbar/mail-toolbar.component';

@NgModule({
  declarations: [
    InboxComponent,
    ComposeComponent,
    MessageComponent,
    InboxMessageComponent,
    MailToolbarComponent
  ],
  imports: [
    CommonModule,
    EmailRoutingModule,
    GridModule,
    CardModule,
    HeaderModule,
    IconModule,
    ButtonModule,
    ButtonGroupModule,
    DropdownModule,
    BadgeModule,
    FormModule,
    SharedModule
  ]
})
export class EmailModule {
}
