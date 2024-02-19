import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Switch, ScrollView } from 'react-native';

const SettingsPage = ({navigation}) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [preferredRadius, setPreferredRadius] = useState('5'); // Default preferred radius in miles

  // Function to toggle notification settings
  const toggleNotifications = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  // Function to toggle location settings
  const toggleLocation = () => {
    setLocationEnabled(!locationEnabled);
  };

  // Function to save preferred search radius
  const saveRadius = () => {
    // Validate and save the preferred search radius
    // You can implement server communication or app-specific logic here
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Emergency Settings</Text>

      {/* Notifications Setting */}
      <View style={styles.setting}>
        <Text>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
        />
      </View>

      {/* Location Setting */}
      <View style={styles.setting}>
        <Text>Enable Location</Text>
        <Switch
          value={locationEnabled}
          onValueChange={toggleLocation}
        />
      </View>

      {/* Preferred Search Radius Setting */}
      <Text style={styles.subheading}>Preferred Search Radius (in miles)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter radius"
        value={preferredRadius}
        onChangeText={(text) => setPreferredRadius(text)}
        keyboardType="numeric"
      />
      <Button title="Save Radius" onPress={() => navigation.push('map')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    fontSize: 16,
  },
});

export default SettingsPage;
