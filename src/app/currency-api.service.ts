import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, pipe } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Currency, Exchange } from './currencies/currency.model';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class CurrencyApiService {

  private url = 'https://restcountries.eu/rest/v2';

  private currUrl = 'http://free.currconv.com/api/v7/convert?q=';

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<Currency[]> {
    return this.http.get<Currency[]>(`${this.url}/all`)
      .pipe(map((countries: []) => countries
      .map(country => Currency
      .parse(country))));
  }

  getCurrency(code: string): Observable<Currency> {
    return this.http.get(`${this.url}/alpha/${code}`)
      .pipe(map(country => Currency.parse(country)));
  }

  // addToCue(currency: Currency): Observable<Currency> {
  //   return this.http.post<Currency>(this.getCurrency, currency, this.http);
  // }

   getExchangeRate(from: string, to: string) {
     console.log('from and to: ', from, to);
    return this.http.get(
      `${this.currUrl}${from}_${to}&apiKey=${environment.API_KEY}`
      )
      .pipe(map(exRate => {
        console.log('exRate: ', exRate);
        return Exchange.parse(exRate);
      }));
    }

    calculateTargetCurrency(from: string, to: string, amount: number = 1) {
      return this.http.get(
        `${to} = ${from} / (this.exRate)`
      )
      .pipe(map(fromCurr => Exchange.parse(fromCurr)));
    }


}


