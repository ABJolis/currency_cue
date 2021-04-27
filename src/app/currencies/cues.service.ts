/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

import { Currency } from './currency.model';
import { CurrencyApiService } from '../currency-api.service';

import { Cue } from './cues.model';

@Injectable({ providedIn: 'root' })

export class CuesService {

  private _cues: Cue[] = [
    {
      cueId: 'Krona-Escude',
      base: {
        countryName: 'Sweden',
        currencyCode: 'SEK',
        alpha3Code: 'SWE',
        name: 'Swedish Krona',
        flag: 'https://restcountries.eu/data/swe.svg'
      },
      target: {
        countryName: 'Cape Verde',
        currencyCode: 'CVE',
        alpha3Code: 'CPV',
        name: 'Cape Verde Escudo',
        flag: 'https://restcountries.eu/data/cpv.svg',
      }
    }
    // {
    //   cueId: 'Guyana-Congo',
    //   base: {
    //     countryName: 'Guyana',
    //     currencyCode: 'GYD',
    //     name: 'Guyanese Dollar',
    //     eurPrice: 100,
    //     flag: 'https://flagcdn.com/h240/gy.jpg'
    //   },
    //   target: {
    //     countryName: 'Democratic Republic of Congo',
    //     currencyCode: 'CDF',
    //     name: 'Congolese Franc',
    //     eurPrice: 5300.19,
    //     flag: 'https://flagcdn.com/h240/cd.jpg'
    //   }
    // },

    // {
    //   cueId: 'Franc-Tenge',
    //   base: {
    //     countryName: 'Comoros',
    //     currencyCode: 'KMF',
    //     name: 'Comorian Franc',
    //     eurPrice: 10,
    //     flag: 'https://flagcdn.com/h240/km.jpg'
    //   },
    //   target: {
    //     countryName: 'Kazakhstan',
    //     currencyCode: 'KZT',
    //     name: 'Kaazakhstani Tenge',
    //     eurPrice: 530.79,
    //     flag: 'https://flagcdn.com/h240/kz.jpg'
    //   }
    //}

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
