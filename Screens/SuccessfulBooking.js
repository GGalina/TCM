import React from 'react';
import Moment from 'moment';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { useData } from '../DataContext';
import { useNavigation } from '@react-navigation/native';

export const SuccessfulBooking = () => {
    const navigation = useNavigation();
    const { state, dispatch } = useData();
    const formattedDate = Moment(state.date).format('MMMM Do YYYY');

    const handleClose = () => {
        dispatch({ type: 'RESET_STATE' });
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Your booking has been successful</Text>
            <Image
                source={require('../assets/img/app-icon.png')}
                style={styles.logo}
            />
            <View style={styles.textWrap}>
                <Text style={styles.text}><Text style={styles.accent}>Location: </Text>{state.location ? state.location.title : 'Location not selected'}</Text>
                <Text style={styles.text}><Text style={styles.accent}>Services: </Text>{state.service ? state.service.name : 'Service not selected'}</Text>
                <Text style={styles.text}><Text style={styles.accent}>Therapist: </Text>{state.therapist ? state.therapist.name : 'Therapist not selected'}</Text>
                <Text style={styles.text}><Text style={styles.accent}>Date: </Text>{formattedDate ? formattedDate : 'Date not selected'}</Text>
                <Text style={styles.text}><Text style={styles.accent}>Time: </Text>{state.time ? state.time : 'Time not selected'}</Text>
            </View>
            <View style={styles.closeButtonContainer}>
                <TouchableOpacity onPress={handleClose}>
                    <Text style={styles.closeBtn}>Go Back</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    logo: {
        width: 150, 
        height: 150, 
        resizeMode: 'contain', 
        marginBottom: 20, 
    },
    header: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center',
    },
    textWrap: {
        width: '60%',
        marginBottom: 20,
    },
    text: {
       fontFamily: 'Roboto-Regular',
        fontSize: 14,
        marginBottom: 10,
        color: '#000000',
    },
    accent: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        color: '#808080',
    },
    closeButtonContainer: {
        alignItems: 'center',
    },
    closeBtn: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        backgroundColor: '#103d19',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 50,
        paddingRight: 50,
        borderColor: '#103d19',
        borderWidth: 1,
        borderRadius: 5,
    },
});