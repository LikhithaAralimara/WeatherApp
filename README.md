# WeatherApp

## Description

A React Native weather application that provides current weather information and a 7-day forecast. The app allows users to search for cities, view current weather details, and see forecasts for upcoming days.

## Features

- Search for cities to get weather information.
- View current weather conditions and temperature.
- Check the 7-day weather forecast.
- Navigate between Home and WeatherDetail screens.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (You can install it via npm: `npm install -g expo-cli`)
- [Android Studio](https://developer.android.com/studio) or [Xcode](https://developer.apple.com/xcode/) for Android/iOS emulators respectively.

## Installation

### Using `npm`

1. **Clone the repository:**

   ```bash
   git clone https://github.com/LikhithaAralimara/WeatherApp.git
   ```

2. **Navigate to the project directory**

   ```bash
   cd WeatherApp
   ```

3. **Install Dependencies Yarn or npm**
     Yarn
      ```bash
        yarn install
      ```
      Npm
      ```bash
     npm install
      ```

## Setup

### API Key

The app requires an API key for weather data. Replace the placeholder `a0613fef199440178d5174211241308` in `constants.js` with your own API key from [Weather API](https://www.weatherapi.com/).

### Environment Configuration

Ensure you have the following dependencies installed for React Native development:

- Expo CLI
- React Navigation
- React Native Safe Area Context
- lodash
- React Native Progress

You can install them using:

**Using `npm`:**

```bash
npm install @react-navigation/native @react-navigation/native-stack react-native-safe-area-context lodash react-native-progress
```

**Using `yarn`:**

```bash
yarn add @react-navigation/native @react-navigation/native-stack react-native-safe-area-context lodash react-native-progress
```

## Running the App

1. **Start the Expo development server:**

   **Using `npm`:**

   ```bash
   npm start
    ```

   **Using `yarn`:**

   ```bash
   yarn start
    ```
2. **Open the app in an emulator or on a physical device:**

   Follow the instructions in the Expo DevTools that open in your browser. You can also use the Expo Go app on your phone to scan the QR code.


## Usage
1. **Home Screen:**

    Search for a city: Tap the search icon and enter the city name. Select a city from the list to view its weather details.
    View current weather: After selecting a city, you'll see the current weather and a 7-day forecast.

2. **Weather Detail Screen:**

    Current Weather: Displays current temperature, condition, and other weather stats.
    7-Day Forecast: Shows the weather forecast for the next 7 days.






