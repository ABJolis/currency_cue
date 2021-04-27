/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';

import { Currency } from './currency.model';

import { Cue } from './cues.model';

@Injectable({ providedIn: 'root' })

export class CuesService {

  private _cues: Cue[] = [

    // {
    //   cueId: 'Krona-Escude',
    //   base: {
    //     countryName: 'Sweden',
    //     currencyCode: 'SEK',
    //     //flagId: 'se',
    //     name: 'Swedish Krona',
    //     eurPrice: 1,
    //     flag: 'https://flagcdn.com/h240/se.jpg',
    //     //currUrl: 'http://data.fixer.io/api/latest?access_key=efa9c75ed4c7ee156777fe1240360ac9&base=EUR&symbols=SEK'
    //   },
    //   target: {
    //     countryName: 'Cape Verde',
    //     currencyCode: 'CVE',
    //     //flagId: 'cv',
    //     name: 'Cape Verde Escudo',
    //     eurPrice: 53.79,
    //     flag: 'https://flagcdn.com/h240/cv.jpg',
    //     currUrl: 'http://data.fixer.io/api/latest?access_key=efa9c75ed4c7ee156777fe1240360ac9&base=EUR&symbols=CVE'
    //   }
    // },

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
