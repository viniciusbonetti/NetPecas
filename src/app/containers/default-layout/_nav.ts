import { INavData } from '@coreui/angular-pro';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    linkProps: { fragment: 'headings' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Base',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/base/accordion'
      },
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Cards',
        url: '/base/cards'
      },
      {
        name: 'Carousel',
        url: '/base/carousel'
      },
      {
        name: 'Collapse',
        url: '/base/collapse'
      },
      {
        name: 'List Group',
        url: '/base/list-group'
      },
      {
        name: 'Navs & Tabs',
        url: '/base/navs'
      },
      {
        name: 'Pagination',
        url: '/base/pagination'
      },
      {
        name: 'Placeholder',
        url: '/base/placeholder'
      },
      {
        name: 'Popovers',
        url: '/base/popovers'
      },
      {
        name: 'Progress',
        url: '/base/progress'
      },
      {
        name: 'Spinners',
        url: '/base/spinners'
      },
      {
        name: 'Tables',
        url: '/base/tables'
      },
      {
        name: 'Tabs',
        url: '/base/tabs'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns'
      },
      {
        name: 'Loading Button',
        url: '/buttons/loading-buttons',
        badge: {
          color: 'danger-gradient',
          text: 'PRO'
        }
      }
    ]
  },
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control'
      },
      {
        name: 'Select',
        url: '/forms/select'
      },
      {
        name: 'Multi Select',
        url: '/forms/multi-select',
        badge: {
          color: 'danger-gradient',
          text: 'PRO'
        },
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios'
      },
      {
        name: 'Range',
        url: '/forms/range'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels'
      },
      {
        name: 'Layout',
        url: '/forms/layout'
      },
      {
        name: 'Date Picker',
        url: '/forms/date-picker',
        badge: {
          color: 'danger-gradient',
          text: 'PRO'
        },
      },
      {
        name: 'Date Range Picker',
        url: '/forms/date-range-picker',
        badge: {
          color: 'danger-gradient',
          text: 'PRO'
        },
      },
      {
        name: 'Time Picker',
        url: '/forms/time-picker',
        badge: {
          color: 'danger-gradient',
          text: 'PRO'
        },
      },
      {
        name: 'Validation',
        url: '/forms/validation'
      }
    ]
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/icons/flags'
      },
      {
        name: 'CoreUI Brands',
        url: '/icons/brands'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts'
      },
      {
        name: 'Badges',
        url: '/notifications/badges'
      },
      {
        name: 'Modal',
        url: '/notifications/modal'
      },
      {
        name: 'Toast',
        url: '/notifications/toasts'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Smart Table',
    url: '/smart-table',
    iconComponent: { name: 'cil-grid'},
    badge: {
      color: 'danger-gradient',
      text: 'PRO',
    },
  },
  {
    title: true,
    name: 'Plugins'
  },
  {
    name: 'Calendar',
    iconComponent: { name: 'cil-calendar' },
    url: '/plugins/calendar'
  },
  {
    name: 'Charts',
    iconComponent: { name: 'cil-chart' },
    url: '/plugins/charts'
  },
  {
    name: 'Google Maps',
    iconComponent: { name: 'cil-map' },
    url: '/plugins/google-maps'
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
  {
    name: 'Apps',
    url: '/apps',
    iconComponent: { name: 'cil-layers' },
    children: [
      {
        name: 'Invoicing',
        iconComponent: { name: 'cil-spreadsheet' },
        url: '/apps/invoicing',
        children: [
          {
            name: 'Invoice',
            badge: {
              color: 'danger-gradient',
              text: 'PRO'
            },
            url: '/apps/invoicing/invoice'
          }
        ]
      },
      {
        name: 'Email',
        url: '/apps/email',
        iconComponent: { name: 'cil-envelope-open' },
        children: [
          {
            name: 'Inbox',
            badge: {
              color: 'danger-gradient',
              text: 'PRO'
            },
            url: '/apps/email/inbox'
          },
          {
            name: 'Message',
            badge: {
              color: 'danger-gradient',
              text: 'PRO'
            },
            url: '/apps/email/message'
          },
          {
            name: 'Compose',
            badge: {
              color: 'danger-gradient',
              text: 'PRO'
            },
            url: '/apps/email/compose'
          }
        ]
      }
    ]
  }
];
