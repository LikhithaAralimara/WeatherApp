// // import {
// //   View,
// //   Text,
// //   Image,
// //   TextInput,
// //   TouchableOpacity,
// //   ScrollView,
// // } from "react-native";
// // import React, { useCallback, useEffect, useState } from "react";
// // import { SafeAreaView } from "react-native-safe-area-context";
// // import { MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/outline";
// // import { CalendarDaysIcon, MapPinIcon } from "react-native-heroicons/solid";
// // import { debounce } from "lodash";
// // import { theme } from "../theme";
// // import { fetchLocations, fetchWeatherForecast } from "../api/weather";
// // import * as Progress from "react-native-progress";
// // import { StatusBar } from "expo-status-bar";
// // import { weatherImages } from "../constants";
// // import { getData, storeData } from "../utils/asyncStorage";



// // export default function HomeScreen() { 

// //   const [showSearch, toggleSearch] = useState(false);
// //   const [locations, setLocations] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [weather, setWeather] = useState({});

// //   const handleSearch = (search) => {
// //     // console.log('value: ',search);
// //     if (search && search.length > 2)
// //       fetchLocations({ cityName: search }).then((data) => {
// //         // console.log('got locations: ',data);
// //         setLocations(data);
// //       });
// //   };

// //   const handleLocation = (loc) => {
// //     setLoading(true);
// //     toggleSearch(false);
// //     setLocations([]);
// //     fetchWeatherForecast({
// //       cityName: loc.name,
// //       days: "7",
// //     }).then((data) => {
// //       setLoading(false);
// //       setWeather(data);
// //       storeData("city", loc.name);
// //     });
// //   };

// //   useEffect(() => {
// //     fetchMyWeatherData();
// //   }, []);

// //   const fetchMyWeatherData = async () => {
// //     let myCity = await getData("city");
// //     let cityName = "Bangalore";
// //     if (myCity) {
// //       cityName = myCity;
// //     }
// //     fetchWeatherForecast({
// //       cityName,
// //       days: "7",
// //     }).then((data) => {
// //       // console.log('got data: ',data.forecast.forecastday);
// //       setWeather(data);
// //       setLoading(false);
// //     });
// //   };

// //   const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

// //   const { location, current } = weather;

// //   return (
// //     <View className="flex-1 relative">
// //       <StatusBar style="light" />
// //       <Image
// //         blurRadius={70}
// //         source={require("../assets/images/bg.png")}
// //         className="absolute w-full h-full"
// //       />
// //       {loading ? (
// //         <View className="flex-1 flex-row justify-center items-center">
// //           <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
// //         </View>
// //       ) : (
// //         <SafeAreaView className="flex flex-1">
// //           {/* search section */}
// //           <View style={{ height: "7%" }} className="mx-4 relative z-50">
// //             <View
// //               className="flex-row justify-end items-center rounded-full"
// //               style={{
// //                 backgroundColor: showSearch
// //                   ? theme.bgWhite(0.2)
// //                   : "transparent",
// //               }}
// //             >
// //               {showSearch ? (
// //                 <TextInput
// //                   onChangeText={handleTextDebounce}
// //                   placeholder="Search city"
// //                   placeholderTextColor={"lightgray"}
// //                   className="pl-6 h-10 pb-1 flex-1 text-base text-white"
// //                 />
// //               ) : null}
// //               <TouchableOpacity
// //                 onPress={() => toggleSearch(!showSearch)}
// //                 className="rounded-full p-3 m-1"
// //                 style={{ backgroundColor: theme.bgWhite(0.3) }}
// //               >
// //                 {showSearch ? (
// //                   <XMarkIcon size="25" color="white" />
// //                 ) : (
// //                   <MagnifyingGlassIcon size="25" color="white" />
// //                 )}
// //               </TouchableOpacity>
// //             </View>
// //             {locations.length > 0 && showSearch ? (
// //               <View className="absolute w-full bg-gray-300 top-16 rounded-3xl ">
// //                 {locations.map((loc, index) => {
// //                   let showBorder = index + 1 != locations.length;
// //                   let borderClass = showBorder
// //                     ? " border-b-2 border-b-gray-400"
// //                     : "";
// //                   return (
// //                     <TouchableOpacity
// //                       key={index}
// //                       onPress={() => handleLocation(loc)}
// //                       className={
// //                         "flex-row items-center border-0 p-3 px-4 mb-1 " +
// //                         borderClass
// //                       }
// //                     >
// //                       <MapPinIcon size="20" color="gray" />
// //                       <Text className="text-black text-lg ml-2">
// //                         {loc?.name}, {loc?.country}
// //                       </Text>
// //                     </TouchableOpacity>
// //                   );
// //                 })}
// //               </View>
// //             ) : null}
// //           </View>

// //           {/* forecast section */}
// //           <View className="mx-4 flex justify-around flex-1 mb-2">
// //             {/* location */}
// //             <Text className="text-white text-center text-2xl font-bold">
// //               {location?.name},
// //               <Text className="text-lg font-semibold text-gray-300">
// //                 {location?.country}
// //               </Text>
// //             </Text>
// //             {/* weather icon */}
// //             <View className="flex-row justify-center">
// //               <Image
// //                 // source={{uri: 'https:'+current?.condition?.icon}}
// //                 source={weatherImages[current?.condition?.text || "other"]}
// //                 className="w-52 h-52"
// //               />
// //             </View>
// //             {/* degree celcius */}
// //             <View className="space-y-2">
// //               <Text className="text-center font-bold text-white text-6xl ml-5">
// //                 {current?.temp_c}&#176;
// //               </Text>
// //               <Text className="text-center text-white text-xl tracking-widest">
// //                 {current?.condition?.text}
// //               </Text>
// //             </View>

// //             {/* other stats */}
// //             <View className="flex-row justify-between mx-4">
// //               <View className="flex-row space-x-2 items-center">
// //                 <Image
// //                   source={require("../assets/icons/wind.png")}
// //                   className="w-6 h-6"
// //                 />
// //                 <Text className="text-white font-semibold text-base">
// //                   {current?.wind_kph}km
// //                 </Text>
// //               </View>
// //               <View className="flex-row space-x-2 items-center">
// //                 <Image
// //                   source={require("../assets/icons/drop.png")}
// //                   className="w-6 h-6"
// //                 />
// //                 <Text className="text-white font-semibold text-base">
// //                   {current?.humidity}%
// //                 </Text>
// //               </View>
// //               <View className="flex-row space-x-2 items-center">
// //                 <Image
// //                   source={require("../assets/icons/sun.png")}
// //                   className="w-6 h-6"
// //                 />
// //                 <Text className="text-white font-semibold text-base">
// //                   {weather?.forecast?.forecastday[0]?.astro?.sunrise}
// //                 </Text>
// //               </View>
// //             </View>
// //           </View>

// //           {/* forecast for next days */}
// //           <View className="mb-2 space-y-3">
// //             <View className="flex-row items-center mx-5 space-x-2">
// //               <CalendarDaysIcon size="22" color="white" />
// //               <Text className="text-white text-base">Daily forecast</Text>
// //             </View>
// //             <ScrollView
// //               horizontal
// //               contentContainerStyle={{ paddingHorizontal: 15 }}
// //               showsHorizontalScrollIndicator={false}
// //             >
// //               {weather?.forecast?.forecastday?.map((item, index) => {
// //                 const date = new Date(item.date);
// //                 const options = { weekday: "long" };
// //                 let dayName = date.toLocaleDateString("en-US", options);
// //                 dayName = dayName.split(",")[0];

// //                 return (
// //                   <View
// //                     key={index}
// //                     className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
// //                     style={{ backgroundColor: theme.bgWhite(0.15) }}
// //                   >
// //                     <Image
// //                       source={
// //                         weatherImages[item?.day?.condition?.text || "other"]
// //                       }
// //                       className="w-11 h-11"
// //                     />
// //                     <Text className="text-white">{dayName}</Text>
// //                     <Text className="text-white text-xl font-semibold">
// //                       {item?.day?.avgtemp_c}&#176;
// //                     </Text>
// //                   </View>
// //                 );
// //               })}
// //             </ScrollView>
// //           </View>
// //         </SafeAreaView>
// //       )}
// //     </View>
// //   );
// // }

// // // // screens/HomeScreen.js
// // // import React, { useState, useCallback, useEffect } from 'react';
// // // import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, ActivityIndicator, SafeAreaView } from 'react-native';
// // // import { debounce } from 'lodash';
// // // import { useNavigation } from '@react-navigation/native';
// // // import { useWeather } from '../contexts/WeatherContext';
// // // import styles from '../Styles';

// // // // Dummy data and constants
// // // const weatherImages = { /* ... */ };

// // // // API functions
// // // const fetchLocations = async (search) => { /* ... */ };
// // // const fetchWeatherForecast = async (cityName, country) => { /* ... */ };

// // // export default function HomeScreen() {
// // //   const { setSelectedCity, setWeather } = useWeather();
// // //   const [showSearch, toggleSearch] = useState(false);
// // //   const [locations, setLocations] = useState([]);
// // //   const [loading, setLoading] = useState(false);
// // //   const navigation = useNavigation();

// // //   const handleSearch = async (search) => { /* ... */ };

// // //   const handleLocation = async (loc) => {
// // //     setLoading(true);
// // //     toggleSearch(false);
// // //     setLocations([]);
// // //     const data = await fetchWeatherForecast(loc.name, loc.country);
// // //     setSelectedCity(loc);
// // //     setWeather(data);
// // //     setLoading(false);
// // //     navigation.navigate('Details'); // Navigate to Details screen
// // //   };

// // //   useEffect(() => { /* ... */ }, []);

// // //   const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

// // //   return (
// // //     <View style={styles.container}>
// // //       {/* Rest of the code */}
// // //     </View>
// // //   );
// // // }
// // // // screens/HomeScreen.js



// // // // import React, { useState, useCallback, useEffect } from 'react';
// // // // import {
// // // //   View,
// // // //   Text,
// // // //   Image,
// // // //   TextInput,
// // // //   TouchableOpacity,
// // // //   ScrollView,
// // // //   ActivityIndicator,
// // // //   SafeAreaView,
// // // // } from 'react-native';
// // // // import { debounce } from 'lodash';
// // // // import { StatusBar } from 'expo-status-bar';
// // // // import styles from '../Styles';

// // // // // Dummy data and constants
// // // // const weatherImages = {
// // // //   'clear': require('../assets/images/sun.png'),
// // // //   'rain': require('../assets/images/moderaterain.png'),
// // // //   'cloudy': require('../assets/images/cloud.png'),
// // // //   'snow': require('../assets/images/mist.png'),
// // // //   'other': require('../assets/images/moderaterain.png'),
// // // // };

// // // // // API functions
// // // // const fetchLocations = async (search) => {
// // // //   const apiKey = 'a0613fef199440178d5174211241308'; // Replace with your actual API key
// // // //   const url = `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${encodeURIComponent(search)}`;

// // // //   try {
// // // //     const response = await fetch(url);
// // // //     if (!response.ok) {
// // // //       throw new Error(`HTTP error! Status: ${response.status}`);
// // // //     }
// // // //     const data = await response.json();
// // // //     return data.map(loc => ({ name: loc.name, country: loc.country, url: loc.url }));
// // // //   } catch (error) {
// // // //     console.error('Error fetching locations:', error);
// // // //     return [];
// // // //   }
// // // // };

// // // // const fetchWeatherForecast = async (cityName, country) => {
// // // //   // Simulate fetching weather forecast
// // // //   return {
// // // //     location: { name: cityName, country: country },
// // // //     current: { temp_c: 23, condition: { text: 'Clear', icon: 'clear' }, wind_kph: 10, humidity: 75 },
// // // //     forecast: {
// // // //       forecastday: [
// // // //         {
// // // //           date: '2024-08-14',
// // // //           day: { avgtemp_c: 24, condition: { text: 'Clear' } },
// // // //           astro: { sunrise: '06:00 AM' },
// // // //         },
// // // //       ],
// // // //     },
// // // //   };
// // // // };

// // // // export default function App() {
// // // //   const [showSearch, toggleSearch] = useState(false);
// // // //   const [locations, setLocations] = useState([]);
// // // //   const [loading, setLoading] = useState(false);
// // // //   const [weather, setWeather] = useState({});

// // // //   const handleSearch = async (search) => {
// // // //     if (search.length > 2) {
// // // //       const data = await fetchLocations(search);
// // // //       setLocations(data);
// // // //     }
// // // //   };

// // // //   const handleLocation = async (loc) => {
// // // //     setLoading(true);
// // // //     toggleSearch(false);
// // // //     setLocations([]);
// // // //     const data = await fetchWeatherForecast(loc.name, loc.country);
// // // //     setWeather(data);
// // // //     setLoading(false);
// // // //   };

// // // //   useEffect(() => {
// // // //     const fetchInitialData = async () => {
// // // //       const data = await fetchWeatherForecast('Bangalore','India'); // Default city
// // // //       setWeather(data);
// // // //     };
// // // //     fetchInitialData();
// // // //   }, []);

// // // //   const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

// // // //   const { location, current } = weather;

// // // //   return (
// // // //     <View style={styles.container}>
// // // //       <StatusBar style="dark" />
// // // //       <Image
// // // //         source={require('../assets/images/bg.png')} // Ensure correct image path
// // // //         style={styles.backgroundImage}
// // // //         blurRadius={70}
// // // //       />
// // // //       {loading ? (
// // // //         <View style={styles.loadingContainer}>
// // // //           <ActivityIndicator size="large" color="#0bb3b2" />
// // // //         </View>
// // // //       ) : (
// // // //         <View style={styles.safeAreaWrapper}>

// // // //         <SafeAreaView style={styles.safeArea}>
// // // //           {/* Search Section */}
// // // //           <View style={styles.searchContainer}>
// // // //             <View style={[styles.searchBox, { backgroundColor: showSearch ? 'rgba(255, 255, 255, 0.2)' : 'transparent' }]}>
// // // //               {showSearch && (
// // // //                 <TextInput
// // // //                   onChangeText={handleTextDebounce}
// // // //                   placeholder="Search city"
// // // //                   placeholderTextColor="lightgray"
// // // //                   style={styles.searchInput}
// // // //                 />
// // // //               )}
// // // //               <TouchableOpacity
// // // //                 onPress={() => toggleSearch(!showSearch)}
// // // //                 style={styles.searchButton}
// // // //               >
// // // //                 {showSearch ? (
// // // //                   <Text style={styles.icon}>X</Text>
// // // //                 ) : (
// // // //                   <Text style={styles.icon}>🔍</Text>
// // // //                 )}
// // // //               </TouchableOpacity>
// // // //             </View>
// // // //             {locations.length > 0 && showSearch && (
// // // //               <View style={styles.locationsList}>
// // // //                 {locations.map((loc, index) => (
// // // //                   <TouchableOpacity
// // // //                     key={index}
// // // //                     onPress={() => handleLocation(loc)}
// // // //                     style={[styles.locationItem, index + 1 !== locations.length && styles.locationItemBorder]}
// // // //                   >
// // // //                     <Text style={styles.locationText}>{loc.name}, {loc.country}</Text>
// // // //                   </TouchableOpacity>
// // // //                 ))}
// // // //               </View>
// // // //             )}
// // // //           </View>

// // // //           {/* Weather Forecast */}
// // // //           <View style={styles.weatherContainer}>
// // // //             {/* Location */}
// // // //             <Text style={styles.locationText}>
// // // //               {location?.name},
// // // //               <Text style={styles.countryText}> {location?.country}</Text>
// // // //             </Text>
// // // //             {/* Weather Icon */}
// // // //             <View style={styles.weatherIconContainer}>
// // // //               <Image
// // // //                 source={weatherImages[current?.condition?.text.toLowerCase() || 'other']}
// // // //                 style={styles.weatherIcon}
// // // //               />
// // // //             </View>
// // // //             {/* Temperature */}
// // // //             <View style={styles.temperatureContainer}>
// // // //               <Text style={styles.temperatureText}>{current?.temp_c}°</Text>
// // // //               <Text style={styles.conditionText}>{current?.condition?.text}</Text>
// // // //             </View>

// // // //             {/* Other Stats */}
// // // //             <View style={styles.statsContainer}>
// // // //               <View style={styles.statItem}>
// // // //                 <Image
// // // //                   source={require("../assets/icons/wind.png")}
// // // //                   style={styles.statIcon}
// // // //                 />
// // // //                 <Text style={styles.statText}>{current?.wind_kph} km/h</Text>
// // // //               </View>
// // // //               <View style={styles.statItem}>
// // // //                 <Image
// // // //                   source={require("../assets/icons/drop.png")}
// // // //                   style={styles.statIcon}
// // // //                 />
// // // //                 <Text style={styles.statText}>{current?.humidity}%</Text>
// // // //               </View>
// // // //               <View style={styles.statItem}>
// // // //                 <Image
// // // //                   source={require("../assets/icons/sun.png")}
// // // //                   style={styles.statIcon}
// // // //                 />
// // // //                 <Text style={styles.statText}>{weather?.forecast?.forecastday[0]?.astro?.sunrise}</Text>
// // // //               </View>
// // // //             </View>
// // // //           </View>

// // // //           {/* Forecast for Next Days */}
// // // //           <View style={styles.forecastContainer}>
// // // //             <View style={styles.forecastHeader}>
// // // //               <Text style={styles.forecastHeaderText}>Daily forecast</Text>
// // // //             </View>
// // // //             <ScrollView
// // // //               horizontal
// // // //               contentContainerStyle={styles.forecastScroll}
// // // //               showsHorizontalScrollIndicator={false}
// // // //             >
// // // //               {weather?.forecast?.forecastday?.map((item, index) => {
// // // //                 const date = new Date(item.date);
// // // //                 const options = { weekday: 'long' };
// // // //                 let dayName = date.toLocaleDateString('en-US', options);
// // // //                 dayName = dayName.split(',')[0];

// // // //                 return (
// // // //                   <View
// // // //                     key={index}
// // // //                     style={styles.forecastItem}
// // // //                   >
// // // //                     <Image
// // // //                       source={weatherImages[item?.day?.condition?.text.toLowerCase() || 'other']}
// // // //                       style={styles.forecastIcon}
// // // //                     />
// // // //                     <Text style={styles.forecastDay}>{dayName}</Text>
// // // //                     <Text style={styles.forecastTemp}>{item?.day?.avgtemp_c}°</Text>
// // // //                   </View>
// // // //                 );
// // // //               })}
// // // //             </ScrollView>
// // // //           </View>
// // // //         </SafeAreaView>
// // // //         </View>
// // // //       )}
// // // //     </View>
// // // //   );
// // // // }


// import React, { useCallback, useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { MagnifyingGlassIcon, XMarkIcon } from "react-native-heroicons/outline";
// import { CalendarDaysIcon, MapPinIcon } from "react-native-heroicons/solid";
// import { debounce } from "lodash";
// import { theme } from "../theme";
// import { fetchLocations, fetchWeatherForecast } from "../api/weather";
// import * as Progress from "react-native-progress";
// import { StatusBar } from "expo-status-bar";
// import { weatherImages } from "../constants";
// import { getData, storeData } from "../utils/asyncStorage";

// export default function HomeScreen() {
//   const [showSearch, toggleSearch] = useState(false);
//   const [locations, setLocations] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [weather, setWeather] = useState({});

//   const handleSearch = (search) => {
//     if (search && search.length > 2)
//       fetchLocations({ cityName: search }).then((data) => {
//         setLocations(data);
//       });
//   };

//   const handleLocation = (loc) => {
//     setLoading(true);
//     toggleSearch(false);
//     setLocations([]);
//     fetchWeatherForecast({
//       cityName: loc.name,
//       days: "7",
//     }).then((data) => {
//       setLoading(false);
//       setWeather(data);
//       storeData("city", loc.name);
//     });
//   };

//   useEffect(() => {
//     fetchMyWeatherData();
//   }, []);

//   const fetchMyWeatherData = async () => {
//     let myCity = await getData("city");
//     let cityName = "Hassan";
//     if (myCity) {
//       cityName = myCity;
//     }
//     fetchWeatherForecast({
//       cityName,
//       days: "7",
//     }).then((data) => {
//       setWeather(data);
//       setLoading(false);
//     });
//   };

//   const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

//   const { location, current } = weather;

//   return (
//     <View style={styles.container}>
//       <StatusBar style="light" />
//       <Image
//         blurRadius={70}
//         source={require("../assets/images/bg.png")}
//         style={styles.backgroundImage}
//       />
//       {loading ? (
//         <View style={styles.loadingContainer}>
//           <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
//         </View>
//       ) : (
//         <SafeAreaView style={styles.safeAreaWrapper}>
//           {/* search section */}
//           <View style={styles.searchContainer}>
//             <View
//               style={[
//                 styles.searchBox,
//                 {
//                   backgroundColor: showSearch
//                     ? theme.bgWhite(0.2)
//                     : "transparent",
//                 },
//               ]}
//             >
//               {showSearch ? (
//                 <TextInput
//                   onChangeText={handleTextDebounce}
//                   placeholder="Search city"
//                   placeholderTextColor={"lightgray"}
//                   style={styles.searchInput}
//                 />
//               ) : null}
//               <TouchableOpacity
//                 onPress={() => toggleSearch(!showSearch)}
//                 style={styles.searchButton}
//               >
//                 {showSearch ? (
//                   <XMarkIcon style={styles.icon} />
//                 ) : (
//                   <MagnifyingGlassIcon style={styles.icon} />
//                 )}
//               </TouchableOpacity>
//             </View>
//             {locations.length > 0 && showSearch ? (
//               <View style={styles.locationsList}>
//                 {locations.map((loc, index) => {
//                   let showBorder = index + 1 != locations.length;
//                   return (
//                     <TouchableOpacity
//                       key={index}
//                       onPress={() => handleLocation(loc)}
//                       style={[
//                         styles.locationItem,
//                         showBorder && styles.locationItemBorder,
//                       ]}
//                     >
//                       <MapPinIcon style={styles.icon} />
//                       <Text style={styles.locationText}>
//                         {loc?.name}, {loc?.country}
//                       </Text>
//                     </TouchableOpacity>
//                   );
//                 })}
//               </View>
//             ) : null}
//           </View>

//           {/* forecast section */}
//           <View style={styles.weatherContainer}>
//             {/* location */}
//             <Text style={styles.locationText}>
//               {location?.name},
//               <Text style={styles.countryText}>
//                 {location?.country}
//               </Text>
//             </Text>
//             {/* weather icon */}
//             <View style={styles.weatherIconContainer}>
//               <Image
//                 source={weatherImages[current?.condition?.text || "other"]}
//                 style={styles.weatherIcon}
//               />
//             </View>
//             {/* degree Celsius */}
//             <View style={styles.temperatureContainer}>
//               <Text style={styles.temperatureText}>
//                 {current?.temp_c}&#176;
//               </Text>
//               <Text style={styles.conditionText}>
//                 {current?.condition?.text}
//               </Text>
//             </View>

//             {/* other stats */}
//             <View style={styles.statsContainer}>
//               <View style={styles.statItem}>
//                 <Image
//                   source={require("../assets/icons/wind.png")}
//                   style={styles.statIcon}
//                 />
//                 <Text style={styles.statText}>
//                   {current?.wind_kph}km
//                 </Text>
//               </View>
//               <View style={styles.statItem}>
//                 <Image
//                   source={require("../assets/icons/drop.png")}
//                   style={styles.statIcon}
//                 />
//                 <Text style={styles.statText}>
//                   {current?.humidity}%
//                 </Text>
//               </View>
//               <View style={styles.statItem}>
//                 <Image
//                   source={require("../assets/icons/sun.png")}
//                   style={styles.statIcon}
//                 />
//                 <Text style={styles.statText}>
//                   {weather?.forecast?.forecastday[0]?.astro?.sunrise}
//                 </Text>
//               </View>
//             </View>
//           </View>

//           {/* forecast for next days */}
//           <View style={styles.forecastContainer}>
//             <View style={styles.forecastHeader}>
//               <CalendarDaysIcon style={styles.icon} />
//               <Text style={styles.forecastHeaderText}>
//                 Daily forecast
//               </Text>
//             </View>
//             <ScrollView
//               horizontal
//               contentContainerStyle={styles.forecastScroll}
//               showsHorizontalScrollIndicator={false}
//             >
//               {weather?.forecast?.forecastday?.map((item, index) => {
//                 const date = new Date(item.date);
//                 const options = { weekday: "long" };
//                 let dayName = date.toLocaleDateString("en-US", options);
//                 dayName = dayName.split(",")[0];

//                 return (
//                   <View
//                     key={index}
//                     style={styles.forecastItem}
//                   >
//                     <Image
//                       source={weatherImages[item?.day?.condition?.text || "other"]}
//                       style={styles.forecastIcon}
//                     />
//                     <Text style={styles.forecastDay}>{dayName}</Text>
//                     <Text style={styles.forecastTemp}>
//                       {item?.day?.avgtemp_c}&#176;
//                     </Text>
//                   </View>
//                 );
//               })}
//             </ScrollView>
//           </View>
//         </SafeAreaView>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative',
//   },
//   backgroundImage: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   safeAreaWrapper: {
//     flex: 1,
//     paddingTop: 80, // Adjust padding as needed
//   },
//   searchContainer: {
//     height: '7%',
//     marginHorizontal: 16,
//     position: 'relative',
//     zIndex: 50,
//   },
//   searchBox: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 50,
//     paddingHorizontal: 8,
//     paddingVertical: 6,
//   },
//   searchInput: {
//     flex: 1,
//     height: 40,
//     paddingLeft: 24,
//     fontSize: 16,
//     color: 'white',
//   },
//   searchButton: {
//     borderRadius: 50,
//     padding: 4,
//     marginLeft: 'auto',
//     backgroundColor: 'rgba(255, 255, 255, 0.3)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon: {
//     fontSize: 25,
//     color: 'white',
//   },
//   locationsList: {
//     position: 'absolute',
//     width: '100%',
//     backgroundColor: '#f0f0f0',
//     top: 60,
//     borderRadius: 16,
//     elevation: 4,
//   },
//   locationItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 12,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   locationItemBorder: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   locationText: {
//     fontSize: 18,
//     color: 'black',
//     marginLeft: 8,
//   },
//   weatherContainer: {
//     flex: 1,
//     marginHorizontal: 16,
//     justifyContent: 'space-around',
//     marginBottom: 16,
//   },
//   locationText: {
//     fontSize: 24,
//     color: 'white',
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   countryText: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: 'gray',
//   },
//   weatherIconContainer: {
//     alignItems: 'center',
//   },
//   weatherIcon: {
//     width: 104,
//     height: 104,
//   },
//   temperatureContainer: {
//     alignItems: 'center',
//     marginTop: 16,
//   },
//   temperatureText: {
//     fontSize: 48,
//     color: 'white',
//     fontWeight: 'bold',
//   },
//   conditionText: {
//     fontSize: 20,
//     color: 'white',
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: 16,
//   },
//   statItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   statIcon: {
//     width: 24,
//     height: 24,
//   },
//   statText: {
//     fontSize: 16,
//     color: 'white',
//     marginLeft: 4,
//   },
//   forecastContainer: {
//     marginBottom: 16,
//     marginHorizontal: 16,
//   },
//   forecastHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 8,
//   },
//   forecastHeaderText: {
//     fontSize: 18,
//     color: 'white',
//     marginLeft: 8,
//   },
//   forecastScroll: {
//     paddingHorizontal: 15,
//   },
//   forecastItem: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: 96,
//     borderRadius: 24,
//     paddingVertical: 12,
//     marginRight: 16,
//     backgroundColor: 'rgba(255, 255, 255, 0.15)',
//   },
//   forecastIcon: {
//     width: 44,
//     height: 44,
//   },
//   forecastDay: {
//     fontSize: 16,
//     color: 'white',
//   },
//   forecastTemp: {
//     fontSize: 20,
//     color: 'white',
//     fontWeight: '600',
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
//   },
//   searchModalContainer: {
//     width: '90%',
//     backgroundColor: 'white',
//     borderRadius: 16,
//     padding: 16,
//     elevation: 4,
//   },
// });

// HomeScreen.js
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MagnifyingGlassIcon, XMarkIcon } from 'react-native-heroicons/outline';
import { CalendarDaysIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { debounce } from 'lodash';
import { theme } from '../theme';
import { fetchLocations, fetchWeatherForecast } from '../api/weather';
import * as Progress from 'react-native-progress';
import { StatusBar } from 'expo-status-bar';
import { weatherImages } from '../constants';
import { getData, storeData } from '../utils/asyncStorage';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

export default function HomeScreen() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [weather, setWeather] = useState({});
  const navigation = useNavigation(); // Initialize useNavigation hook

  const handleSearch = (search) => {
    if (search && search.length > 2)
      fetchLocations({ cityName: search }).then((data) => {
        setLocations(data);
      });
  };

  const handleLocation = (loc) => {
    setLoading(true);
    toggleSearch(false);
    setLocations([]);
    fetchWeatherForecast({
      cityName: loc.name,
      days: '7',
    }).then((data) => {
      setLoading(false);
      // setWeather(data);
      // storeData('city', loc.name);
      navigation.navigate('WeatherDetail', { weather: data }); // Navigate to WeatherDetailScreen
    });
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  const fetchMyWeatherData = async () => {
    let myCity = await getData('city');
    let cityName = 'Bangalore';
    if (myCity) {
      cityName = myCity;
    }
    fetchWeatherForecast({
      cityName,
      days: '7',
    }).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  const { location, current } = weather;

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require('../assets/images/bg.jpg')}
        style={styles.backgroundImage}
      />
      {loading ? (
        <View style={styles.loadingContainer}>
          <Progress.CircleSnail thickness={10} size={140} color="#0bb3b2" />
        </View>
      ) : (
        <SafeAreaView style={styles.safeAreaWrapper}>
          {/* search section */}
          <View style={styles.searchContainer}>
            <View
              style={[
                styles.searchBox,
                {
                  backgroundColor: showSearch
                    ? theme.bgWhite(0.2)
                    : 'transparent',
                },
              ]}
            >
              {showSearch ? (
                <TextInput
                  onChangeText={handleTextDebounce}
                  placeholder="Search city"
                  placeholderTextColor={'lightgray'}
                  style={styles.searchInput}
                />
              ) : null}
              <TouchableOpacity
                onPress={() => toggleSearch(!showSearch)}
                style={styles.searchButton}
              >
                {showSearch ? (
                  <XMarkIcon style={styles.icon} />
                ) : (
                  <MagnifyingGlassIcon style={styles.icon} />
                )}
              </TouchableOpacity>
            </View>
            {locations.length > 0 && showSearch ? (
              <View style={styles.locationsList}>
                {locations.map((loc, index) => {
                  let showBorder = index + 1 !== locations.length;
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={() => handleLocation(loc)}
                      style={[
                        styles.locationItem,
                        showBorder && styles.locationItemBorder,
                      ]}
                    >
                      <MapPinIcon style={styles.icon} />
                      <Text style={styles.locationText}>
                        {loc?.name}, {loc?.country}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            ) : null}
          </View>

          {/* forecast section */}
          <View style={styles.weatherContainer}>
            {/* location */}
            <Text style={styles.locationText}>
              {location?.name},
              <Text style={styles.countryText}>
                {location?.country}
              </Text>
            </Text>
            {/* weather icon */}
            <View style={styles.weatherIconContainer}>
              <Image
                source={weatherImages[current?.condition?.text || "other"]}
                style={styles.weatherIcon}
              />
            </View>
            {/* degree Celsius */}
            <View style={styles.temperatureContainer}>
              <Text style={styles.temperatureText}>
                {current?.temp_c}&#176;
              </Text>
              <Text style={styles.conditionText}>
                {current?.condition?.text}
              </Text>
            </View>

            {/* other stats */}
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Image
                  source={require('../assets/icons/wind.png')}
                  style={styles.statIcon}
                />
                <Text style={styles.statText}>
                  {current?.wind_kph}km
                </Text>
              </View>
              <View style={styles.statItem}>
                <Image
                  source={require('../assets/icons/drop.png')}
                  style={styles.statIcon}
                />
                <Text style={styles.statText}>
                  {current?.humidity}%
                </Text>
              </View>
              <View style={styles.statItem}>
                <Image
                  source={require('../assets/icons/sun.png')}
                  style={styles.statIcon}
                />
                <Text style={styles.statText}>
                  {weather?.forecast?.forecastday[0]?.astro?.sunrise}
                </Text>
              </View>
            </View>
          </View>

          {/* forecast for next days */}
          <View style={styles.forecastContainer}>
            <View style={styles.forecastHeader}>
              <CalendarDaysIcon style={styles.icon} />
              <Text style={styles.forecastHeaderText}>
                Daily forecast
              </Text>
            </View>
            <ScrollView
              horizontal
              contentContainerStyle={styles.forecastScroll}
              showsHorizontalScrollIndicator={false}
            >
              {weather?.forecast?.forecastday?.map((item, index) => {
                const date = new Date(item.date);
                const options = { weekday: 'long' };
                let dayName = date.toLocaleDateString('en-US', options);
                dayName = dayName.split(',')[0];

                return (
                  <View
                    key={index}
                    style={styles.forecastItem}
                  >
                    <Image
                      source={weatherImages[item?.day?.condition?.text || 'other']}
                      style={styles.forecastIcon}
                    />
                    <Text style={styles.forecastDay}>{dayName}</Text>
                    <Text style={styles.forecastTemp}>
                      {item?.day?.avgtemp_c}&#176;
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </SafeAreaView>
      )}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  safeAreaWrapper: {
    flex: 1,
    paddingTop: 50, // Adjust padding as needed
  },
  searchContainer: {
    height: '7%',
    marginHorizontal: 16,
    position: 'relative',
    zIndex: 50,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  searchInput: {
    flex: 1,
    height: 40,
    paddingLeft: 24,
    fontSize: 16,
    color: 'white',
  },
  searchButton: {
    borderRadius: 50,
    padding: 4,
    marginLeft: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 25,
    color: 'white',
  },
  locationsList: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#f0f0f0',
    top: 60,
    borderRadius: 16,
    elevation: 4,
  },
  locationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  locationItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  locationText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  weatherContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
    paddingVertical: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 16,
    elevation: 4,
  },
  locationText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
  },
  countryText: {
    fontSize: 20,
    color: 'grey',
  },
  weatherIconContainer: {
    marginTop: 10,
  },
  weatherIcon: {
    width: 80,
    height: 80,
  },
  temperatureContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  temperatureText: {
    fontSize: 60,
    color: 'white',
  },
  conditionText: {
    fontSize: 22,
    color: 'white',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  statText: {
    fontSize: 16,
    color: 'white',
  },
  forecastContainer: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  forecastHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  forecastHeaderText: {
    fontSize: 22,
    color: 'white',
    marginLeft: 10,
  },
  forecastScroll: {
    paddingVertical: 10,
  },
  forecastItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  forecastIcon: {
    width: 50,
    height: 50,
  },
  forecastDay: {
    fontSize: 16,
    color: 'white',
  },
  forecastTemp: {
    fontSize: 18,
    color: 'white',
  },
});
