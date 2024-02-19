import React, { useState } from "react";
import{
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Alert } from "react-native";
import axios, { Axios } from 'axios';
const apiClient =create({
  baseURL:""
})



const Profile = ({ isVisible, onClose ,navigation }) => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    
    setIsLogin(!isLogin);
  };

  const [loginUserId, setLoginUserId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [vehicleRegisterNumber, setVehicleRegisterNumber] = useState("");


  const handleSignUp = async (e) => {
    try{

      console.log("fullname",fullName," username:",username,signupPassword)
      await axios.post('http://127.0.0.1:3000/api/my_app',{fullName,username,signupPassword});
      
    }
    catch(err){ 
          console.log("err",err.message)
    }

    // // Basic frontend validation
    // if (!fullName.match(/^[A-Z][a-zA-Z]* [A-Z][a-zA-Z]* [A-Z][a-zA-Z]*$/)) {
    //   Alert.alert(
    //     "Invalid Full Name",
    //     "Full Name should start with capital letters for First, Middle, and Last names."
    //   );
    //   return;
    // }

    // // You should implement backend validation for username uniqueness.
    // // This example assumes username is unique.
    // if (username === "existing_username") {
    //   Alert.alert(
    //     "Username Taken",
    //     "This username is already in use. Try a new one."
    //   );
    //   return;
    // }

    // if (signupPassword.length < 6 || signupPassword.length > 8) {
    //   Alert.alert(
    //     "Password Length",
    //     "Password must be between 6 to 8 characters."
    //   );
    //   return;
    // }

    // if (signupPassword !== confirmPassword) {
    //   Alert.alert("Password Mismatch", "Passwords do not match.");
    //   return;
    // }
    // try{
    //   // const resp = await axios.post("http://127.0.0.1:3000",{name :"username" ,email :"fullName" ,password :"signupPassword",});
    // }
    // catch(ex){
    //   console.log(ex.message);
    // }
    
    // console.log(resp.data);
    // Perform signup logic here (you should implement backend registration)
    Alert.alert("Sign Up Successful", "Welcome, " + fullName);
    setFullName("");
    setUsername("");
    setSignupPassword("");
    setConfirmPassword("");
    setBirthdate("");
    setMobileNo("");
    setVehicleRegisterNumber("");
  };
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };


<>

<View style={styles.profileicon}>
          <TouchableOpacity onPress={toggleProfileModal}>
            <Ionicons name="ios-person" size={24} color="#279EFF" />
          </TouchableOpacity>
        </View>
<Profile isVisible={isProfileModalOpen} onClose={toggleProfileModal} />
</>
  return (
    <Modal visible={isVisible} animationType="slide" transparent={true}>
      <View style={styles.container}>
        <LinearGradient colors={["#068FFF", "#0A1C5A"]} style={styles.header}>
          <View style={styles.closebutton}>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="ios-close" size={32} color="white" />
            </TouchableOpacity>
          </View>
          <Text style={styles.title}>{isLogin ? "Login" : "Sign Up"}</Text>
        </LinearGradient>
        {isLogin ? (
          <View style={styles.form}>
            {/* Login Form */}
            <TextInput
              style={styles.input}
              placeholder="User ID / Mobile Number"
              onChangeText={(text) => setLoginUserId(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={(text) => setLoginPassword(text)}
            />
            <Button
              title="Login"
              onPress={() => console.log("Login clicked")}
            />
            <TouchableOpacity onPress={toggleForm}>
              <Text style={styles.toggleButton}>
                {isLogin ? "Switch to Sign Up" : "Switch to Login"}
              </Text>
            </TouchableOpacity>
            
          </View>
        ) : (
          <View style={styles.form}>
            {/* Sign Up Form */}
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              onChangeText={(e) => setFullName(e)}
            />
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={(e) => setUsername(e)}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={(e) => setSignupPassword(e)}
            />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              secureTextEntry
              onChangeText={(e) => setConfirmPassword(e)}
            />
            <TextInput
              style={styles.input}
              placeholder="Birthdate"
              onChangeText={(e) => setBirthdate(e)}
            />
            <TextInput
              style={styles.input}
              placeholder="Mobile Number"
              onChangeText={(e) => setMobileNo(e)}
            />
            <TextInput
              style={styles.input}
              placeholder="Vehicle Register Number" 
              onChangeText={(e) => setVehicleRegisterNumber(e)}
            />
            <Button title="Sign Up" onPress={handleSignUp} />
            
            <TouchableOpacity onPress={toggleForm}>
              <Text style={styles.toggleButton}>
                {isLogin ? "Switch to Sign Up" : "Switch to Login"}
              </Text>
            </TouchableOpacity>
            
          </View>
        )}
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  closebutton: {
    position: "absolute",
    top: 15,
    right: 10,
    zIndex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    width: "80%",
    padding: 16,
    borderRadius: 10,
    borderBottomWidth: 1,
    marginBottom: 5,
    position: "relative",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  form: {
    backgroundColor: "#fff",
    padding: 20,
    width: "80%",
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#279EFF",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  toggleButton: {
    color: "#279EFF",
    marginTop: 16,
    textDecorationLine: "underline",
    fontSize: 16,
  },
});

export default Profile;
