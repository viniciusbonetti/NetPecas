import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-mail-toolbar',
  templateUrl: './mail-toolbar.component.html',
  styleUrls: ['./mail-toolbar.component.scss']
})
export class MailToolbarComponent {
  @HostBinding('class') hostClass = 'btn-toolbar mb-4';

  constructor() {}
}
