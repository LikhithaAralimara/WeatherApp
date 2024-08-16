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
API key will expire on 27/Aug/2024.

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
  

      ### Expo DevTools
      Once you start the development server, Expo DevTools will automatically open in your default web browser. Follow the instructions provided in Expo DevTools to run the app on an iOS simulator, Android emulator, or a               connected device.
      
      ### Using an Emulator:
      
      - **iOS Simulator**: Click on the `Run on iOS simulator` button in Expo DevTools. This will open the app in the iOS simulator if you have Xcode installed.
      - **Android Emulator**: Click on the `Run on Android device/emulator` button in Expo DevTools to open the app in an Android emulator if you have Android Studio set up with an Android Virtual Device (AVD).
      
      ### Using a Physical Device:
      
      - **Expo Go App**: Download the Expo Go app from the App Store (iOS) or Google Play Store (Android).
      - **Scan the QR Code**: In Expo DevTools, you'll see a QR code. Open the Expo Go app on your phone and use its QR code scanner to scan the code. The app will launch on your device.
      - **Direct Link**: Alternatively, you can manually enter the URL displayed in Expo DevTools into the Expo Go app if scanning the QR code is not possible.
      


## Usage
1. **Home Screen:**

    Search for a city: Tap the search icon and enter the city name. Select a city from the list to view its weather details.
    View current weather: After selecting a city, you'll see the current weather and a 5-day forecast.

2. **Weather Detail Screen:**

    Current Weather: Displays current temperature, condition, and other weather stats.
    5-Day Forecast: Shows the weather forecast for the next 5 days.





# My Hosted App - using EXPO 

## Testing the Hosted App

The app has been hosted on Expo for testing. To view and test it, please install the Expo Go app on your device. Then, click [this link](https://expo.dev/preview/update?message=%20Changed%20Default%20City%20from%20Hassan%20To%20Bangalore&updateRuntimeVersion=1.0.0&createdAt=2024-08-15T22%3A57%3A34.912Z&slug=exp&projectId=5cc93d3c-1cf0-4a68-9019-f4f9d9ef0d09&group=7d1482cf-02b1-4bc1-a184-ab13fbc2d1c3) to access the hosted app directly.



## Contact
Thank you for checking out the project!
For any questions or feedback, please reach out to [likhithaaralimara@gmail.com](mailtolikhithaaralimara@gmail.com).

