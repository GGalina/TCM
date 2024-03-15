    import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Infinity from '../assets/img/Infinity.gif';
import Gif from 'react-native-gif';

export const DateTimeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/img/logo.jpg')}
        style={styles.logo}
        />

           <Gif
        source={Infinity} // Path to your animated GIF file
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
  }
});