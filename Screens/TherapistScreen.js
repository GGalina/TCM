import React from 'react';
import { ScrollView, View, Image, Text, StyleSheet, Dimensions } from 'react-native';

export const TherapistScreen = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/Massage1.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.name}>Nancy</Text>
                    <Text style={styles.services}><Text style={styles.accent}>Services: </Text> Thai massage, Deep tissue, aromatherapy,
                      warm stone therapy, pregnancy massage</Text>
                    <Text style={styles.location}><Text style={styles.accent}>Location: </Text>TCM Acupuncture Center-Jumeirah</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/Massage2.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.name}>Lucy</Text>
                    <Text style={styles.services}><Text style={styles.accent}>Services: </Text> Tui-Na chinese massage, Deep tissue,
                      aromatherapy, warm stone therapy, pregnancy massage</Text>
                    <Text style={styles.location}><Text style={styles.accent}>Location: </Text>TCM Massage & Relaxation Center Bay Square</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/Massage3.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.name}>Jenny</Text>
                    <Text style={styles.services}><Text style={styles.accent}>Services: </Text> Korean therapy, Moxibustion, Deep tissue,
                      aromatherapy, warm stone therapy, pregnancy massage</Text>
                    <Text style={styles.location}><Text style={styles.accent}>Location: </Text>TCM Acupuncture Therapy Center -Shop 5</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/Massage1.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.name}>Linda</Text>
                    <Text style={styles.services}><Text style={styles.accent}>Services: </Text> Swedish massage, Deep tissue, aromatherapy,
                      warm stone therapy, pregnancy massage</Text>
                    <Text style={styles.location}><Text style={styles.accent}>Location: </Text>TCM Acupuncture Therapy Center -Shop 5,
                    TCM Acupuncture and Ayurveda Therapy Center Branch-Shop 8</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/Massage2.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.name}>Hanna</Text>
                    <Text style={styles.services}><Text style={styles.accent}>Services: </Text> Thai massage, Deep tissue, aromatherapy,
                      warm stone therapy, pregnancy massage</Text>
                    <Text style={styles.location}><Text style={styles.accent}>Location: </Text>TCM Acupuncture Therapy Center -Shop 5,
                      TCM Acupuncture and Ayurveda Therapy Center Branch-Shop 8</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/Massage3.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.name}>Anna</Text>
                    <Text style={styles.services}><Text style={styles.accent}>Services: </Text> Manual lympathic drainage, Deep tissue,
                      aromatherapy, warm stone therapy, pregnancy massage</Text>
                    <Text style={styles.location}><Text style={styles.accent}>Location: </Text>TCM Acupuncture and Ayurveda Therapy Center Branch-Shop 8</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/Massage1.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.name}>Nana</Text>
                    <Text style={styles.services}><Text style={styles.accent}>Services: </Text> Thai massage, Deep tissue, aromatherapy,
                      warm stone therapy, pregnancy massage</Text>
                    <Text style={styles.location}><Text style={styles.accent}>Location: </Text>TCM Acupuncture Therapy Center -Shop 5,
                      TCM Acupuncture and Ayurveda Therapy Center Branch-Shop 8</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/Massage2.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.name}>Mary</Text>
                    <Text style={styles.services}><Text style={styles.accent}>Services: </Text> Thai massage, Tiger massage, Deep tissue,
                      aromatherapy, warm stone therapy, pregnancy massage</Text>
                    <Text style={styles.location}><Text style={styles.accent}>Location: </Text>TCM Acupuncture Therapy Center -Shop 5</Text>
                </View>
            </View>

            <View style={styles.item}>
                <View style={styles.imgWrap}>
                    <Image
                    source={require('../assets/img/Massage3.jpg')}
                    style={styles.img}
                    />
                </View>
                <View style={styles.textWrap}>
                    <Text style={styles.name}>Cindy</Text>
                    <Text style={styles.services}><Text style={styles.accent}>Services: </Text>Traditional Thai massage, Deep tissue,
                      aromatherapy, warm stone therapy, pregnancy massage</Text>
                    <Text style={styles.location}><Text style={styles.accent}>Location: </Text>TCM Acupuncture Therapy Center( Branch)</Text>
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
        width: 50,
        height: 70,
    },
    img: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain', 
    },
    textWrap: {
        flex: 1,
        gap: 5,
        marginLeft: 20,
    },
    name: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
    },
    services: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: '#000000',
    },
    location: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        color: '#000000',
    },
    accent: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        color: '#808080',
      }
});