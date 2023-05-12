import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent, EmailLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    title: 'NetPeças',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'apps/email',
    component: EmailLayoutComponent,
    
    children: [
      {
        path: '',
        loadChildren: () =>
        import('./views/apps/email/email.module').then((m) => m.EmailModule)
      }
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        title: 'Netpeças - Dashboard',
        loadChildren: () =>
        import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'configuracoes',
        title: 'Netpeças - Configurações',
        loadChildren: () =>
        import('./configuracoes/configuracoes.module').then((m) => m.ConfiguracoesModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
        import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
        import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
        import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
        import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
        import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
        import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'widgets',
        loadChildren: () =>
        import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'smart-table',
        loadChildren: () =>
        import('./views/smart-tables/smart-tables.module').then((m) => m.SmartTablesModule)
      },
      {
        path: 'plugins',
        loadChildren: () =>
        import('./views/plugins/plugins.module').then((m) => m.PluginsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
        import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      {
        path: 'apps',
        loadChildren: () =>
        import('./views/apps/apps.module').then((m) => m.AppsModule)
      }
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Netpeças - Login',
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
