import React, { useRef, useState } from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';
import actions from '../redux/actions';

const Slider = () => {
    const [isOn, setIsOn] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;

    const toggleSwitch = () => {
        Animated.timing(animation, {
            toValue: isOn ? 0 : 1,
            duration: 300,
            useNativeDriver: true,
        }).start(() => {
            setIsOn(!isOn);
            actions.ToggleDarkMode()
        });
    };

    

    const interpolatedBackground = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#DDE4E7', "#47CC6B"],
    });

    const circleTranslate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 23],
    });

    return (
        <TouchableWithoutFeedback onPress={toggleSwitch}>
            <Animated.View
                style={[
                    styles.switchBackground,
                    { backgroundColor: interpolatedBackground },
                ]}
            >
                <Animated.View
                    style={[styles.circle, { transform: [{ translateX: circleTranslate }] }]}
                />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    switchBackground: {
        width: 50,
        height: 28,
        borderRadius: 30,
        justifyContent: 'center',
        padding: 2,
    },
    circle: {
        width: 22,
        height: 22,
        elevation: 2,
        borderRadius: 10.5,
        backgroundColor: '#fff',
    },
});

export default Slider;
