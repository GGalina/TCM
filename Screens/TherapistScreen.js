import React, { useState } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { TherapistModal } from './TherapistModal';

export const TherapistScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedTherapist, setSelectedTherapist] = useState(null);

    const handleTherapistClick = (therapist) => {
        setSelectedTherapist(therapist);
        setModalVisible(true);
    };

    const therapists = [
        { 
            name: 'Nancy', 
            services: 'Thai massage, Deep tissue, aromatherapy, warm stone therapy, pregnancy massage', 
            location: 'TCM Acupuncture Center-Jumeirah', 
            image: require('../assets/img/Massage1.jpg'),
            description: 'Nancy is a highly skilled massage therapist with over 10 years of experience. She is proficient in various massage techniques, including Thai massage, Deep tissue, aromatherapy, warm stone therapy, and pregnancy massage. Her personalized approach and attention to detail ensure that each client receives a tailored and therapeutic experience.'
        },
        { 
            name: 'Lucy', 
            services: 'Tui-Na chinese massage, Deep tissue, aromatherapy, warm stone therapy, pregnancy massage', 
            location: 'TCM Massage & Relaxation Center Bay Square', 
            image: require('../assets/img/Massage2.jpg'),
            description: 'Lucy is a licensed massage therapist specializing in Tui-Na chinese massage, Deep tissue, aromatherapy, warm stone therapy, and pregnancy massage. With years of experience, she has developed a unique and effective approach to address her clients\' specific needs, promoting relaxation, pain relief, and overall well-being.'
        },
        { 
            name: 'Jenny', 
            services: 'Korean therapy, Moxibustion, Deep tissue, aromatherapy, warm stone therapy, pregnancy massage', 
            location: 'TCM Acupuncture Therapy Center -Shop 5', 
            image: require('../assets/img/Massage3.jpg'),
            description: 'Jenny is a certified massage therapist specializing in Korean therapy, Moxibustion, Deep tissue massage, aromatherapy, warm stone therapy, and pregnancy massage. With a passion for holistic healing, she integrates traditional techniques with modern practices to provide her clients with a rejuvenating and therapeutic experience.'
        },
        { 
            name: 'Linda', 
            services: 'Swedish massage, Deep tissue, aromatherapy, warm stone therapy, pregnancy massage', 
            location: 'TCM Acupuncture Therapy Center -Shop 5, TCM Acupuncture and Ayurveda Therapy Center Branch-Shop 8', 
            image: require('../assets/img/Massage1.jpg'),
            description: 'Linda is a dedicated massage therapist with expertise in Swedish massage, Deep tissue massage, aromatherapy, warm stone therapy, and pregnancy massage. With a focus on holistic well-being, she strives to create a nurturing and relaxing environment for her clients to unwind and rejuvenate.'
        },
        { 
            name: 'Hanna', 
            services: 'Thai massage, Deep tissue, aromatherapy, warm stone therapy, pregnancy massage', 
            location: 'TCM Acupuncture Therapy Center -Shop 5, TCM Acupuncture and Ayurveda Therapy Center Branch-Shop 8', 
            image: require('../assets/img/Massage2.jpg'),
            description: 'Hanna is a skilled massage therapist specializing in Thai massage, Deep tissue massage, aromatherapy, warm stone therapy, and pregnancy massage. With a compassionate and intuitive touch, she helps her clients release tension, reduce stress, and restore balance to the body and mind.'
        },
        { 
            name: 'Anna', 
            services: 'Manual lympathic drainage, Deep tissue, aromatherapy, warm stone therapy, pregnancy massage', 
            location: 'TCM Acupuncture and Ayurveda Therapy Center Branch-Shop 8', 
            image: require('../assets/img/Massage3.jpg'),
            description: 'Anna is a certified massage therapist with expertise in Manual lymphatic drainage, Deep tissue massage, aromatherapy, warm stone therapy, and pregnancy massage. With a focus on holistic wellness, she tailors each session to address her clients\' specific needs, promoting relaxation, detoxification, and overall vitality.'
        },
        { 
            name: 'Nana', 
            services: 'Thai massage, Deep tissue, aromatherapy, warm stone therapy, pregnancy massage', 
            location: 'TCM Acupuncture Therapy Center -Shop 5, TCM Acupuncture and Ayurveda Therapy Center Branch-Shop 8', 
            image: require('../assets/img/Massage1.jpg'),
            description: 'Nana is an experienced massage therapist specializing in Thai massage, Deep tissue massage, aromatherapy, warm stone therapy, and pregnancy massage. With a holistic approach to healing, she creates a nurturing and relaxing environment for her clients to unwind, rejuvenate, and restore balance.'
        },
        { 
            name: 'Mary', 
            services: 'Thai massage, Tiger massage, Deep tissue, aromatherapy, warm stone therapy, pregnancy massage', 
            location: 'TCM Acupuncture Therapy Center -Shop 5', 
            image: require('../assets/img/Massage2.jpg'),
            description: 'Mary is a dedicated massage therapist with expertise in Thai massage, Tiger massage, Deep tissue massage, aromatherapy, warm stone therapy, and pregnancy massage. With a passion for holistic well-being, she combines ancient healing techniques with modern practices to provide her clients with a deeply relaxing and therapeutic experience.'
        },
        { 
            name: 'Cindy', 
            services: 'Traditional Thai massage, Deep tissue, aromatherapy, warm stone therapy, pregnancy massage', 
            location: 'TCM Acupuncture Therapy Center( Branch)', 
            image: require('../assets/img/Massage3.jpg'),
            description: 'Cindy is a certified massage therapist specializing in Traditional Thai massage, Deep tissue massage, aromatherapy, warm stone therapy, and pregnancy massage. With years of experience, she has honed her skills to provide her clients with a unique blend of therapeutic techniques aimed at promoting relaxation, pain relief, and overall well-being.'
        },
    ];


    return (
        <ScrollView contentContainerStyle={styles.container}>
            {therapists.map((therapist, index) => (
                <TouchableOpacity key={index} onPress={() => handleTherapistClick(therapist)}>
                    <View style={styles.item} key={index}>
                        <View style={styles.imgWrap}>
                            <Image
                                source={therapist.image}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.textWrap}>
                            <Text style={styles.name}>{therapist.name}</Text>
                            <Text style={styles.services}><Text style={styles.accent}>Services: </Text>{therapist.services}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}

            {modalVisible && <TherapistModal
                therapist={selectedTherapist}
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            />}
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