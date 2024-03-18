import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, Dimensions } from 'react-native';


export const ServiceScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/aromaterapy.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.service}>Aromatherapy</Text>
                    <Text style={styles.price}>250 AED</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/back-hot-stone-massage.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.service}>Warm stone therapy</Text>
                    <Text style={styles.price}>270 AED</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/deep-tissue.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.service}>Deep tissue therapy</Text>
                    <Text style={styles.price}>250 AED</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/moxibustion-acupuncture.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.service}>Moxibustion</Text>
                    <Text style={styles.price}>300 AED</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/Pregnancy-Massage.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.service}>Pregnancy Massage</Text>
                    <Text style={styles.price}>280 AED</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/swedish.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.service}>Swedish massage</Text>
                    <Text style={styles.price}>250 AED</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/deep-tissue.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.service}>Tui-Na Chinese massage</Text>
                    <Text style={styles.price}>260 AED</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/lympathic-massage.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.service}>Manual lympathic drainage</Text>
                    <Text style={styles.price}>200 AED</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/thai-healing-relaxation.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.service}>Traditional Thai massage</Text>
                    <Text style={styles.price}>260 AED</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/Korean-massage.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.service}>Korean therapy</Text>
                    <Text style={styles.price}>320 AED</Text>
                </View>
            </View>
                    
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
        borderColor: '#E5E4E2',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        padding: 10
    },
    imgWrap: {
        width: 70,
        height: 40,
    },
    img: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain', 
    },
    textWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 20,
    },
    service: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
    },
    price: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        color: '#FFFFFF',
        backgroundColor: '#103d19',
        padding: 10,
        borderColor: '#103d19',
        borderWidth: 1,
        borderRadius: 5,
    }
});