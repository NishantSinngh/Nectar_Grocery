import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import imagePath from '../assets/imagePath'
import colors from '../constants/colors'
import ImageButton from './ImageButton'
import actions from '../redux/actions'
import Animated, { FadeOutDown, FadeOutRight, SlideOutRight, ZoomOut, ZoomOutRight } from 'react-native-reanimated'

const CartItem = React.memo(({
    item,
    onPress,
    count = 0,
}: {
    item: CartItem;
    onPress?: () => void;
    count?: number
}) => {

    function RemoveItem() {
        actions.removeFromCart(item.id)
    }
    function Increase() {
        actions.IncreaseCount(item.id)
    }
    function Decrease() {
        actions.DecreaseCount(item.id)
    }

    return (
        <Animated.View exiting={FadeOutRight} style={styles.container}>
            <Image source={item.path} style={styles.itemImage} />
            <View style={styles.innerContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ flex: 1, }}>
                        <Text style={styles.text}>{item?.name ?? "Name"}</Text>
                        <Text style={styles.subText}>{item?.quantity ?? "Quantity"}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end' }}>
                        <ImageButton onPress={RemoveItem} imgSrc={imagePath.cross} imgStyle={{ marginLeft: 10, }} vibrate />
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={styles.countContainer}>
                        <ImageButton onPress={Decrease} imgSrc={imagePath.minus} vibrate />
                        <Text style={{ marginHorizontal: 10, fontSize: 16 }}>{count ?? 0}</Text>
                        <ImageButton onPress={Increase} imgSrc={imagePath.plus} vibrate />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Text style={styles.priceText}>₹{item?.cost ?? "Price"}</Text>
                    </View>
                </View>
            </View>
        </Animated.View>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 12,
    },

})