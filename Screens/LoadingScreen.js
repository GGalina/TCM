import React from 'react';
import Gif from 'react-native-gif';
import Infinity from '../assets/img/Infinity.gif';
import { View, Image, StyleSheet } from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/logo.jpg')}
        style={styles.logo}
        />

      <Gif
        source={Infinity} 
        style={styles.gif}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, 
    height: 150, 
    resizeMode: 'contain', 
    marginBottom: 20, 
  },
  gif: {
    width: 50,
    height: 50,
  },
});