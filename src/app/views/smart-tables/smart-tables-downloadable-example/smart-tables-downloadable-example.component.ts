import { Component, OnInit } from '@angular/core';

import usersData from '../_data';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-smart-tables-downloadable-example',
  templateUrl: './smart-tables-downloadable-example.component.html',
  styleUrls: ['./smart-tables-downloadable-example.component.scss']
})
export class SmartTablesDownloadableExampleComponent implements OnInit {

  usersData = usersData;

  get currentItems() {
    return this._currentItems;
  }
  set currentItems(value) {
    this._currentItems = value;
  }
  private _currentItems: any[] = [...this.usersData];

  columns = [
    'name',
    'registered',
    'role',
    'status'
  ];

  get csvContent() {
    return this.currentItems.map((item) => Object.values(item).join(',')).join('\n');
  }

  get csvCode() {
    const rawCvsCode = 'data:text/csv;charset=utf-8,SEP=,%0A' + encodeURIComponent(this.csvContent);
    return this.sanitizer.bypassSecurityTrustResourceUrl(rawCvsCode);
  }

  constructor(
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
  }

  handleFilteredItems(items: any) {
    this.currentItems = [...items];
  }
}
