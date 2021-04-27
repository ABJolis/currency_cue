import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrenciesPage } from './currencies.page';
import { DiscoverPageModule } from './discover/discover.module';
import { DiscoverPage } from './discover/discover.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: CurrenciesPage,
    children: [
      {
        path: 'discover',
        children: [
          {
            path: '',
            loadChildren: () => import('./discover/discover.module').then(m => m.DiscoverPageModule)
          },
        ]
      },
      {
        path: 'manage',
        children: [
          {
            path: '',
            loadChildren: () => import('./manage/manage.module').then(m => m.ManagePageModule)
          }
        ]
      }

    ]
  },
  {
    path: '',
    redirectTo: '/currencies/tabs/discover',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrenciesPageRoutingModule {}
