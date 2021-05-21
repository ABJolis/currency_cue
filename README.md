# CurrencyCue

CurrencyCue is a mobile and web app for comparing exchange-rate changes.

## Description

CurrencyCue pulls from an external API to deliver exchange-rate information on 179 global currencies. Users may track exchange rates in isolation, or by pairs of currencies. The app is designed to work on the web, as well as on iOS and Android mobile devices.

![CurrencyCue User Flow](https://raw.githubusercontent.com/ABJolis/currency_cue/master/src/assets/Untitled%20design%20(5).png)

## Installation
Use the package manager [npm](https://npmjs.com/) to install dependencies for CurrencyCue. From inside the project folder, run the following command:

```
npm install
```

To start the project in Angular's development server, run 

```
npm start
```

CurrencyCue requires a private API key to perform its currency-conversion functions. Users can obtain the key at [currencyconverterapi](https://www.currencyconverterapi.com/).

Inside the project folder, create an environment directory that includes an environment.ts file with the private API key:
```
export const environment = {
  production: false,
  API_KEY: '[enter API key here]'
};
```

If the file is named differently, make sure to included it in the .gitignore file.

# Tech Stack

CurrencyCue was built with the following technologies:

* Ionic
* Angular
* REST Countries
* Currency Converter API
* Typescript

CurrencyCue's planned backend will use Firebase.

## Usage

Once the app is loaded, click 'discover' to scroll and select a currency. On the currency's detail page, click 'track currency' to add it to the isolated tracking cue, or to compare the rate to another currency.

## Roadmap

CurrencyCue is in its first developmental release. Future releases will allow users to cue notifications for when currency exchange rates reach selected thresholds, and will incorporate data visualisation through historical rate charts.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
