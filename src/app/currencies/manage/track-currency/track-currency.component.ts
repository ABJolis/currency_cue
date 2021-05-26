/* eslint-disable guard-for-in */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { element } from 'protractor';

import { CurrencyApiService } from '../../../currency-api.service';
import { Exchange } from '../../currency.model';
import { Currency } from '../../currency.model';
import currencyCodes from '../../manage/currencyCodes.json';


@Component({
  selector: 'app-track-currency',
  templateUrl: './track-currency.component.html',
  // styleUrls: ['./track-currency.component.scss'],
})
export class TrackCurrencyComponent implements OnInit {
  selected: string;
  baseCurr: Currency;
  targetCurr: Currency;
  calculated: Currency;
  currency: Currency;
  exchange: Exchange;
  targetAmount: string;
  baseAmount: string;
  selectedCurrency: Currency;


  constructor(
    private currencyService: CurrencyApiService,
    private modalCtrl: ModalController,
    ) {}

ngOnInit() {
  this.currencyService.getAllCountries().subscribe(data => {
    data.forEach((country) => console.log(country.currencyCode));
  });
}

handleChange($event) {
  console.log('this.selected: ', this.selected);
  this.currencyService.getExchangeRate(this.selected, $event.target.value)
  .subscribe(rate => {
    this.targetAmount = (+this.baseAmount * rate.exchangeRate).toString();
  });
}

handleSourceChange($event) {
  console.log('this.baseAmount: ', this.baseAmount);
  this.selected = $event.target.value;
}

handleSourceInput($event) {
  this.baseAmount = $event.target.value;
}

onCancel() {
  this.modalCtrl.dismiss(null, 'cancel');
}

}
  // onAddCue() {
  //   this.modalCtrl.dismiss({message: 'This will do stuff eventually!'}, 'confirm');
  // }
