import { Image, Pressable, StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import imagePath from '../assets/imagePath'

const AppHeader = React.memo(({
    title = 'App Header',
    isBack = false,
    isFilter = false,
    isShare = false,
    onBackPress,
    onRightPress,
    mainViewStyle,
}: {
    title?: string,
    isBack?: boolean,
    isFilter?: boolean,
    isShare?: boolean,
    onRightPress?: () => void,
    onBackPress?: () => void,
    mainViewStyle?: StyleProp<ViewStyle>,
}) => {
    return (
        <View style={[styles.container, mainViewStyle]}>
            <View style={styles.imageContainer}>
                <Pressable hitSlop={30} onPress={onBackPress} disabled={!isBack}>
                    <Image source={imagePath.back} style={{ opacity: isBack ? 1 : 0 }} />
                </Pressable>
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.imageContainer}>
                <Pressable hitSlop={30} onPress={onRightPress} disabled={!isFilter && !isShare}>
                    <Image source={isShare ? imagePath.share : imagePath.filter} style={{ opacity: isShare || isFilter ? 1 : 0 }} />
                </Pressable>
            </View>
        </View>
    )
})

export default AppHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 12,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
})