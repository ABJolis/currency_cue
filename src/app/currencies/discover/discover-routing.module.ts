import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyDetailPageModule } from './currency-detail/currency-detail.module';
import { CurrencyDetailPage } from './currency-detail/currency-detail.page';

import { DiscoverPage } from './discover.page';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DiscoverPage
  },
  {
    path: ':currencyCode',
    loadChildren: () => import('./currency-detail/currency-detail.module')
    .then( m => m.CurrencyDetailPageModule)
    //component:CurrencyDetailPage
  },
  // {
  //   path: 'currencies/tabs/discover/:currencyCode',
  //   //loadChildren: () => import('./currency-detail/currency-detail.module')
  //   //.then( m => m.CurrencyDetailPageModule)
  //   component: CurrencyDetailPage
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiscoverPageRoutingModule {}
