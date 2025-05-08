import { Image, Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import Animated, { FadeIn, FadeInDown, FadeInRight, FadeInUp, FadeOutRight } from 'react-native-reanimated';
import colors from '../../constants/colors';
import { generateLocationId, getAddress, height } from '../../helperFunctions/utils';
import imagePath from '../../assets/imagePath';
import { useAppSelector } from '../../redux/hooks';
import ButtonComp from '../../components/ButtonComp';
import actions from '../../redux/actions';
import ImageButton from '../../components/ImageButton';

const MapScreen = () => {
    const { location } = useAppSelector(state => state.authSlice);
    const MultipleLocation = useAppSelector(state => state.locSlice);
    console.log({ MultipleLocation });

    const [markerLocation, setMarkerLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [address, setAddress] = useState<string>('');
    const [mapRegion, setMapRegion] = useState({
        latitude: location?.coords?.latitude ?? 26.9124,
        longitude: location?.coords?.longitude ?? 75.7873,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
    });
    const [isVisible, setIsVisible] = useState<boolean>(false)

    function handleLocationsVisible() {
        setIsVisible(prev => !prev)
    }

    useEffect(() => {
        if (markerLocation) {
            getAddress(markerLocation)
                .then((address) => setAddress(address || ''));
        } else if (location?.address) {
            setAddress(location?.address);
        }
    }, [markerLocation, location]);


    const handleMapPress = (e: any) => {
        if (isVisible) return;
        const tappedLocation = e.nativeEvent.coordinate;
        setMarkerLocation(tappedLocation);
    };

    const handleMultipleLocation = () => {
        const id = generateLocationId(markerLocation);
        const locData: MultipleLocation[] = [{
            id,
            coords: markerLocation,
            address
        }];

        actions.onSaveMultipleLocation(locData);
    };

    console.log('maps rendering <===');


    return (
        // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.mapContainer}>
            <MapView
                style={styles.mapStyle}
                initialRegion={mapRegion}
                region={mapRegion}
                mapType="standard"
                onPress={handleMapPress}
                loadingEnabled
                onTouchStart={() => isVisible && handleLocationsVisible()}
                loadingIndicatorColor={colors.themeColor}
                loadingBackgroundColor={colors.black}
            >
                <Marker
                    coordinate={{ latitude: 26.913545321521205, longitude: 75.68323563784361 }}
                    title="Store Location"
                    description="From here order will be delivered."
                >
                    <Image source={imagePath.store_loc} style={{ width: 50, height: 50 }} />
                </Marker>
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
            {markerLocation && (
                <ButtonComp
                    title='Submit'
                    mainViewStyle={styles.submitButton}
                    onPress={handleMultipleLocation}
                />
            )}
            {MultipleLocation.length > 0 && (
                <Animated.View entering={FadeIn} style={styles.ellipses}>
                    <ImageButton
                        imgSrc={imagePath.more}
                        imgStyle={{ height: 30, width: 30 }}
                        onPress={handleLocationsVisible}
                    />
                </Animated.View>
            )}
            {isVisible && <Animated.ScrollView entering={FadeInRight} exiting={FadeOutRight} style={styles.locationsContainer} showsVerticalScrollIndicator={false}>
                {MultipleLocation.map((item, index) => {
                    const last = MultipleLocation.length - 1
                    return (
                        <Animated.View
                            entering={FadeInRight.delay(index * 150)}
                            key={index}
                            style={[styles.locItem, { borderBottomWidth: index == last ? 0 : 1 }]}
                        >
                            <Text style={styles.addressText}>{item.address}</Text>
                        </Animated.View>
                    )
                })}
            </Animated.ScrollView>}
        </View>
        // </TouchableWithoutFeedback>
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
        top: 40,
        left: 20,
        right: 20,
        zIndex: 9999,
        backgroundColor: colors.themeColor,
        padding: 12,
        borderRadius: 8,
        alignSelf: 'center',
        elevation: 5,
    },
    ellipses: {
        position: 'absolute',
        top: 120,
        right: 20,
        zIndex: 9999,
        backgroundColor: colors.themeColor,
        borderRadius: 8,
        padding: 4,
        alignSelf: 'center',
        elevation: 5,
    },
    locationsContainer: {
        position: 'absolute',
        top: 160,
        left: 20,
        right: 20,
        zIndex: 9999,
        backgroundColor: colors.themeColor,
        borderRadius: 8,
        padding: 4,
        alignSelf: 'center',
        elevation: 5,
        maxHeight: height * 0.5
    },
    locItem: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderBottomColor: colors.grey1,
    },
    submitButton: {
        position: 'absolute',
        bottom: 40,
        backgroundColor: colors.themeColor,
        alignSelf: 'center',
        elevation: 5,
    },
    addressText: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: '600',
    },
});
