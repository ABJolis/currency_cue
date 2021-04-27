/* eslint-disable guard-for-in */
import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

import { Currency } from '../../currency.model';
import { Cue } from '../../cues.model';


@Component({
  selector: 'app-track-currency',
  templateUrl: './track-currency.component.html',
  // styleUrls: ['./track-currency.component.scss'],
})
export class TrackCurrencyComponent implements OnInit {

  @Input() selectedCurrency: Currency;
  @Input() cue: Cue;

  countryCodes = [];
  //countryNames = new Map();

  fromValue: number;
  toValue: number;

  baseCurr: string; //default
  targetCurr: string; //default

  resultRate: any;
  swappedRate: any;

  constructor(
    private modalCtrl: ModalController,
    public navCtrl: NavController,
    // public http: HttpClient
    ) {}

  ngOnInit() {
  //   this.fetchCountries();
  //   this.getCurrencyRate();
  }

  // async fetchCountries() {
  //   try {
  //     const result = await this.currencyApiService.getCurrencyRate();
  //     if (result) {
  //       for (const res in result) {
  //         this.countryCodes.push(res);
  //         //this.countryNames.set(res, res.currencyName);
  //       }
  //     } else {
  //       console.log('error: result not found');
  //     };
  //   }
  //   catch (err) {
  //     console.error(err);
  //   }
  // }

  // async getCurrencyRate() {
  //   const from = this.baseCurr;
  //   const to = this.targetCurr;
  //   try {
  //     const exchangeRate = await this.conversionService.getExchangeRate(from, to);
  //     const rate = exchangeRate[from + '_' + to].val;
  //     this.resultRate = rate;
  //   }
  //   catch (err) {
  //     console.error(err);
  //   }
  // }

  calculateBaseCurrency() {
    this.toValue = this.fromValue * parseFloat(this.resultRate);
    console.log('Final Value: ' + this.toValue);
  }

  calculateTargetCurrency() {
    this.fromValue = this.toValue / parseFloat(this.resultRate);
    console.log('Final Value: ' + this.toValue);
  }

  // onCancel() {
  //   this.modalCtrl.dismiss(null, 'cancel');
  // }

  // onAddCue() {
  //   this.modalCtrl.dismiss({message: 'This will do stuff eventually!'}, 'confirm');
  // }

}
