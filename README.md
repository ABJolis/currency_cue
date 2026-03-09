# CurrencyCue
CurrencyCue is a web and mobile application that tracks global currency exchange rates and allows users to monitor changes between currency pairs in real time.

## Description
CurrencyCue pulls from an external API to deliver exchange-rate information on 179 global currencies. Users may track exchange rates in isolation, or by pairs of currencies. The app is designed to work on the web, as well as on iOS and Android mobile devices.

![CurrencyCue User Flow](<https://github.com/ABJolis/currency_cue/raw/master/src/assets/Untitled%20design%20(11).png>)

## Features
- Track exchange rates between global currencies
- View current exchange-rate values in real time
- Responsive interface for desktop and mobile devices
- Simple configuration for API-based data retrieval

## Tech Stack

- [Ionic](https://ionicframework.com/)
- [Angular](https://angular.io/)
- [Typescript](https://www.typescriptlang.org/)
- [SaaS CSS](https://sass-lang.com/)
- [REST Countries](https://restcountries.eu/)
- [Currency Converter API](https://www.currencyconverterapi.com/)

CurrencyCue's planned backend will use [Firebase](https://firebase.google.com/).

## Developer Setup Guide — CurrencyCue App
Documentation for installing, configuring, and running a web/mobile currency tracking application built with Angular and Ionic.

### System Requirements
To run CurrencyCue locally, ensure the following tools are installed:
- Node.js (v14 or later recommended)
- npm (comes with Node.js)
- Ionic CLI
You can install the Ionic CLI globally with:
```
npm install -g @ionic/cli
```
CurrencyCue has been tested in modern browsers including:
- Chrome
- Firefox
- Safari
- Edge
For development, Chrome or Firefox with developer tools enabled is recommended.

### Installation
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

### Running the Application
To launch the development server and open the application in your browser, run
```
ionic serve
```
### Project Architecture
CurrencyCue is built as a hybrid web and mobile application using the Angular framework and the Ionic UI toolkit.

The application retrieves exchange-rate data from an external API and displays it through a responsive interface designed for both desktop and mobile use.

#### Key Components
##### Frontend framework
Angular handles application structure, routing, and state management.

##### UI framework
Ionic provides responsive components and styling optimized for cross-platform interfaces.

##### External API
CurrencyCue retrieves real-time currency exchange rates from a third-party API.

##### Environment configuration
API keys and configuration settings are stored in environment files to support local development and deployment.

##### Application Flow
1. The user selects currencies to monitor.
2. The application sends a request to the exchange-rate API.
3. The API returns current exchange-rate data.
4. Angular components process and display the results in the interface.

### Troubleshooting
Below are some issues you may encounter while installing or running CurrencyCue, and checks or fixes that may help to resolve them.

#### Application will not start?
To ensure all dependencies have been installed before running the application, run:

```
npm install
```
Then start the development server again:

```
ionic serve
```
If the issue persists, try deleting node_modules and reinstalling dependencies:

```
rm -rf node_modules
npm install
```
#### API data is not loading?

CurrencyCue relies on an external exchange-rate API. If exchange rate data is not appearing:

1. Confirm that the API key is correctly stored in the environment configuration file.

2. Verify that the API endpoint is reachable.

3. Check the browser console for network or authentication errors.

#### Port already in use?

If the development server fails to start because the port is already in use, you can run the app on another port:

```
ionic serve --port 8101
```
#### Unexpected runtime errors?

If you encounter runtime errors:

1. Check the browser developer console for error messages.

2. Confirm that your Node.js version matches the recommended version for the project.
   Check your installed Node.js version:
   ```
   node -v
   ```
   CurrencyCue works best with Node.js version 14 or later.
   If needed, install or switch Node versions using Node Version Manager (nvm):
   ```
   nvm install 14
   nvm use 14
   ```
5. Reinstall dependencies if needed.

#### Still having trouble?

If the problem persists, please open an issue in the project repository and include:

- a description of the problem
- the steps to reproduce it
- relevant error messages or screenshots

This will help diagnose the issue more quickly.

## Roadmap

CurrencyCue is in its first developmental release. Future releases will allow users to cue notifications for when currency exchange rates reach selected thresholds, and will incorporate data visualisation through historical rate charts.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
