// import React, { useState } from 'react';
// import { View, TextInput, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { LinearGradient } from 'expo-linear-gradient';
// import { Ionicons } from '@expo/vector-icons';
// import { useFonts } from 'expo-font';
// // import Swiper from 'react-native-swiper';
// // import { useNavigation } from '@react-navigation/native';
// // import Side from './Side';
// // import Profile from './Profile';
// // import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

// const Homepage = () => {
//   const [] = useFonts({

//   });
//   const [searchText, setSearchText] = useState('');
//   const [theme, setTheme] = useState('light');
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

//   const toggleProfileModal = () => {
//     setIsProfileModalOpen(!isProfileModalOpen);
//   };

//   const toggleTheme = () => {
//     setTheme(theme === 'light' ? 'dark' : 'light');
//   };

//   const containerStyle = theme === 'dark' ? styles.darkContainer : styles.lightContainer;
//   const textStyle = theme === 'dark' ? styles.darkText : styles.lightText;

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   const navigation = useNavigation();
  
//   const handleViewMore = () => {
//     navigation.navigate('Issuelist');
//   };

//   const handleTrackNearbyService = () => {
//     navigation.navigate('GoogleMapScreen');
//   };
//   return (
//     <View style={[styles.container, containerStyle]}>
//       <View style={styles.header}>
//         <View style={styles.sidebaricon}>
//           <TouchableOpacity onPress={toggleSidebar}>
//             <Ionicons name="ios-menu" size={32} color="#279EFF" />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.logoContainer}>
//           <View style={styles.logoShadow}>
//             <Image
//               style={styles.logo}
//               resizeMode="contain"
//             />
//           </View>
//         </View>
//         <View style={styles.profileicon}>
//           <TouchableOpacity onPress={toggleProfileModal}>
//             <Ionicons name="ios-person" size={24} color="#279EFF" />
//           </TouchableOpacity>
//         </View>
//         <Profile isVisible={isProfileModalOpen} onClose={toggleProfileModal} />
//       </View>
//       <View style={styles.content}>
//         <LinearGradient
//           colors={['#068FFF', '#0A1C5A']}
//           style={styles.searchBarGradient}
//         >
//           <TextInput
//             style={[styles.searchBarInput, textStyle, { fontSize: 16 }]}
//             placeholder="Search"
//             placeholderTextColor="white"
//             value={searchText}
//             onChangeText={setSearchText}
//             onFocus={() => setSearchText('')}
//           />
//         </LinearGradient>
//       </View>
//       <View style={styles.carouselContainer}>
//       <Swiper
//         style={[styles.carousel]}
//         showsButtons={false}
//         showsPagination={false}
//         loop={true}
//       >
//         <Image
          
//           style={styles.carouselImage}
//           resizeMode="cover"
//         />
//         <Image

//           style={styles.carouselImage}
//           resizeMode="cover"
//         />
//         <Image

//           style={styles.carouselImage}
//           resizeMode="cover"
//         />
//         {/* Add more images as needed */}
//       </Swiper>
//       </View>
//       <View style={styles.cardContainer}>
//         <Text style={styles.title}>EG SERVICES</Text>
//         <View style={styles.cardRow}>
//           <TouchableOpacity style={styles.card}>
//           <Image

//               style={styles.icon}
//               resizeMode='contain'
//             />
//           <View>
//             <Text style={styles.textStyle}>TyreFlatten</Text>
//           </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.card}>
//           <Image

//               style={styles.icon}
//               resizeMode='contain'
//             />
//           <View>
//             <Text style={styles.textStyle}>Engine Fail</Text>
//           </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.card}>
//           <Image

//               style={styles.icon}
//               resizeMode='contain'
//             />
//           <View>
//             <Text style={styles.textStyle}>No Fuel</Text>
//           </View>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.cardRow}>
//           <TouchableOpacity style={styles.card}>
//           <Image
//               style={styles.icon}
//               resizeMode='contain'
//             />
//           <View>
//             <Text style={styles.textStyle}>Brake Fail</Text>
//           </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.card}>
//           <Image
//               style={styles.icon}
//               resizeMode='contain'
//             />
//           <View>
//             <Text style={styles.textStyle}>Gearbox Fail</Text>
//           </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.card} onPress={handleViewMore}>
//           <Image
//               style={styles.icon}
//               resizeMode='contain'
//             />
//           <View>
//             <Text style={styles.textStyle}>View More</Text>
//           </View>
//           </TouchableOpacity>
//         </View>
//       <View style={styles.ButtonContainer}>
//         <View style={styles.ButtonRow}>
//           <TouchableOpacity style={styles.Button1} onPress={handleTrackNearbyService}>
//           <Image

//               style={styles.Buttonicon}
//               resizeMode='contain'
//             />
//           <View>
//             <Text style={styles.Buttontext}>Track Nearby Service</Text>
//           </View>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.Button2}>
//           <Image
//               style={styles.Buttonicon}
//               resizeMode='contain'
//             />
//           <View>
//             <Text style={styles.Buttontext}>Request for Help</Text>
//           </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//       </View>

//     </View>
     
//   );
// };
  
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F0F0',
//     height: responsiveScreenHeight(100),
//     width: responsiveScreenWidth(100),
//   },
//   darkTheme: {
//     backgroundColor: '#404258',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingTop: responsiveScreenHeight(1),
//     height: responsiveScreenHeight(8),
//     justifyContent: 'center',
//     backgroundColor:'#282A3A',
//   },
//   sidebaricon:{
//     marginRight: responsiveScreenWidth(25)
//   }, 
//   profileicon:{
//     marginLeft: responsiveScreenWidth(29),
//   },
//   logoContainer: {
//     alignItems: 'cover',
//   },
//   logo: {
//     width: responsiveScreenWidth(25),
//   },
//   placeholder: {
//     width: 50,
//   },
//   content: {
//     position: 'fixed',
//     top: responsiveScreenHeight(2),
//     width: responsiveScreenWidth(100),
//     zIndex: -1,
//     paddingHorizontal: responsiveScreenWidth(5),
//   },
//   searchBarGradient: {
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   searchBarInput: {
//     backgroundColor: 'transparent',
//     color: 'white',
//     paddingVertical: responsiveScreenHeight(2),
//     fontSize: responsiveFontSize(12),
//     textAlign: 'center',
//   },
//   carouselContainer: {
//     height: responsiveScreenHeight(28), // Adjust the height as needed
//     marginHorizontal: responsiveScreenWidth(5), // Adjust the margin as needed
//     marginTop: 35,
//   },
//   carousel: {
//     justifyContent:'space-between',
//   },
//   carouselImage: {
//     width: '100%',
//     height: '80%',
//     borderRadius: 5,
//     alignSelf: 'center',
//   },
//   cardContainer: {
//     alignSelf:'center',
//     justifyContent:'space-evenly',
//     position:'absolute',
//     marginTop: responsiveScreenHeight(44),
//   },
//   title:{
//     fontWeight:'bold',
//     fontSize: responsiveFontSize(2.5), // Apply the Galey Extra Bold font here
//     paddingBottom: responsiveScreenHeight(1),
//   },
//   cardRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: responsiveScreenHeight(2),
//   },
  
//   card: {
//     marginHorizontal: responsiveScreenWidth(1), 
//     backgroundColor: '#0079FF',
//     borderRadius: 8,
//     width: responsiveScreenWidth(28),
//     height: responsiveScreenHeight(10),
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: 'black',
//     shadowOffset: { width: 2, height: 2 },
//     shadowOpacity: 3.2,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   icon: {
//     marginTop: responsiveScreenHeight(2),
//     height: responsiveScreenHeight(5),
//     width: responsiveScreenWidth(9),
//   },
//   textStyle: {
//     marginBottom: responsiveScreenHeight(2),
//     color:'white',
//   },
//   ButtonContainer: {
//     width: responsiveScreenWidth(25),
//     height: responsiveScreenHeight(25),
//     position:'absolute',
//     marginTop: responsiveScreenHeight(29),
//   },
//   ButtonRow: {
//     justifyContent:'center',
//     flexDirection: 'row', 
//     marginHorizontal: responsiveScreenWidth(0),
//     width: responsiveScreenWidth(90),
    
//   },
//   Button1: {
//     flexDirection: 'column',
//     marginRight: responsiveScreenWidth(2),
//     backgroundColor: 'green',
//     borderRadius: 8,
//     width: responsiveScreenWidth(42),
//     height: responsiveScreenHeight(12),
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: 'black',
//     shadowOffset: { width: 2, height: 2 },
//     shadowOpacity: 3.2,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   Button2: {
//     flexDirection: 'column',
//     marginLeft: responsiveScreenWidth(2),
//     backgroundColor: 'red',
//     borderRadius: 8,
//     width: responsiveScreenWidth(42),
//     height: responsiveScreenHeight(12),
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: 'black',
//     shadowOffset: { width: 2, height: 2 },
//     shadowOpacity: 3.2,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   Buttonicon: {
//     marginRight: responsiveScreenHeight(0),
//     height: responsiveScreenHeight(7),
//     width: responsiveScreenWidth(13),
//   },
//   Buttontext: {
//     flexDirection:"row",
//     alignItems:'center',
//     fontWeight: 'bold',
//     color:'white',
//     fontSize: responsiveFontSize(1.8),
//   },
// });

// export default Homepage;