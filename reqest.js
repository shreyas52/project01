import React, { useState ,useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Profile from './profile1';
import axios, { Axios } from 'axios';
import { Alert } from "react-native";
import Geolocation from 'react-native-geolocation-service';
import * as Location from 'expo-location';


const UpdateProfile = ({ navigation }) => {
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [signupPassword, setSignupPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const[location, setLocation] = useState("");



  const updateProfile = async() => {
    try{      
       
    }
    catch(err){ 
        console.log("err",err.message)
    }
        
        // Alert.alert("SignUp Sucessful ,"+username);
  };

  const getLocation = async() => {
    const {granted} = await Location.requestForegroundPermissionsAsync();
    if(!granted){
      return;
    }
    const {coords:{latitude,longitude}} =await Location.getLastKnownPositionAsync(); 
    setLocation({latitude,longitude});
    console.log(location);


    // await Location.getCurrentPositionAsync(options)
   };

  useEffect(() => {
  const info = async () => {
    try{   
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
      console.log(currentUser);   

      console.log("info clicked")
      const response2 = await axios.post('http://10.0.2.2:3000/api/info',{ username:currentUser.username, password:currentUser.password});
      console.log(response2.data);
      const fullname = response2.data.fullname;
      const username = response2.data.username;
      const password = response2.data.password;
      
    

      console.log(fullname,username,password);
      setFullName(fullname);
      setUsername(username);
      setConfirmPassword(password);

      
    }
    catch(err){ 
      console.log("err",err.message)
    }
  };
  info();
}, [50]);


return (
    <View style={styles.container}>
        <Text>request page</Text>
        <Text>Location:{[location.latitude,location.longitude]} </Text>

        <Button title="Get Location" onPress={getLocation} />
     
    </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default UpdateProfile;