import { Component, OnInit } from '@angular/core';

import usersData from '../_data';

@Component({
  selector: 'app-smart-tables-selectable-example',
  templateUrl: './smart-tables-selectable-example.component.html',
  styleUrls: ['./smart-tables-selectable-example.component.scss']
})
export class SmartTablesSelectableExampleComponent implements OnInit {

  usersData = usersData;
  selectedItems = [2, 3];

  columns = [
    'name',
    'registered',
    'role',
    'status'
  ];

  constructor() { }

  ngOnInit(): void {
    this.usersData = this.usersData.map((item, id) => {
      const _selected = this.selectedItems.includes(id);
      return {
        ...item,
        _selected
      };
    });
  }

  checkSelected = (selectedItems: any) => {
    this.selectedItems = selectedItems.map((item: { id: any; }) => item.id);
  };

  getBadge(status: string) {
    switch (status) {
      case 'Active':
        return 'success';
      case 'Inactive':
        return 'secondary';
      case 'Pending':
        return 'warning';
      case 'Banned':
        return 'danger';
      default:
        return 'primary';
    }
  }
}
