import React from 'react';
import { useData } from '../DataContext';
import { useNavigation } from '@react-navigation/native';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export const LocationListScreen = () => {
    const { dispatch } = useData();
    const navigation = useNavigation();

    const locations = [
        {
            title: 'TCM Acupuncture Therapy Center( Branch)',
            hours: '9:00 - 00:00',
            address: 'Boca Residence Seddiqi Properties - Al Barsha 1'
        },
        {
            title: 'TCM Acupuncture and Ayurveda Therapy Center Branch-Shop 8',
            hours: '9:00 - 00:00',
            address: 'Saratoga Building - Ground Floor, Shop - 8 6A Street'
        },
        {
            title: 'Al Barsha Therapy Center',
            hours: '9:00 - 00:00',
            address: '22nd St - Al Barsha - Al Barsha 1'
        },
        {
            title: 'TCM Acupuncture Therapy Center -Shop 5',
            hours: '9:00 - 23:00',
            address: 'Al BarshaAl, Saratoga Building - Shop 5'
        },
        {
            title: 'TCM Acupuncture Center-Jumeirah',
            hours: '10:00 - 23:30',
            address: 'The mall Jumeirah 3 - Umm Suqeim - Umm Suqeim 3'
        },
        {
            title: 'TCM Massage & Relaxation Center Bay Square',
            hours: '9:00 - 00:00',
            address: 'Level P, Shop 03, Building 6 '
        }
    ];

    const handleSelect = (location) => {
        dispatch({ type: 'SELECT_LOCATION', payload: location }); 
        navigation.navigate('Services');
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {locations.map((location, index) => (
                <View key={index} style={styles.item}>
                    <View style={styles.textWrap}>
                        <Text style={styles.title}>{location.title}</Text>
                        <Text style={styles.text}><Text style={styles.accent}>Working Hours: </Text>{location.hours}</Text>
                        <Text style={styles.text}><Text style={styles.accent}>Address: </Text>{location.address}</Text>
                    </View>

                    <View style={styles.selectButtonContainer}>
                        <TouchableOpacity onPress={() => handleSelect(location)}>
                            <Text style={styles.selectBtn}>Select</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ))}
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        width: Dimensions.get("window").width,
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        borderColor: '#E5E4E2',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10
    },
    textWrap: {
        flex: 1,
    },
    title: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        marginBottom: 10,
    },
    text: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        marginBottom: 5,
    },
    accent: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        color: '#808080',
    },
     selectButtonContainer: {
        alignItems: 'center',
    },
    selectBtn: {
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        backgroundColor: '#103d19',
        paddingBottom: 10,
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 30,
        borderColor: '#103d19',
        borderWidth: 1,
        borderRadius: 5,
    },
});
