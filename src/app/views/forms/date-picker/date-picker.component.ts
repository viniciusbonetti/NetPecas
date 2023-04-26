import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {

  public date?: Date | null = new Date();
  public calendarDate = new Date();

  public dateDisabledExample = new Date(2022, 2, 1);
  public disabledDates = [
    [new Date(2022, 2, 4), new Date(2022, 2, 7)], // range of dates that cannot be selected
    new Date(2022, 2, 16), // single date that cannot be selected
    new Date(2022, 3, 16),
    [new Date(2022, 4, 2), new Date(2022, 4, 8)]
  ];
  public maxDate = new Date(2022, 5, 0);
  public minDate = new Date(2022, 0, 1);

  onToday() {
    this.calendarDate = new Date();
  }

  onCancel() {
    this.date = null;
  }

}
