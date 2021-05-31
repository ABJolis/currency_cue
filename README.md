# CurrencyCue

CurrencyCue is a mobile and web app for tracking exchange-rate changes.

## Description

CurrencyCue pulls from an external API to deliver exchange-rate information on 179 global currencies. Users may track exchange rates in isolation, or by pairs of currencies. The app is designed to work on the web, as well as on iOS and Android mobile devices.

![CurrencyCue User Flow](<https://github.com/ABJolis/currency_cue/raw/master/src/assets/Untitled%20design%20(11).png>)

## Getting Started

1. Clone this repo:

```
git clone https://github.com/ABJolis/currency_cue.git
cd currency_cue
```

2. From inside the project folder, use [npm](https://npmjs.com/) to install CurrencyCue's dependencies:

```
npm install
```

3. Obtain the private API key necessary for CurrencyCue's conversion function at [currencyconverterapi](https://www.currencyconverterapi.com/).

4. Inside the project's environment directory, create an environment.ts file with the private API key:

```
export const environment = {
  production: false,
  API_KEY: '[enter API key here]'
};
```

(If you name this file differently, make sure to include it in the .gitignore file.)

5. Start the project in Angular's development server by running

```
npm start
```

6. Navigate to [localhost:4200](http://localhost:4200/currencies/)

# Tech Stack

CurrencyCue was built with the following technologies:

- [Ionic](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [Typescript](https://www.typescriptlang.org/)
- [SaaS CSS](https://sass-lang.com/)
- [REST Countries](https://restcountries.eu/)
- [Currency Converter API](https://www.currencyconverterapi.com/)

CurrencyCue's planned backend will use [Firebase](https://firebase.google.com/).

## Roadmap

CurrencyCue is in its first developmental release. Future releases will allow users to cue notifications for when currency exchange rates reach selected thresholds, and will incorporate data visualisation through historical rate charts.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
