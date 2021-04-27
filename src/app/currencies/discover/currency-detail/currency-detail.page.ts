import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ActionSheetController, ModalController } from '@ionic/angular';

import { CurrencyApiService } from '../../../currency-api.service';
import { Cue } from '../../cues.model';
import { Currency } from '../../currency.model';
import { Exchange } from '../../currency.model';
import { TrackCurrencyComponent } from '../../../currencies/manage/track-currency/track-currency.component';

@Component({
  selector: 'app-currency-detail',
  templateUrl: './currency-detail.page.html',
  styleUrls: ['./currency-detail.page.scss'],
})
export class CurrencyDetailPage implements OnInit {
  currency: Currency;
  exchange: Exchange;
  cues: Cue[];

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private currencyService: CurrencyApiService,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('currencyCode')) {
        this.navCtrl.navigateBack('/currencies/tabs/discover');
        return;
      }
      this.currencyService.getCurrency(
        paramMap.get('currencyCode'))
        .subscribe(c => this.currency = c);
      this.currencyService.getExchangeRate('EUR', 'USD')
      .subscribe(x => this.exchange = x);
  });
}

onTrackCurrency() {
  this.actionSheetCtrl.create({
    buttons: [
      {
        text: 'Add to Tracking Cue',
        handler: () => {
          this.addToCue('select');
        }
      },
      {
        text: 'Track Conversion Rates',
        handler: () => {
          this.openTrackingModal('select');
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
    ]
  }).then(actionSheetEl => {
    actionSheetEl.present();
  });

}

addToCue(mode: 'select') {
  console.log('Adding to cue!');
}

openTrackingModal(mode: 'select') {
  this.modalCtrl
  .create({
    component: TrackCurrencyComponent,
    componentProps: { selectedCurrency: this.currency }
  })
  .then(modalEl => {
    modalEl.present();
    return modalEl.onDidDismiss();
  })
  .then(resultData => {
    console.log(resultData.data, resultData.role);
    if (resultData.role ==='confirm') {
      console.log('ADDED!');
      //this.cues.push('this.currency');
     }
  });
}
  };

