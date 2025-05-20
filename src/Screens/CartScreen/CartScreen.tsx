import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../components/AppHeader'
import commonStyles from '../../helperFunctions/commonStyles'
import Spacer from '../../components/Spacer'
import ButtonComp from '../../components/ButtonComp'
import colors from '../../constants/colors'
import CartItem from '../../components/CartItem'
import actions from '../../redux/actions'
import { useAppSelector } from '../../redux/hooks'
import Animated, { ZoomIn } from 'react-native-reanimated'
import { showCheckOutModal } from '../../components/CheckOutSheet'

const CartScreen = () => {

    const cart = useAppSelector(state => state.cartSlice)
    const totalCost = cart.reduce((sum, item) => sum += (item.item.cost * item.count), 0)

    return (
        <>
            <View style={styles.appContainer}>
                <AppHeader mainViewStyle={commonStyles.appHeader} title='My Cart' />
                <FlatList
                    data={cart}
                    style={{ flex: 1, }}
                    contentContainerStyle={{ flexGrow: 1, }}
                    removeClippedSubviews={false}
                    ListFooterComponent={<Spacer space={180} />}
                    ListEmptyComponent={() => (
                        <Animated.View entering={ZoomIn.springify().delay(200)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 24 }}>Your cart is empty</Text>
                        </Animated.View>
                    )}
                    keyExtractor={(item) => String(item.item.id)}
                    renderItem={({ item }) => <CartItem item={item.item} count={item.count} />}
                />
            </View>
            <ButtonComp title='Go To Checkout' price={totalCost} onPress={showCheckOutModal} />
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