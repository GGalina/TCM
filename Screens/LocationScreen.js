import React from 'react';
import { MapScreen } from './MapScreen';
import { LocationListScreen } from './LocationsListScreen';
import { View, StyleSheet, Dimensions } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export const LocationScreen = () => {
  return (
    <View style={styles.container}>
        <Tab.Navigator
            initialRouteName="Locations"  
                screenOptions={{
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: 'Roboto-Medium',
                    },
                    tabBarItemStyle: {
                        width: Dimensions.get("window").width / 2,
                        borderColor: 'white',
                        borderRightWidth: 1
                    },
                    tabBarInactiveTintColor: '#808080',
                    tabBarActiveTintColor: '#FFFFFF',
                    tabBarIndicatorStyle: {
                        backgroundColor: '#103d19'
                    },
                    tabBarStyle: {
                        backgroundColor: '#103d19'
                    },
                }}
        >
        <Tab.Screen name="Locations" component={LocationListScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5
    },
});