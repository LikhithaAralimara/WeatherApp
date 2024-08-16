// import { StyleSheet } from 'react-native';

// const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
//     // position: 'relative',
// //   },
// container: {
//     flex: 1,
//     position: 'relative',

//     // backgroundColor: '#f5f5f5',
//     // paddingTop: 20, // Add padding at the top of the screen
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
//     paddingTop: 80, // Add padding at the top
//   },
//   safeArea: {
//     flex: 1,

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
// });

// export default styles;

import { StyleSheet } from 'react-native';

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
    paddingTop: 80, // Adjust padding as needed
  },
  safeArea: {
    flex: 1,
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
//   locationText: {
//     fontSize: 18,
//     color: 'black',
//     marginLeft: 8,
//   },
  weatherContainer: {
    flex: 1,
    marginHorizontal: 16,
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  locationText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  countryText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'gray',
  },
  weatherIconContainer: {
    alignItems: 'center',
  },
  weatherIcon: {
    width: 104,
    height: 104,
  },
  temperatureContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  temperatureText: {
    fontSize: 48,
    color: 'white',
    fontWeight: 'bold',
  },
  conditionText: {
    fontSize: 20,
    color: 'white',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statIcon: {
    width: 24,
    height: 24,
  },
  statText: {
    fontSize: 16,
    color: 'white',
    marginLeft: 4,
  },
  forecastContainer: {
    marginBottom: 16,
    marginHorizontal: 16,
  },
  forecastHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  forecastHeaderText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 8,
  },
  forecastScroll: {
    paddingHorizontal: 15,
  },
  forecastItem: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 96,
    borderRadius: 24,
    paddingVertical: 12,
    marginRight: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  forecastIcon: {
    width: 44,
    height: 44,
  },
  forecastDay: {
    fontSize: 16,
    color: 'white',
  },
  forecastTemp: {
    fontSize: 20,
    color: 'white',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
  },
  searchModalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    elevation: 4,
  },
});

export default styles;
