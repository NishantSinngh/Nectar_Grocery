import { Image, ImageSourcePropType, ImageStyle, Pressable, StyleProp, StyleSheet, TouchableOpacity, Vibration } from 'react-native'
import React from 'react'

const ImageButton = React.memo(({
    imgSrc: src,
    imgStyle,
    onPress,
    disabled,
}: {
    imgSrc: ImageSourcePropType
    imgStyle?: StyleProp<ImageStyle>
    onPress?: () => void
    disabled?: boolean
}) => {

    function OnPress() {
        Vibration.vibrate(50)
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