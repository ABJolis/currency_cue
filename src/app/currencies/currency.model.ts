export class Currency
 {
  countryName: string;
  currencyCode: string; //currency code
  alpha3Code: string;
  name: string;
  eurPrice?: number;
  flag: string;
  currUrl?: string;

     static parse(data) {
      const newObj = {
        countryName: data.name,
        alpha3Code: data.alpha3Code,
        currencyCode: data.currencies[0].code,
        name: data.currencies[0].name,
        flag: data.flag
      };
      return Object.assign(new Currency(), newObj);
     }
 }

export class Exchange
 {
  pair: string;
  baseCurr: string;
  targetCurr: string;
  exchangeRate: number;

    static parse(exchData) {
      const dataObj = {
        pair: exchData.results.query.id,
        baseCurr: exchData.results.query.fr,
        targetCurr: exchData.results.query.to,
        exchangeRate: Object.values(exchData.results)
      };
      return Object.assign(new Exchange(), dataObj);
    }
 }

