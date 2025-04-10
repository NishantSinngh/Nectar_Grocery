import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import imagePath from '../assets/imagePath'
import colors from '../constants/colors'
import ImageButton from './ImageButton'

const CartItem = React.memo(({
    item,
    onPress,
}: {
    item: { id: string, name: string, quantity: string, price: number, path: any, count?: number },
    onPress?: () => void
}) => {
    return (
        <View
            style={styles.container}>
            <Image source={item.path} style={styles.itemImage} />
            <View style={styles.innerContainer}>
                <View>
                    <Text style={styles.text}>{item?.name ?? "Name"}</Text>
                    <Text style={styles.subText}>{item?.quantity ?? "Quantity"}</Text>
                </View>
                <View style={styles.countContainer}>
                    <ImageButton onPress={() => console.log("minus")} imgSrc={imagePath.minus} />
                    <Text style={{ marginHorizontal: 10, fontSize: 16 }}>{item?.count ?? 0}</Text>
                    <ImageButton onPress={() => console.log("plus")} imgSrc={imagePath.plus} />
                </View>
            </View>
            <View style={{ height: "100%", justifyContent: 'space-between', alignItems: 'center' }}>
                <ImageButton imgSrc={imagePath.cross} imgStyle={{ marginLeft: 10, }} />
                <Text style={styles.priceText}>₹{item?.price ?? "Price"}</Text>
            </View>
        </View>
    )
})

export default CartItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 14,
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
        fontWeight: '400'
    },
    innerContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    countContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 12,
    },

})