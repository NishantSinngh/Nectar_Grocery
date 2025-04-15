import { Dimensions, Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeOut, SlideInDown, SlideOutDown } from 'react-native-reanimated'
import colors from '../constants/colors'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const { height, width } = Dimensions.get('window');
const CheckOutModal = ({
    isVisible,
    onClose,
}: {
    isVisible: boolean
    onClose: () => void
}) => {

    return (
        <React.Fragment>
            <AnimatedPressable
                entering={FadeIn.duration(300)}
                exiting={FadeOut.duration(300)}
                onPress={onClose}
                style={styles.backDrop}
            />
            <Animated.View
                entering={SlideInDown}
                exiting={SlideOutDown}
                style={styles.modalContainer}>
                <Text>CheckOutModal</Text>
                <Text>CheckOutModal</Text>
                <Text>CheckOutModal</Text>
                <Text>CheckOutModal</Text>
            </Animated.View>
        </React.Fragment>
    )
}

export default CheckOutModal

const styles = StyleSheet.create({
    backDrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.backDrop,
    },
    modalContainer: {
        position: 'absolute',
        top: height * 0.4,
        left: 0,
        right: 0,
        bottom: 0,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.white,
        zIndex: 10,

    },
})
