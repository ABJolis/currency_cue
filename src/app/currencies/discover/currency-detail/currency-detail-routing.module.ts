import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePage } from '../../manage/manage.page';

import { CurrencyDetailPage } from './currency-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CurrencyDetailPage
  },

  {
    path: 'addToCue',
    component: ManagePage
    //this, here, above? This route to ManagePage? This does not work.
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyDetailPageRoutingModule {}
