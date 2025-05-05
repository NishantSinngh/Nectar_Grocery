import {
    Pressable,
    StyleSheet,
    Text,
    View
} from 'react-native'
import React, { useEffect, useState } from 'react'
import Animated, {
    FadeIn,
    FadeOut,
    SlideInUp,
    SlideOutUp,
} from 'react-native-reanimated'
import colors from '../constants/colors'
import { height, width } from '../helperFunctions/utils'
import RootSiblings from 'react-native-root-siblings'



const AnimatedPressable = Animated.createAnimatedComponent(Pressable)

const LogoutModal = ({
    onClose,
    onPress,
}: {
    onClose: () => void
    onPress: () => void
}) => {

    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setDisabled(false), 500);
        return () => clearTimeout(timer);
    }, []);


    function OnPress() {
        onPress()
        onClose()
    }

    return (
        <React.Fragment>
            <AnimatedPressable
                entering={FadeIn.duration(400)}
                exiting={FadeOut.duration(400)}
                onPress={() => onClose()}
                style={styles.backDrop}
                disabled={disabled}
            />
            <Animated.View
                entering={SlideInUp.duration(400)}
                exiting={SlideOutUp.duration(200)}
                style={styles.leftRope} />
            <Animated.View
                entering={SlideInUp.duration(400)}
                exiting={SlideOutUp.duration(200)}
                style={styles.rightRope} />
            <Animated.View
                entering={SlideInUp.springify().damping(13)}
                exiting={SlideOutUp.duration(200)}
                style={styles.modalContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Logout</Text>
                </View>
                <View style={styles.logoutContent}>
                    <Text style={styles.warnText}>Are you sure you want to log out?</Text>
                    <Pressable style={[styles.button, styles.cancelButton]} onPress={onClose}>
                        <Text style={styles.cancelText}>Cancel</Text>
                    </Pressable>

                    <Pressable style={[styles.button, styles.logoutButton]} onPress={OnPress}>
                        <Text style={styles.logoutText}>Logout</Text>
                    </Pressable>
                </View>
            </Animated.View>
        </React.Fragment>
    )
}

let logoutSibling: RootSiblings | null = null

export const showLogoutModal = (onPress: () => void) => {
    if (logoutSibling) logoutSibling.destroy()

    logoutSibling = new RootSiblings(
        <LogoutModal
            onClose={() => {
                if (logoutSibling) {
                   logoutSibling?.destroy()
                }
            }}
            onPress={onPress}
        />
    )
}

const styles = StyleSheet.create({
    backDrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.backDrop,
    },
    modalContainer: {
        position: 'absolute',
        top: height * 0.37,
        left: width * 0.1,
        right: width * 0.1,
        bottom: height * 0.36,
        borderRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: colors.white,
        zIndex: 10,
    },
    headerContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey2
    },
    headerText: {
        fontSize: 24,
        fontWeight: '600'
    },
    logoutContent: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    warnText: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 20,
    },
    button: {
        width: width * 0.7,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
        margin: 5,
    },
    cancelButton: {
        backgroundColor: '#E0E0E0',
    },
    logoutButton: {
        backgroundColor: '#FF4C4C',
    },
    cancelText: {
        color: '#333',
        fontWeight: '600',
    },
    logoutText: {
        color: '#fff',
        fontWeight: '600',
    },
    leftRope: {
        position: 'absolute',
        top: 0,
        left: width * 0.2,
        bottom: height * 0.37,
        backgroundColor: colors.white,
        height: height * 0.5,
        width: 5,
        elevation: 4,
    },
    rightRope: {
        position: 'absolute',
        top: 0,
        right: width * 0.2,
        bottom: height * 0.37,
        backgroundColor: colors.white,
        height: height * 0.5,
        width: 5,
        elevation: 4,
    }
})