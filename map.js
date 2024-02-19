import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, View, Alert } from 'react-native';

export default function App() {
  const handleMapPress = () => {
    Alert.alert('Map Pressed');
  };

  const handleMarkerPress = () => {
    Alert.alert('Marker Pressed');
  };

  const handleCalloutPress = () => {
    Alert.alert('Callout Pressed');
  };

  return (
    <View style={styles.container}>
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: 37.4220936,
          longitude: -122.083922,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapPress}
      >
        <Marker
          coordinate={{
            latitude: 37.4220936,
            longitude: -122.083922,
          }}
          onPress={handleMarkerPress}
        >
          <Callout onPress={handleCalloutPress}>
            <View>
              {/* Add your custom callout view here */}
            </View>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});