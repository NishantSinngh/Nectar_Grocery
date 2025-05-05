import { useState, useEffect } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { Alert, Platform } from 'react-native';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { useNavigation } from '@react-navigation/native';
import NavigationStrings from '../../constants/NavigationStrings';
import { getAddress } from '../../helperFunctions/utils';
import actions from '../../redux/actions';

export function useHomeScreen() {
  const [currentPosition, setCurrentPosition] = useState<string>('');
  const [coords, setCoords] = useState<{ latitude: number, longitude: number } | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  useEffect(() => {
    if (coords && currentPosition) {
      actions.onSaveUserLocation({ coords, address: currentPosition });
    }
  }, [coords, currentPosition]);

  const navigation = useNavigation<any>()

  const requestLocationPermission = async () => {
    setLoading(true)
    try {
      let permissionResult;
      if (Platform.OS === "android") {
        permissionResult = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      } else if (Platform.OS === "ios") {
        permissionResult = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
      }

      if (permissionResult === RESULTS.GRANTED) {
        getCurrentLocation();
      } else {
        Alert.alert(
          "Permission Denied",
          "Location permission is required to access your location."
        );
      }
    } catch (error) {
      setLoading(false)
      console.error("Permission Request error: ", error);
    } finally {
      setLoading(false)
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      async (position) => {

        const location = { latitude: position?.coords?.latitude, longitude: position?.coords?.longitude }
        
        setCoords(location)
        const address = await getAddress(location)
        setCurrentPosition(address ?? '')

        actions.onSaveUserLocation({
          coords: location,
          address: address ?? '',
        });

      },
      (error) => {
        Alert.alert("Unable to fetch location", error.message,
          [
            {
              text: 'select location on map',
              onPress: () => navigation.navigate(NavigationStrings.MAP_SCREEN)
            }
          ]);
      }
    );
  };


  return { loading, currentPosition };
}
