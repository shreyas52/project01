// import React from 'react';  
// import {StyleSheet, Text , Image , View , SafeAreaView, Button} from 'react-native';  
  

// export default function App() {  
//   return (  
//     <View style={styles.v1}>
//       <Text onPress={()=>{prompt("hello")}}>Hello World</Text>
//       <Text>I'm pressable!</Text>
//     </View>  
//   );    
// }  

// const styles = StyleSheet.create({
//   v1:{
//     flex:1,//cover the all space on screen
//     backgroundColor:"skyblue",
//     justifyContent:"center",
//     alignItems:"center",
//   },
// })


import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios, { Axios } from 'axios';
import { useRoute } from '@react-navigation/native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import updateprofile from './updateprofile';
import home from './home1';
import Profile from './profile1'; 
import request from './reqest';
import map from './map';
import map1 from './App12';

const Stack = createStackNavigator();



const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="uProfile" component={updateprofile} />
        <Stack.Screen name="req" component={request} />
        <Stack.Screen name="map" component={map} />
        <Stack.Screen name="map1" component={map1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

