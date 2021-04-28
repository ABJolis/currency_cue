import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CurrencyDetailPageRoutingModule } from './currency-detail-routing.module';
import { CurrencyDetailPage } from './currency-detail.page';
import { TrackCurrencyComponent } from '../../../currencies/manage/track-currency/track-currency.component';

const routes: Routes = [
  {
    path: '',
    component: CurrencyDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrencyDetailPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CurrencyDetailPage, TrackCurrencyComponent],
  entryComponents: [TrackCurrencyComponent]
})
export class CurrencyDetailPageModule {}
