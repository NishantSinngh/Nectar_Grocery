import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'
import imagePath from '../assets/imagePath'

const ExploreItem = ({
    item,
    onPress
}: {
    item: { title: string, path: any }
    onPress: () => void
}) => {
    return (
        <View style={styles.container}>
            <Pressable
                onPress={onPress}
                style={{ ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center' }}
                android_ripple={{ color: colors.purpleOpacity }}>
                <Image source={imagePath.snacks_icon} style={{ alignSelf: 'center' }} />
                <Text style={styles.textStyle}>{item?.title ?? "Title"}</Text>
            </Pressable>
        </View>
    )
}

export default ExploreItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        borderWidth: 1,
        borderColor: colors.redBorder,
        backgroundColor: colors.redOpacity,
        margin: 8,
        borderRadius: 18,
        overflow: 'hidden'
    },
    textStyle: {
        fontWeight: '600',
        fontSize: 16,
        minHeight: 40,
        maxHeight: 40,
        maxWidth: 140,
        marginTop: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})