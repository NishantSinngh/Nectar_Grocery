import { Image, Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Animated, { FadeInUp } from 'react-native-reanimated';
import colors from '../../constants/colors';
import { getAddress } from '../../helperFunctions/utils';
import imagePath from '../../assets/imagePath';
import { useAppSelector } from '../../redux/hooks';

const MapScreen = () => {
    const { location } = useAppSelector(state => state.authSlice);

    const [markerLocation, setMarkerLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [address, setAddress] = useState<string>('');
    const [mapRegion, setMapRegion] = useState({
        latitude: location?.coords?.latitude ?? 26.9124,
        longitude: location?.coords?.longitude ?? 75.7873,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });

    useEffect(() => {
        if (markerLocation) {
            getAddress(markerLocation)
                .then((address) => setAddress(address || ''));
        } else if (location?.address) {
            setAddress(location?.address);
        }
    }, []);


    const handleMapPress = (e: any) => {
        const tappedLocation = e.nativeEvent.coordinate;
        setMarkerLocation(tappedLocation);
    };

    console.log('rendering');


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.mapContainer}>
                <MapView
                    style={styles.mapStyle}
                    initialRegion={mapRegion}
                    region={mapRegion}
                    mapType="standard"
                    onPress={handleMapPress}
                    loadingEnabled
                    loadingIndicatorColor={colors.themeColor}
                    loadingBackgroundColor={colors.black}
                >
                    {markerLocation && (
                        <Marker
                            coordinate={markerLocation}
                            title="Tapped Location"
                            description="This is where you tapped on the map."
                        />
                    )}
                    {location?.coords && (
                        <Marker
                            coordinate={{
                                latitude: location?.coords?.latitude,
                                longitude: location?.coords?.longitude,
                            }}
                            title="Your Location"
                            description="This is where you are."
                        >
                            <Image source={imagePath.homeMarker} style={{ width: 50, height: 50 }} />
                        </Marker>
                    )}
                </MapView>
                {address && (
                    <Animated.View entering={FadeInUp.springify().delay(300)} style={styles.addressBar}>
                        <Pressable>
                            <Text style={styles.addressText}>{address}</Text>
                        </Pressable>
                    </Animated.View>
                )}
            </View>
        </TouchableWithoutFeedback>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    mapContainer: {
        flex: 1,
    },
    mapStyle: {
        flex: 1,
    },
    addressBar: {
        position: 'absolute',
        top: 0,
        left: 20,
        right: 20,
        zIndex: 9999,
        backgroundColor: colors.themeColor,
        padding: 12,
        borderRadius: 8,
        alignSelf: 'center',
        marginTop: 40,
        elevation: 5,
    },
    addressText: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: '600',
    },
});
