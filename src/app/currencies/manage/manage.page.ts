import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CurrencyApiService } from '../../currency-api.service';
import { CuesService } from '../cues.service';
import { Cue } from '../cues.model';
import { Currency } from '../currency.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.page.html',
  styleUrls: ['./manage.page.scss'],
})
export class ManagePage implements OnInit {

  currency: Currency;

  cuedCurrencies: Cue[];

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private currencyService: CurrencyApiService,
    private cuesService: CuesService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      // if (!paramMap.has('currencyCode)) {
        // this.navCtrl.navigateBack('/currencies/tabs/discover');
        // return;
        // }
      //this.currency = this.currencyService.getCurrency(paramMap.get('currencyCode'));
    });
    this.cuedCurrencies = this.cuesService.cues;
  }

  onCancelCue(cuesId: string, slidingEl: IonItemSliding) {
    slidingEl.close();
  }
}
