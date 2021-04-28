/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

import { Currency } from './currency.model';
import { CurrencyApiService } from '../currency-api.service';

import { Cue } from './cues.model';

@Injectable({ providedIn: 'root' })

export class CuesService {

  private _cues: Cue[] = [
    {
      cueId: 'Krona-Ngultrum',
      base: {
        countryName: 'Sweden',
        currencyCode: 'SEK',
        alpha3Code: 'SWE',
        name: 'Swedish Krona',
        flag: 'https://restcountries.eu/data/swe.svg'
      },
      target: {
        countryName: 'Bhutan',
        currencyCode: 'BTN',
        alpha3Code: 'BTN',
        name: 'Bhutanese Ngultrum',
        flag: 'https://restcountries.eu/data/btn.svg',
      },
        cueRate: 'SEK 1.00 = BTN 8.89'
    },
    {
      cueId: 'Guyana-Congo',
      base: {
        countryName: 'Guyana',
        currencyCode: 'GYD',
        alpha3Code: 'GUY',
        name: 'Guyanese Dollar',
        flag: 'https://restcountries.eu/data/guy.svg'
      },
      target: {
        countryName: 'Cape Verde',
        currencyCode: 'CDF',
        alpha3Code: 'COD',
        name: 'Congolese Franc',
        flag: 'https://restcountries.eu/data/cod.svg',
      },
      cueRate: 'GYD 1.00 = CDF 9.56'
    },
    {
      cueId: 'Franc-Tenge',
      base: {
        countryName: 'Kazakhstan',
        currencyCode: 'KZT',
        alpha3Code: 'KAZ',
        name: 'Kazakhstani Tenge',
        flag: 'https://restcountries.eu/data/kaz.svg',
      },
      target: {
        countryName: 'Comoros',
        currencyCode: 'KMF',
        alpha3Code: 'COM',
        name: 'Comorian Franc',
        flag: 'https://restcountries.eu/data/com.svg'
      },
      cueRate: 'KZT 1.00 = KMF 0.95'
    }

 ];

  get cues() {
    return [...this._cues];
  }

  constructor() { }

  getCue(cueId: string) {
    return {...this._cues.find(
      c => c.cueId === cueId)
    };
   }
}
