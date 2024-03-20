import React from 'react';
import {
    View,
    Image,
    Text,
    Modal,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export const ServiceModal = ({ service, modalVisible, setModalVisible }) => {

    const handleClose = () => {
        setModalVisible(false);
    };

    const handleSelect = () => {
        console.log("selected service", service);
        setModalVisible(false);
    };

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
            onRequestClose={handleClose}
        >
            <TouchableOpacity
                activeOpacity={1}
                style={styles.modalContainer}
                onPress={handleClose} 
            >
                 <TouchableOpacity activeOpacity={1}>
                    {service && (
                        <View style={styles.modalContent}>
                            <View style={styles.modalWrapper}>
                                <Text style={styles.modalTitle}>{service.name}</Text>
                                <Icon name="close" size={20} style={styles.closeIcon} onPress={handleClose}/>
                            </View>
                            <View style={styles.imgWrap}>
                                <Image
                                    source={service.image}
                                    style={styles.img}
                                />
                            </View>

                            <Text style={styles.modalText}><Text style={styles.accent}>Description: </Text>{service.description}</Text>
                            <Text style={styles.modalText}><Text style={styles.accent}>Benefits: </Text>{service.benefits}</Text>
                            <Text style={styles.modalBold}><Text style={styles.accent}>Price: </Text>{service.price}</Text>

                            <View style={styles.closeButtonContainer}>
                                <TouchableOpacity onPress={handleSelect}>
                                    <Text style={styles.closeButton}>Select</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        width: Dimensions.get("window").width,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalWrapper: {
        position: 'relative'
    },
    modalTitle: {
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        marginBottom: 20,
        marginTop: 20,
        textAlign: 'center',
    },
    closeIcon: {
        color: '#000000',
        position: 'absolute',
        right: 0,
        top: 0,
    },
    imgWrap: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        width: 270,
        height: 140,
        resizeMode: 'cover', 
        marginBottom: 20
    },
    accent: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        color: '#808080',
    },
    modalText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 14,
        marginBottom: 20,
        color: '#000000'
    },
    modalBold: {
        fontFamily: 'Roboto-Bold',
        fontSize: 14,
        marginBottom: 20,
        color: '#000000'
    },
    closeButtonContainer: {
        alignItems: 'center',
    },
    closeButton: {
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
