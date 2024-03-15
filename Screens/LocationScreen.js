import MapView, { Marker } from "react-native-maps";
import { Dimensions, StyleSheet, View} from 'react-native';

export const LocationScreen = () => {

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={{
                    latitude: 25.2048,
                    longitude: 55.2708,
                    latitudeDelta: 0.3, 
                    longitudeDelta: 0.3,
                }}
                mapType="standard"
            >
                <Marker
                    title={'TCM Acupuncture Therapy Center( Branch)'}
                    description={'Working Hours: 9:00 - 00:00'}
                    coordinate={{ latitude: 25.11616, longitude: 55.20278 }}
                /> 
                <Marker
                    title={'TCM Acupuncture and Ayurveda Therapy Center Branch-Shop 8'}
                    description={'Working Hours: 9:00 - 00:00'}
                    coordinate={{ latitude: 25.11771, longitude: 55.19528 }}
                /> 
                <Marker
                    title={'Al Barsha Therapy Center'}
                    description={'Working Hours: 9:00 - 00:00'}
                    coordinate={{ latitude: 25.11623, longitude: 55.19575 }}
                /> 
                <Marker
                    title={'TCM Acupuncture Therapy Center -Shop 5'}
                    description={'Working Hours: 9:00 - 23:00'}
                    coordinate={{ latitude: 25.11646, longitude: 55.19484 }}
                />
                <Marker
                    title={'TCM Acupuncture Center-Jumeirah'}
                    description={'Working Hours: 10:00 - 23:30'}
                    coordinate={{ latitude: 25.14337, longitude: 55.19106 }}
                />
                <Marker
                    title={'TCM Massage & Relaxation Center Bay Square'}
                    description={'Working Hours: 9:00 - 00:00'}
                    coordinate={{ latitude: 25.18920, longitude: 55.28050 }}
                />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});
