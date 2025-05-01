import React, { useEffect } from 'react';
import {
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    Pressable,
} from 'react-native';
import Animated, { FadeInUp, FadeOutUp } from 'react-native-reanimated';
import RootSiblings from 'react-native-root-siblings';
import colors from '../constants/colors';

let toast: RootSiblings | null = null;

const TOAST_DURATION = 3000;

interface ToastProps {
    message: string;
    onClose: () => void;
    containerStyle?: StyleProp<ViewStyle>;
    duration?: number;
}

const Toast: React.FC<ToastProps> = ({
    message,
    onClose,
    containerStyle,
    duration = TOAST_DURATION,
}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);

        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <Animated.View entering={FadeInUp.springify()} exiting={FadeOutUp} style={[styles.toastContainer, containerStyle]}>
            <Pressable onPressIn={() => onClose()}>
                <Text style={styles.toastText}>{message}</Text>
            </Pressable>
        </Animated.View >
    );
};

export function showToast(
    message: string,
    options?: {
        containerStyle?: StyleProp<ViewStyle>;
        duration?: number;
    }
) {
    if (toast) toast.destroy();

    toast = new RootSiblings(
        <Toast
            message={message}
            containerStyle={options?.containerStyle}
            duration={options?.duration}
            onClose={() => {
                toast?.destroy();
                toast = null;
            }}
        />
    );
}

const styles = StyleSheet.create({
    toastContainer: {
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
    toastText: {
        color: colors.white,
        textAlign: 'center',
        fontWeight: '600',
    },
});
