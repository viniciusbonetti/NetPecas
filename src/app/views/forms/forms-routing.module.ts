import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FloatingLabelsComponent } from './floating-labels/floating-labels.component';
import { FormControlsComponent } from './form-controls/form-controls.component';
import { InputGroupsComponent } from './input-groups/input-groups.component';
import { RangesComponent } from './ranges/ranges.component';
import { SelectComponent } from './select/select.component';
import { ChecksRadiosComponent } from './checks-radios/checks-radios.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { LayoutComponent } from './layout/layout.component';
import { ValidationComponent } from './validation/validation.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { TimePickerComponent } from './time-picker/time-picker.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Forms'
    },
    children: [
      {
        path: '',
        redirectTo: 'form-control',
        pathMatch: 'full'
      },
      {
        path: 'form-control',
        component: FormControlsComponent,
        data: {
          title: 'Form Control'
        }
      },
      {
        path: 'select',
        component: SelectComponent,
        data: {
          title: 'Select'
        }
      },
      {
        path: 'multi-select',
        component: MultiSelectComponent,
        data: {
          title: 'Multi Select'
        }
      },
      {
        path: 'checks-radios',
        component: ChecksRadiosComponent,
        data: {
          title: 'Checks & Radios'
        }
      },
      {
        path: 'range',
        component: RangesComponent,
        data: {
          title: 'Range'
        }
      },
      {
        path: 'input-group',
        component: InputGroupsComponent,
        data: {
          title: 'Input Group'
        }
      },
      {
        path: 'floating-labels',
        component: FloatingLabelsComponent,
        data: {
          title: 'Floating Labels'
        }
      },
      {
        path: 'layout',
        component: LayoutComponent,
        data: {
          title: 'Layout'
        }
      },
      {
        path: 'date-picker',
        component: DatePickerComponent,
        data: {
          title: 'Date Picker'
        }
      },
      {
        path: 'date-range-picker',
        component: DateRangePickerComponent,
        data: {
          title: 'Date Range Picker'
        }
      },
      {
        path: 'time-picker',
        component: TimePickerComponent,
        data: {
          title: 'Time Picker'
        }
      },
      {
        path: 'validation',
        component: ValidationComponent,
        data: {
          title: 'Validation'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule {
}
