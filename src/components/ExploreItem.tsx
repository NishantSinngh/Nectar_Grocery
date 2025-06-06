import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { width } from '../helperFunctions/utils'

const ExploreItem = React.memo(({
    item,
    onPress
}: {
    item: { id: string, title: string, path: any, color: string, BorderColor: string }
    onPress: (id: string) => void
}) => {

    return (
        <View style={[styles.container, { borderColor: item.BorderColor, backgroundColor: item.color, }]}>
            <Pressable
                onPress={() => onPress(item.id)}
                style={{ ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center' }}
                android_ripple={{ color: item.color }}>
                <Image source={item.path} style={{ alignSelf: 'center' }} />
                <Text style={styles.textStyle}>{item?.title ?? "Title"}</Text>
            </Pressable>
        </View>
    )
})

export default ExploreItem

const styles = StyleSheet.create({
    container: {
        width: width * 0.46,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        borderWidth: 1,
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