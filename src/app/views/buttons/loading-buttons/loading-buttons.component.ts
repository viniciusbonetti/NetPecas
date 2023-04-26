import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-buttons',
  templateUrl: './loading-buttons.component.html',
  styleUrls: ['./loading-buttons.component.scss']
})
export class LoadingButtonsComponent {

  states = ['normal', 'active', 'disabled'];
  colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];

  public loading = new Array(36);

  constructor() { }

  onClick(idx: number) {

    if (!!this.loading[idx]) {
      clearTimeout(this.loading[idx]);
      this.loading[idx] = undefined;
    } else {
      this.loading[idx] = setTimeout(() => {
        this.loading[idx] = undefined;
      }, 3000);
    }
  }
}
