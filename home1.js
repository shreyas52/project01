
import React, { useState ,useEffect } from "react";

import{
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

import Profile from './profile1'; // Adjust the path according to your file structure
import axios, { Axios } from 'axios';
import { Alert } from "react-native";
import { useRoute } from '@react-navigation/native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import updateprofile from './updateprofile';


const App =({ navigation ,}) =>{  


  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [vehicleNo, setVehicleNo] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  const info = async () => {
    try{   
      const savedUser = await AsyncStorage.getItem("user");
      const currentUser = JSON.parse(savedUser);
      console.log(currentUser);   

      console.log("info clicked")
      const response2 = await axios.post('http://10.0.2.2:3000/api/info',{ username:currentUser.username, password:currentUser.password});
      // console.log(response2.data);
      const fullname = response2.data.fullname;
      const username = response2.data.username;
      const password = response2.data.password;
      const birthdate = response2.data.birthdate;
      const mobilenumber = response2.data.mobilenumber;
      const vehicalno = response2.data.vehicalno;
      console.log(fullname,username,password,birthdate,mobilenumber,vehicalno);
      setFullName(fullname);
      setUsername(username);
      setPassword(password);
      setBirthDate(birthdate);
      setMobileNumber(mobilenumber);
      setVehicleNo(vehicalno);

    }
    catch(err){ 
      console.log("err",err.message)
    }
  };




  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setFullName('');
      setUsername('');
      setPassword('');
      setBirthDate('');
      setMobileNumber('');
      setVehicleNo('');
      console.log("logout clicked");

      info();
      // clearImmediate(fullName,username,password,birthDate,mobileNumber,vehicleNo);
      // setRefresh(!refresh);
    } catch (error) {
      console.log(error);
    }
  };

 info();
  return (  
  
    <View style={styles.v1}>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />

      <Button title="logout" onPress={logout} />
      <View style={styles.detailsContainer}>
      
      <Text>Full Name: {fullName}</Text>
      <Text>Username: {username}</Text>
      <Text>Password: {password}</Text>
      <Text>Birth Date: {birthDate}</Text>
      <Text>Mobile Number: {mobileNumber}</Text>
      <Text>Vehicle Number: {vehicleNo}</Text>
      </View>
      <Button title="Update Profile" onPress={() => navigation.push('uProfile')} />
      <Button title="request" onPress={() => navigation.push('req')} />
      <Button title="map" onPress={() => navigation.push('map1')} />
    </View>  
    
  );    
};  
const styles = StyleSheet.create({
  v1:{
    flex:1,//cover the all space on screen
    backgroundColor:"skyblue",
    justifyContent:"center",
    alignItems:"center",
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
})
export default App;
