import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import imagePath from '../assets/imagePath'
import colors from '../constants/colors'

const FavouriteItem = React.memo(({
    item,
    onPress,
}: {
    item: CartItem,
    onPress?: () => void
}) => {
    return (
        <Pressable
            android_ripple={{ color: colors.grey1 }}
            style={styles.container}>
            <Image source={item.path} style={styles.itemImage} />
            <View style={styles.innerContainer}>
                <View>
                    <Text style={styles.text}>{item?.name ?? "Name"}</Text>
                    <Text style={styles.subText}>{item?.quantity ?? "Quantity"}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.priceText}>₹{item?.cost ?? "Price"}</Text>
                    <Image source={imagePath.right_arrow} style={{ marginLeft: 10, }} />
                </View>
            </View>
        </Pressable>
    )
})

export default FavouriteItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey1,
        marginHorizontal: 20,
    },
    itemImage: {
        marginLeft: 5,
        marginRight: 20,
        width: 50,
        height: 90,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    subText: {
        fontSize: 14,
        color: colors.grey
    },
    priceText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

})