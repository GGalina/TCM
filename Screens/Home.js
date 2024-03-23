import React from 'react';
import { StyleSheet, View, Dimensions} from 'react-native';
import { ServiceScreen } from './ServiceScreen';
import { DateTimeScreen } from './DateTimeScreen';
import { LocationScreen } from './LocationScreen';
import { TherapistScreen } from './TherapistScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
        <Tab.Navigator
            initialRouteName="Location"  
                screenOptions={{
                    tabBarLabelStyle: {
                        fontSize: 12,
                        fontFamily: 'Roboto-Medium',
                        paddingTop: 5,
                        paddingBottom: 5,
                    },
                    tabBarInactiveTintColor: '#808080',
                    tabBarActiveTintColor: '#000000',
                    tabBarIndicatorStyle: {
                        backgroundColor: '#103d19'
                    },
                    tabBarStyle: {
                        backgroundColor: '#E5E4E2'
                    },
                    initialLayout: {
                        width: Dimensions.get('window').width
                    }
                }}
        >
        <Tab.Screen name="Location" component={LocationScreen} />
        <Tab.Screen name="Services" component={ServiceScreen} />
        <Tab.Screen name="Therapist" component={TherapistScreen} />
        <Tab.Screen name="Date / Time" component={DateTimeScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
