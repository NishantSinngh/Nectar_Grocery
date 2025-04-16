import { Image, ImageSourcePropType, ImageStyle, Pressable, StyleProp, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const ImageButton = ({
    imgSrc: src,
    imgStyle,
    onPress,
}: {
    imgSrc: ImageSourcePropType
    imgStyle?: StyleProp<ImageStyle>
    onPress?: () => void
}) => {
    return (
        <TouchableOpacity onPress={onPress} hitSlop={20}>
            <Image source={src} style={imgStyle}/>
        </TouchableOpacity>
    )
}

export default ImageButton

const styles = StyleSheet.create({})