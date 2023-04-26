import { Component } from '@angular/core';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent {

  constructor() { }

  print($event: MouseEvent) {
    $event.preventDefault();
    window && window.print();
  }

}
