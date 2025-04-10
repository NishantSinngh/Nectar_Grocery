import { Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const ButtonComp = ({
    title,
    price,
    mainViewStyle,
}: {
    title: string,
    price?: number
    mainViewStyle?: StyleProp<ViewStyle>
}) => {
    return (
        <View style={[styles.buttonContainer, mainViewStyle]}>
            <Pressable android_ripple={{ color: colors.ripple }} style={styles.button} >
                <Text style={styles.titleStyle} >{title ?? "Button"}</Text>
                {price && <View style={styles.priceTextContainer}>
                    <Text style={styles.priceText}>₹{price ?? "Price"}</Text>
                </View>}
            </Pressable>
        </View>
    )
}

export default ButtonComp

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        height: 67,
        width: "90%",
        bottom: 100,
        backgroundColor: colors.themeColor,
        borderRadius: 18,
        overflow: 'hidden',
    },
    button: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        color: colors.buttonText
    },
    priceTextContainer: {
        position: "absolute",
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: "100%",
        height: "100%",
        paddingRight: 20,
    },
    priceText: {
        backgroundColor: "#489E67",
        padding: 5,
        borderRadius: 4,
        fontSize: 12,
        color: colors.buttonText
    }
})