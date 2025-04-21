import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../constants/colors";
import ImageButton from "./ImageButton";
import imagePath from "../assets/imagePath";
import React from "react";
import actions from "../redux/actions";
import { useAppSelector } from "../redux/hooks";


function ItemComponent({
    item,
    index,
}: {
    item: CartItem,
    index: number,
}) {

    const cart = useAppSelector(state => state.cartSlice)
    const isPresent = cart.find(cart => cart.item.id === item.id)
    const favs = useAppSelector(state => state.favSlice)
    const isFav = favs.includes(item.id);

    function Increase() {
        actions.IncreaseCount(item.id)
    }
    function Decrease() {
        actions.DecreaseCount(item.id)
    }
    function AddToCart() {
        actions.addToCart(item);
    }
    function ToggleFav() {
        actions.ToggleFav(item.id)
    }



    return (
        <View style={styles.container} key={index}>
            <ImageButton imgSrc={isFav ? imagePath.heart_red : imagePath.favourite} imgStyle={[styles.favIcon]} onPress={ToggleFav} vibrate />
            <Image source={item.path} style={styles.imageStyle} />
            <View style={{ marginTop: 20, marginHorizontal: 10, }}>
                <Text style={styles.titleText}>{item?.name ?? ''}</Text>
                <Text style={styles.quantityText}>{item?.quantity ?? ''}</Text>
            </View>
            <View style={styles.footer}>
                <Text style={{ fontSize: 18, fontWeight: '600' }}>₹{item?.cost ?? ''}</Text>
                {!isPresent ? <ImageButton imgSrc={imagePath.add} onPress={AddToCart} vibrate /> :
                    <View style={styles.counterView}>
                        <ImageButton
                            imgSrc={imagePath.descrease}
                            imgStyle={styles.counterImage}
                            onPress={Decrease}
                            vibrate
                        />
                        <Text style={{ color: colors.white }}>{isPresent?.count ?? ''}</Text>
                        <ImageButton
                            imgSrc={imagePath.increase}
                            imgStyle={styles.counterImage}
                            onPress={Increase}
                            vibrate
                        />
                    </View>}
            </View>
        </View>
    )
}
export default React.memo(ItemComponent)

const styles = StyleSheet.create({
    container: {
        height: 230,
        width: 160,
        backgroundColor: colors.white,
        margin: 10,
        borderWidth: 1,
        borderColor: colors.grey1,
        borderRadius: 12,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    imageStyle: {
        height: 60,
        width: 90,
        marginTop: 20,
        alignSelf: 'center'
    },
    titleText: {
        fontWeight: '700',
        fontSize: 16,
        textAlign: 'left'
    },
    quantityText: {
        color: colors.grey,
        fontSize: 14,
        textAlign: 'left'
    },
    footer: {
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 10,
    },
    counterView: {
        flexDirection: 'row',
        height: 47,
        width: 80,
        padding: 10,
        backgroundColor: colors.themeColor,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 20,
    },
    counterImage: {
        height: 18,
        width: 18,
        tintColor: colors.white
    },
    favIcon: {
        height: 20,
        width: 20,
        marginLeft: 120,
        marginTop: 10,
    }

})
