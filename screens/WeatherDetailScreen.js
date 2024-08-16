// // // WeatherDetailScreen.js
// // import React from 'react';
// // import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
// // import { weatherImages } from '../constants'; // Update the path as needed
// // // import {styles} from '../Styles';

// // const WeatherDetailScreen = ({ route }) => {
// //   const { weather } = route.params;

// //   const { location, current } = weather;

// //   return (
// //     <View style={styles.container}>
// //       <Image
// //         blurRadius={70}
// //         source={require("../assets/images/bg.png")}
// //         style={styles.backgroundImage}
// //       />
// //       <View style={styles.weatherContainer}>
// //         {/* location */}
// //         <Text style={styles.locationText}>
// //           {location?.name},
// //           <Text style={styles.countryText}>
// //             {location?.country}
// //           </Text>
// //         </Text>
// //         {/* weather icon */}
// //         <View style={styles.weatherIconContainer}>
// //           <Image
// //             source={weatherImages[current?.condition?.text || "other"]}
// //             style={styles.weatherIcon}
// //           />
// //         </View>
// //         {/* degree Celsius */}
// //         <View style={styles.temperatureContainer}>
// //           <Text style={styles.temperatureText}>
// //             {current?.temp_c}&#176;
// //           </Text>
// //           <Text style={styles.conditionText}>
// //             {current?.condition?.text}
// //           </Text>
// //         </View>

// //         {/* other stats */}
// //         <View style={styles.statsContainer}>
// //           <View style={styles.statItem}>
// //             <Image
// //               source={require("../assets/icons/wind.png")}
// //               style={styles.statIcon}
// //             />
// //             <Text style={styles.statText}>
// //               {current?.wind_kph}km
// //             </Text>
// //           </View>
// //           <View style={styles.statItem}>
// //             <Image
// //               source={require("../assets/icons/drop.png")}
// //               style={styles.statIcon}
// //             />
// //             <Text style={styles.statText}>
// //               {current?.humidity}%
// //             </Text>
// //           </View>
// //           <View style={styles.statItem}>
// //             <Image
// //               source={require("../assets/icons/sun.png")}
// //               style={styles.statIcon}
// //             />
// //             <Text style={styles.statText}>
// //               {weather?.forecast?.forecastday[0]?.astro?.sunrise}
// //             </Text>
// //           </View>
// //         </View>
// //       </View>

// //       {/* forecast for next days */}
// //       <View style={styles.forecastContainer}>
// //         <ScrollView
// //           horizontal
// //           contentContainerStyle={styles.forecastScroll}
// //           showsHorizontalScrollIndicator={false}
// //         >
// //           {weather?.forecast?.forecastday?.map((item, index) => {
// //             const date = new Date(item.date);
// //             const options = { weekday: "long" };
// //             let dayName = date.toLocaleDateString("en-US", options);
// //             dayName = dayName.split(",")[0];

// //             return (
// //               <View
// //                 key={index}
// //                 style={styles.forecastItem}
// //               >
// //                 <Image
// //                   source={weatherImages[item?.day?.condition?.text || "other"]}
// //                   style={styles.forecastIcon}
// //                 />
// //                 <Text style={styles.forecastDay}>{dayName}</Text>
// //                 <Text style={styles.forecastTemp}>
// //                   {item?.day?.avgtemp_c}&#176;
// //                 </Text>
// //               </View>
// //             );
// //           })}
// //         </ScrollView>
// //       </View>
// //     </View>
// //   );
// // };


// // export default WeatherDetailScreen;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     position: 'relative',
// //   },
// //   backgroundImage: {
// //     width: '100%',
// //     height: '100%',
// //     position: 'absolute',
// //   },
// //   weatherContainer: {
// //     alignItems: 'center',
// //     marginHorizontal: 16,
// //     marginTop: 16,
// //     paddingVertical: 16,
// //     backgroundColor: 'rgba(255, 255, 255, 0.3)',
// //     borderRadius: 16,
// //     elevation: 4,
// //   },
// //   locationText: {
// //     fontSize: 24,
// //     color: 'white',
// //     textAlign: 'center',
// //   },
// //   countryText: {
// //     fontSize: 20,
// //     color: '#ccc',
// //   },
// //   weatherIconContainer: {
// //     marginTop: 10,
// //   },
// //   weatherIcon: {
// //     width: 80,
// //     height: 80,
// //   },
// //   temperatureContainer: {
// //     alignItems: 'center',
// //     marginVertical: 10,
// //   },
// //   temperatureText: {
// //     fontSize: 60,
// //     color: 'white',
// //   },
// //   conditionText: {
// //     fontSize: 22,
// //     color: 'white',
// //   },
// //   statsContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     width: '100%',
// //     paddingHorizontal: 16,
// //     marginTop: 10,
// //   },
// //   statItem: {
// //     flexDirection: 'row',
// //     alignItems: 'center',
// //   },
// //   statIcon: {
// //     width: 20,
// //     height: 20,
// //     marginRight: 5,
// //   },
// //   statText: {
// //     fontSize: 16,
// //     color: 'white',
// //   },
// //   forecastContainer: {
// //     marginTop: 20,
// //     paddingHorizontal: 16,
// //   },
// //   forecastScroll: {
// //     paddingVertical: 10,
// //   },
// //   forecastItem: {
// //     alignItems: 'center',
// //     marginRight: 15,
// //   },
// //   forecastIcon: {
// //     width: 50,
// //     height: 50,
// //   },
// //   forecastDay: {
// //     fontSize: 16,
// //     color: 'white',
// //   },
// //   forecastTemp: {
// //     fontSize: 18,
// //     color: 'white',
// //   },
// // });


// import React from 'react';
// import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
// import { weatherImages } from '../constants'; // Update the path as needed

// const WeatherDetailScreen = ({ route }) => {
//   const { weather } = route.params;

//   const { location, current } = weather;

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.contentContainer}>
//         <Image
//           blurRadius={70}
//           source={require("../assets/images/bg.png")}
//           style={styles.backgroundImage}
//         />
//         <View style={styles.weatherContainer}>
//           {/* location */}
//           <Text style={styles.locationText}>
//             {location?.name},
//             <Text style={styles.countryText}>
//               {location?.country}
//             </Text>
//           </Text>
//           {/* weather icon */}
//           <View style={styles.weatherIconContainer}>
//             <Image
//               source={weatherImages[current?.condition?.text || "other"]}
//               style={styles.weatherIcon}
//             />
//           </View>
//           {/* degree Celsius */}
//           <View style={styles.temperatureContainer}>
//             <Text style={styles.temperatureText}>
//               {current?.temp_c}&#176;
//             </Text>
//             <Text style={styles.conditionText}>
//               {current?.condition?.text}
//             </Text>
//           </View>

//           {/* other stats */}
//           <View style={styles.statsContainer}>
//             <View style={styles.statItem}>
//               <Image
//                 source={require("../assets/icons/wind.png")}
//                 style={styles.statIcon}
//               />
//               <Text style={styles.statText}>
//                 {current?.wind_kph}km
//               </Text>
//             </View>
//             <View style={styles.statItem}>
//               <Image
//                 source={require("../assets/icons/drop.png")}
//                 style={styles.statIcon}
//               />
//               <Text style={styles.statText}>
//                 {current?.humidity}%
//               </Text>
//             </View>
//             <View style={styles.statItem}>
//               <Image
//                 source={require("../assets/icons/sun.png")}
//                 style={styles.statIcon}
//               />
//               <Text style={styles.statText}>
//                 {weather?.forecast?.forecastday[0]?.astro?.sunrise}
//               </Text>
//             </View>
//           </View>
//         </View>

//         {/* forecast for next days */}
//         <View style={styles.forecastContainer}>
//           <ScrollView
//             horizontal
//             contentContainerStyle={styles.forecastScroll}
//             showsHorizontalScrollIndicator={false}
//           >
//             {weather?.forecast?.forecastday?.map((item, index) => {
//               const date = new Date(item.date);
//               const options = { weekday: "long" };
//               let dayName = date.toLocaleDateString("en-US", options);
//               dayName = dayName.split(",")[0];

//               return (
//                 <View
//                   key={index}
//                   style={styles.forecastItem}
//                 >
//                   <Image
//                     source={weatherImages[item?.day?.condition?.text || "other"]}
//                     style={styles.forecastIcon}
//                   />
//                   <Text style={styles.forecastDay}>{dayName}</Text>
//                   <Text style={styles.forecastTemp}>
//                     {item?.day?.avgtemp_c}&#176;
//                   </Text>
//                 </View>
//               );
//             })}
//           </ScrollView>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default WeatherDetailScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     position: 'relative',
//     // paddingTop:100
//   },
//   contentContainer: {
//     flex: 1,
//     position: 'relative',
//       // paddingTop:100
//   },
//   backgroundImage: {
//     width: '100%',
//     height: '100%',
//     position: 'absolute',
//   },
//   weatherContainer: {
//     alignItems: 'center',
//     marginHorizontal: 16,
//     marginTop: 180,
//     paddingVertical: 16,
//     backgroundColor: 'rgba(255, 255, 255, 0.3)',
//     borderRadius: 16,
//     elevation: 4,
//   },
//   locationText: {
//     fontSize: 24,
//     color: 'white',
//     textAlign: 'center',
//   },
//   countryText: {
//     fontSize: 20,
//     color: '#ccc',
//   },
//   weatherIconContainer: {
//     marginTop: 10,
//   },
//   weatherIcon: {
//     width: 80,
//     height: 80,
//   },
//   temperatureContainer: {
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   temperatureText: {
//     fontSize: 60,
//     color: 'white',
//   },
//   conditionText: {
//     fontSize: 22,
//     color: 'white',
//   },
//   statsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     paddingHorizontal: 16,
//     marginTop: 10,
//   },
//   statItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   statIcon: {
//     width: 20,
//     height: 20,
//     marginRight: 5,
//   },
//   statText: {
//     fontSize: 16,
//     color: 'white',
//   },
//   forecastContainer: {
//     marginTop: 20,
//     paddingHorizontal: 16,
//   },
//   forecastScroll: {
//     paddingVertical: 10,
//   },
//   forecastItem: {
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   forecastIcon: {
//     width: 50,
//     height: 50,
//   },
//   forecastDay: {
//     fontSize: 16,
//     color: 'white',
//   },
//   forecastTemp: {
//     fontSize: 18,
//     color: 'white',
//   },
// });
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { weatherImages } from '../constants'; // Update the path as needed
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo icons

const WeatherDetailScreen = ({ route, navigation }) => {
  const { weather } = route.params;
  const { location, current } = weather;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          blurRadius={70}
          source={require("../assets/images/bg.png")}
          style={styles.backgroundImage}
        />
        
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.backButton} 
          onPress={() => navigation.goBack()}
        >
          <MaterialIcons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        
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
                source={require("../assets/icons/wind.png")}
                style={styles.statIcon}
              />
              <Text style={styles.statText}>
                {current?.wind_kph}km
              </Text>
            </View>
            <View style={styles.statItem}>
              <Image
                source={require("../assets/icons/drop.png")}
                style={styles.statIcon}
              />
              <Text style={styles.statText}>
                {current?.humidity}%
              </Text>
            </View>
            <View style={styles.statItem}>
              <Image
                source={require("../assets/icons/sun.png")}
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
          <ScrollView
            horizontal
            contentContainerStyle={styles.forecastScroll}
            showsHorizontalScrollIndicator={false}
          >
            {weather?.forecast?.forecastday?.map((item, index) => {
              const date = new Date(item.date);
              const options = { weekday: "long" };
              let dayName = date.toLocaleDateString("en-US", options);
              dayName = dayName.split(",")[0];

              return (
                <View
                  key={index}
                  style={styles.forecastItem}
                >
                  <Image
                    source={weatherImages[item?.day?.condition?.text || "other"]}
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
      </View>
    </SafeAreaView>
  );
};

export default WeatherDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
    // paddingTop: 60, // Adjust this value to ensure padding for the back button
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  backButton: {
    position: 'absolute',
    top: 50, // Position the button from the top
    left: 10, // Position the button from the left
    padding: 10,
    zIndex: 1, // Ensure the button is above other components
  },
  weatherContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 150, // Adjust this value if needed
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
