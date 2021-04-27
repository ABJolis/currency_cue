import { Component, OnInit } from '@angular/core';
import { CurrencyApiService } from '../../currency-api.service';
import { Currency } from '/Users/annej/CurrencyCue/src/app/currencies/currency.model';


@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedCurrency: Currency[];
  constructor(
    private currencyService: CurrencyApiService,
    ) { }

  ngOnInit() {
    this.currencyService.getAllCountries()
    .subscribe(data => {
      this.loadedCurrency = data;
    });
  }


}
