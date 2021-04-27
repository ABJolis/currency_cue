import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { CurrencyDetailPageRoutingModule } from './currency-detail-routing.module';
import { CurrencyDetailPage } from './currency-detail.page';

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
  declarations: [CurrencyDetailPage]
})
export class CurrencyDetailPageModule {}
