import React, { useState } from 'react';
import { ServiceModal } from './ServiceModal';
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

export const ServiceScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleServiceClick = (service) => {
        setSelectedService(service);
        setModalVisible(true);
    };

    const services = [
        { 
            name: 'Aromatherapy', 
            price: '250 AED', 
            image: require('../assets/img/aromatherapy.jpg'), 
            description: "Aromatherapy involves the use of aromatic essential oils to promote relaxation and enhance well-being. It typically includes gentle massage techniques combined with the inhalation or application of essential oils.", 
            benefits: "Aromatherapy can help reduce stress, alleviate anxiety, improve sleep quality, relieve muscle tension, and enhance mood." 
        },
        { 
            name: 'Warm stone therapy', 
            price: '270 AED', 
            image: require('../assets/img/back-hot-stone-massage.jpg'), 
            description: "Warm stone therapy, also known as hot stone massage, incorporates heated stones placed on specific points of the body to help relax muscles and promote circulation. Therapists may also use the stones to apply gentle pressure during massage.", 
            benefits: "Warm stone therapy can help relieve muscle tension, reduce stress and anxiety, improve blood flow, promote relaxation, and enhance overall well-being." 
        },
        { 
            name: 'Deep tissue therapy', 
            price: '250 AED', 
            image: require('../assets/img/deep-tissue.jpg'), 
            description: "Deep tissue therapy focuses on targeting deeper layers of muscles and connective tissue to release chronic tension and knots. It typically involves firm pressure and slow strokes to reach underlying muscle layers.", 
            benefits: "Deep tissue therapy can help alleviate chronic muscle pain, improve posture, increase flexibility, reduce inflammation, and enhance athletic performance." 
        },
        { 
            name: 'Moxibustion', 
            price: '300 AED', 
            image: require('../assets/img/moxibustion-acupuncture.jpg'), 
            description: "Moxibustion is a traditional Chinese therapy that involves burning dried mugwort (moxa) on or near specific acupuncture points on the body. It aims to stimulate circulation, promote healing, and balance the flow of energy (Qi) within the body.", 
            benefits: "Moxibustion can help alleviate pain, reduce inflammation, boost immunity, improve digestion, regulate menstrual cycles, and enhance overall vitality." 
        },
        { 
            name: 'Pregnancy Massage', 
            price: '280 AED', 
            image: require('../assets/img/pregnancy.jpg'), 
            description: "Pregnancy massage is specifically designed to address the unique needs of expectant mothers. It involves gentle techniques to relieve discomfort associated with pregnancy, such as back pain, swelling, and fatigue.", 
            benefits: "Pregnancy massage can help reduce muscle tension, alleviate joint pain, improve sleep quality, promote relaxation, and support overall well-being during pregnancy." 
        },
        { 
            name: 'Swedish massage', 
            price: '250 AED', 
            image: require('../assets/img/swedish.jpg'), 
            description: "Swedish massage is one of the most popular massage techniques worldwide. It involves long, gliding strokes, kneading, and circular movements to promote relaxation and overall wellness.", 
            benefits: "Swedish massage can help reduce stress, improve circulation, alleviate muscle tension, enhance flexibility, promote better sleep, and boost mood." 
        },
        { 
            name: 'Tui-Na Chinese massage', 
            price: '260 AED', 
            image: require('../assets/img/deep-tissue.jpg'), 
            description: "Tui-Na is a form of Chinese manipulative therapy that combines massage techniques with acupressure and stretching. It aims to balance the flow of energy (Qi) in the body and promote healing.", 
            benefits: "Tui-Na massage can help relieve pain, improve musculoskeletal conditions, reduce stress, boost immunity, enhance circulation, and restore balance in the body." 
        },
        { 
            name: 'Manual lympathic drainage', 
            price: '200 AED', 
            image: require('../assets/img/lympathic-massage.jpg'), 
            description: "Manual lymphatic drainage is a gentle massage technique that stimulates the lymphatic system to remove excess fluid and toxins from the body. It involves light, rhythmic strokes directed towards lymph nodes.", 
            benefits: "Manual lymphatic drainage can help reduce swelling, improve lymphatic circulation, detoxify the body, support immune function, and promote relaxation." 
        },
        { 
            name: 'Traditional Thai massage', 
            price: '260 AED', 
            image: require('../assets/img/thai-healing-relaxation.jpg'), 
            description: "Traditional Thai massage is an ancient healing art that combines acupressure, assisted yoga stretches, and rhythmic compressions. It aims to balance energy (Sen) lines in the body and promote physical and mental well-being.", 
            benefits: "Traditional Thai massage can help improve flexibility, relieve muscle tension, reduce stress, increase energy levels, enhance circulation, and promote overall relaxation." 
        },
        { 
            name: 'Korean therapy', 
            price: '320 AED', 
            image: require('../assets/img/korean-massage.jpg'), 
            description: "Korean therapy encompasses a variety of traditional healing practices from Korea, including massage, acupressure, cupping, and herbal medicine. It aims to restore balance and harmony in the body and mind.", 
            benefits: "Korean therapy can help alleviate pain, reduce stress, boost immunity, improve circulation, detoxify the body, and promote overall health and vitality." 
        },
    ];

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {services.map((service, index) => (
                <TouchableOpacity key={index} onPress={() => handleServiceClick(service)}>
                    <View style={styles.item}>
                        <View style={styles.imgWrap}>
                            <Image
                                source={service.image}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.textWrap}>
                            <Text style={styles.service}>{service.name}</Text>
                            <Text style={styles.price}>{service.price}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            ))}

            {modalVisible &&
                <ServiceModal
                    service={selectedService}
                    modalVisible={modalVisible}
                    setModalVisible={setModalVisible}
                />
            }
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