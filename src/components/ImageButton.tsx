import { Image, ImageSourcePropType, ImageStyle, Pressable, StyleProp, StyleSheet } from 'react-native'
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
        <Pressable onPress={onPress}>
            <Image source={src} style={imgStyle}/>
        </Pressable>
    )
}

export default ImageButton

const styles = StyleSheet.create({})