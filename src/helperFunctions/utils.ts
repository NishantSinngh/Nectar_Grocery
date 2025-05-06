

// upi://pay — UPI scheme for payment intent.

import { Dimensions } from "react-native";
import { showToast } from "../components/Toast";
import Geocoder from "react-native-geocoding";
import { GOOGLE_MAP_KEY } from "@env";

// pa — Payee address (VPA or UPI ID).

// pn — Payee name.

// tr — Transaction reference ID.

// am — Amount.

// cu — Currency (INR).

// tn — Transaction note.

export function generateUpiUrl({ pa, pn, tr, am, cu, tn }: PaymentParams) {
    const amount = am.toFixed(2);
    return `upi://pay?pa=${encodeURIComponent(pa)}&pn=${encodeURIComponent(pn)}&tr=${encodeURIComponent(tr)}&am=${encodeURIComponent(amount)}&cu=${encodeURIComponent(cu)}&tn=${encodeURIComponent(tn)}`;
};

export const APP_LOG = (message?: any, ...optionalParams: any[]) => {
    console.log(message, ...optionalParams);
};

export const { height, width } = Dimensions.get('window');

export const NotImplement = () => {
    showToast('Functionality not implemented yet.')
}


export async function getAddress(location: { latitude: number; longitude: number } | null) {
    Geocoder.init(GOOGLE_MAP_KEY);

    if (location && location.latitude !== undefined && location.longitude !== undefined) {

        try {
            const result = await Geocoder.from(location.latitude, location.longitude);
            return result?.results?.[0]?.formatted_address

        } catch (error) {
            console.error('Geocoder error:', error);
        } finally {
        }
    }
}

export const generateLocationId = (coords: { latitude: number, longitude: number } | null) => {
    if (!coords) return '';
    return `${coords.latitude}_${coords.longitude}`.replace(/\s+/g, '_');
};