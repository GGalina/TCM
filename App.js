import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import 'react-native-gesture-handler';
import { DataProvider } from './DataContext';
import { View, StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { HomeScreen } from './Screens/Home';
import { MapScreen } from './Screens/MapScreen';
import { LoadingScreen } from './Screens/LoadingScreen';
import { ServiceScreen } from './Screens/ServiceScreen';
import { DateTimeScreen } from './Screens/DateTimeScreen';
import { LocationScreen } from './Screens/LocationScreen';
import { TherapistScreen } from './Screens/TherapistScreen';
import { SuccessfulBooking } from './Screens/SuccessfulBooking';
import { LocationListScreen } from './Screens/LocationsListScreen';

const MainStack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return () => clearTimeout(timeout);
  }, []);
  
  const [fontsLoaded] = useFonts({
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return <LoadingScreen />;
  };

  return (
    <DataProvider>
      <NavigationContainer>
        <View style={styles.container}>
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <MainStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
              <MainStack.Screen name="Location" component={LocationScreen} />
              <MainStack.Screen name="Service" component={ServiceScreen} />
              <MainStack.Screen name="Home" component={HomeScreen} />
              <MainStack.Screen name="Therapist" component={TherapistScreen} />
              <MainStack.Screen name="DateTime" component={DateTimeScreen} />
              <MainStack.Screen name="Map" component={MapScreen} />
              <MainStack.Screen name="Locations" component={LocationListScreen} />
              <MainStack.Screen name="SuccessfulBooking" component={SuccessfulBooking} />
            </MainStack.Navigator>
          )}
        </View>
      </NavigationContainer>
    </DataProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
