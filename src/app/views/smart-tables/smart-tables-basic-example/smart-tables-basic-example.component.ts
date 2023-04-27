import { Component } from '@angular/core';

import usersData from '../_data';

@Component({
  selector: 'app-smart-tables-basic-example',
  templateUrl: './smart-tables-basic-example.component.html',
  styleUrls: ['./smart-tables-basic-example.component.scss']
})
export class SmartTablesBasicExampleComponent {

  usersData = usersData;

  columns = [
    {
      key: 'name',
      _style: { width: '40%' }
    },
    'registered',
    { key: 'role', _style: { width: '20%' } },
    { key: 'status', _style: { width: '15%' } },
    {
      key: 'mostrar',
      label: '',
      _style: { width: '5%' },
      filter: false,
      sorter: false
    }
  ];

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

  details_visible = Object.create({});

  toggleDetails(item: any) {
    this.details_visible[item] = !this.details_visible[item];
  }
}
