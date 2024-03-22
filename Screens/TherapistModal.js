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
import { useData } from '../DataContext';
import Icon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export const TherapistModal = ({ therapist, modalVisible, setModalVisible }) => {
    const navigation = useNavigation();
    const { dispatch } = useData();

    const handleClose = () => {
        setModalVisible(false);
    };

    const handleSelect = () => {
        dispatch({ type: 'SELECT_THERAPIST', payload: therapist });
        setModalVisible(false);
        navigation.navigate('Date / Time');
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
                    {therapist && (
                        <View style={styles.modalContent}>
                            <View style={styles.modalWrapper}>
                                <Text style={styles.modalTitle}>{therapist.name}</Text>
                                <Icon name="close" size={20} style={styles.closeIcon} onPress={handleClose}/>
                            </View>

                            <View style={styles.modalBlock}>
                                <View style={styles.imgWrap}>
                                    <Image
                                        source={therapist.image}
                                        style={styles.img}
                                    />
                                </View>
                                <View style={styles.textWrap}>
                                    <Text style={styles.modalText}><Text style={styles.accent}>Services: </Text>{therapist.services}</Text>
                                </View>
                            </View>

                            <Text style={styles.modalText}><Text style={styles.accent}>Description: </Text>{therapist.description}</Text>
                            <Text style={styles.modalText}><Text style={styles.accent}>Location: </Text>{therapist.location}</Text>

                            <View style={styles.selectButtonContainer}>
                                <TouchableOpacity onPress={handleSelect}>
                                    <Text style={styles.selectBtn}>Select</Text>
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
    modalBlock: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        alignItems: 'center'
    },
    textWrap: {
        width: '70%'
    },
    imgWrap: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    img: {
        width: 57,
        height: 100,
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
        paddingLeft: 50,
        paddingRight: 50,
        borderColor: '#103d19',
        borderWidth: 1,
        borderRadius: 5,
    },
});
