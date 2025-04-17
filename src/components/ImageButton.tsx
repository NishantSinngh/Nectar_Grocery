import { Image, ImageSourcePropType, ImageStyle, Pressable, StyleProp, StyleSheet, TouchableOpacity, Vibration } from 'react-native'
import React from 'react'

const ImageButton = React.memo(({
    imgSrc: src,
    imgStyle,
    onPress,
    disabled,
    vibrate
}: {
    imgSrc: ImageSourcePropType
    imgStyle?: StyleProp<ImageStyle>
    onPress?: () => void
    disabled?: boolean
    vibrate?: boolean
}) => {

    function OnPress() {

        vibrate && Vibration.vibrate(40)
        onPress && onPress()
    }

    return (
        <TouchableOpacity onPress={OnPress} hitSlop={20} disabled={disabled}>
            <Image source={src} style={imgStyle} />
        </TouchableOpacity>
    )
})

export default ImageButton

const styles = StyleSheet.create({})