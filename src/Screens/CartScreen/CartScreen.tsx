import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppHeader from '../../components/AppHeader'
import commonStyles from '../../helperFunctions/commonStyles'
import imagePath from '../../assets/imagePath'
import Spacer from '../../components/Spacer'
import ButtonComp from '../../components/ButtonComp'
import colors from '../../constants/colors'
import CartItem from '../../components/CartItem'
import CheckOutModal from '../../components/CheckOutModal'
import actions from '../../redux/actions'

const CartScreen = () => {
    const DummyData = [
        {
            id: '1',
            name: 'Sprite Can',
            quantity: "300mL",
            price: 40000000,
            path: imagePath.sprite,

        },
        {
            id: '2',
            name: 'Pepsi Can',
            quantity: "300mL",
            price: 40,
            path: imagePath.pepsi,

        },
        {
            id: '3',
            name: 'Apple & Grape Juice',
            quantity: "2L",
            price: 200,
            path: imagePath.apple_juice,

        },
        {
            id: '4',
            name: 'Coca Cola Can',
            quantity: "300mL",
            price: 20,
            path: imagePath.coke,

        },
        {
            id: '5',
            name: 'Pepsi Can',
            quantity: "300mL",
            price: 20,
            path: imagePath.pepsi,

        },
        {
            id: '6',
            name: 'Pepsi Can',
            quantity: "300mL",
            price: 20,
            path: imagePath.pepsi,

        },
        {
            id: '7',
            name: 'Pepsi Can',
            quantity: "300mL",
            price: 20,
            path: imagePath.pepsi,

        },
    ]

    const [show, setShow] = useState<boolean>(false)

    function HandleBottomSheet() {
        setShow(prev => !prev)
    }


    const totalPrice = DummyData.reduce((sum, item) => sum += item.price, 0)
    return (
        <>
            <View style={styles.appContainer}>
                <AppHeader mainViewStyle={commonStyles.appHeader} title='My Cart' />
                <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                    <FlatList
                        scrollEnabled={false}
                        data={DummyData}
                        ListFooterComponent={<Spacer space={180} />}
                        ListEmptyComponent={<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top: "50%" }}>
                            <Text style={{ fontSize: 24 }}>You have no favourites</Text>
                        </View>}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <CartItem item={item} />}
                    />
                </ScrollView>
            </View>
            <ButtonComp title='Go To Checkout' price={totalPrice} onPress={() => actions.ToggleCheckoutSheet(true)} />
        </>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
    },
})