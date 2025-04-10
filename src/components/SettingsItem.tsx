import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import imagePath from '../assets/imagePath'
import colors from '../constants/colors'

const SettingsItem = React.memo(({
    item,
    onPress,
}: {
    item: { id: string, title: string, path: any },
    onPress?: () => void
}) => {
    return (
        <Pressable
            android_ripple={{ color: colors.grey1 }}
            style={styles.container}>
            <Image source={item.path} />
            <View style={styles.innerContainer}>
                <Text style={styles.text}>{item.title}</Text>
                <View>
                    <Image source={imagePath.right_arrow} />
                </View>
            </View>
        </Pressable>
    )
})

export default SettingsItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey1,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 20,
    },

})