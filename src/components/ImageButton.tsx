import { Image, ImageSourcePropType, ImageStyle, Pressable, StyleProp, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ImageButton = ({
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
    return (
        <TouchableOpacity onPress={onPress} hitSlop={20} disabled={disabled}>
            <Image source={src} style={imgStyle}/>
        </TouchableOpacity>
    )
}

export default ImageButton

const styles = StyleSheet.create({})