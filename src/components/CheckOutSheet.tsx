import { Alert, Dimensions, Image, Linking, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import Animated, { FadeIn, FadeOut, SlideInDown, SlideInRight, ZoomIn, ZoomInEasyDown, ZoomInEasyUp, ZoomOutEasyDown } from 'react-native-reanimated'
import colors from '../constants/colors'
import ImageButton from './ImageButton'
import imagePath from '../assets/imagePath'
import ButtonComp from './ButtonComp'
import { height } from '../helperFunctions/utils'
import DeliveryComponent from './DeliveryComponent'
import PaymentComponent from './PaymentComponent'
import CostComponent from './CostComponent'
import { useAppSelector } from '../redux/hooks'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const CheckOutModal = React.memo(({
    onClose,
}: {
    onClose: () => void
}) => {

    const cart = useAppSelector(state => state.cartSlice)
    const totalCost = cart.reduce((sum, item) => sum + (item.item.cost * item.count), 0)


    const [delivery, setDelivery] = useState<'pay' | 'cod'>('pay');
    const deliveryText = delivery === 'cod' ? 'Cash On Delivery' : 'Pay Online';

    const [currentScreen, setCurrentScreen] = useState<'main' | 'delivery' | 'payment' | 'cost'>('main');
    const [loading, setLoading] = useState(false);
    const [paymentError, setPaymentError] = useState(false);

    function GoToMain() {
        setCurrentScreen('main')
    }

    const renderScreen = () => {
        switch (currentScreen) {
            case 'delivery':
                return <DeliveryComponent onBack={GoToMain} delivery={delivery} setDelivery={setDelivery} />
            case 'payment':
                return <PaymentComponent onBack={GoToMain} amount={totalCost} />
            case 'cost':
                return <CostComponent onBack={GoToMain} cost={0} />
            default:
                return <View />;
        }
    }

    function handlePress(){
        setPaymentError(true)
    }

    return (
        <React.Fragment>
            <AnimatedPressable
                entering={FadeIn.duration(500)}
                exiting={FadeOut.duration(400)}
                onPress={() => !loading && onClose()}
                disabled={currentScreen !== 'main'}
                style={styles.backDrop}
            />
            <Animated.View
                entering={SlideInDown.duration(500)}
                exiting={ZoomOutEasyDown.duration(400)}
                style={styles.modalContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Checkout</Text>
                    <ImageButton imgSrc={imagePath.cross} imgStyle={{ tintColor: colors.black }} onPress={onClose} disabled={loading} />
                </View>
                <Pressable
                    android_ripple={{ color: colors.grey1 }}
                    style={styles.itemContainer}
                    onPress={() => setCurrentScreen('delivery')}
                >
                    <Text style={styles.itemText}>Delivery</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.rightText}>{deliveryText ?? 'Select Method'}</Text>
                        <Image source={imagePath.right_arrow} />
                    </View>
                </Pressable>

                <Pressable
                    android_ripple={{ color: colors.grey1 }}
                    style={styles.itemContainer}
                    onPress={() => setCurrentScreen('payment')}
                >
                    <Text style={[styles.itemText, paymentError && { color: 'red' }]}>Payment</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={imagePath.upi} style={{ marginRight: 10, height: 20, width: 40, }} />
                        <Image source={imagePath.right_arrow} />
                    </View>
                </Pressable>

                <Pressable
                    android_ripple={{ color: colors.grey1 }}
                    style={styles.itemContainer}
                    onPress={() => setCurrentScreen('cost')}
                >
                    <Text style={styles.itemText}>Total Cost</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.rightText}>₹{totalCost}</Text>
                        <Image source={imagePath.right_arrow} />
                    </View>
                </Pressable>
                <View style={styles.tncContainer}>
                    <Text style={{ color: colors.grey, fontWeight: '400' }}>
                        By placing an order you agree to our
                        <Text style={{ color: colors.black, fontWeight: '500' }}> Terms </Text>
                        <Text style={{ color: colors.grey, fontWeight: '400' }}> and </Text>
                        <Text style={{ color: colors.black, fontWeight: '500' }}> Conditions</Text>
                    </Text>
                </View>
                <ButtonComp
                    title='Place Order'
                    mainViewStyle={{ bottom: 30, }}
                    isAnimated
                    loading={loading}
                    setLoading={setLoading}
                    onPress={handlePress}
                />
            </Animated.View>

            {renderScreen()}

        </React.Fragment>
    )
})

export default CheckOutModal

const styles = StyleSheet.create({
    backDrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.backDrop,
    },
    modalContainer: {
        position: 'absolute',
        top: height * 0.5,
        left: 0,
        right: 0,
        bottom: 0,
        borderTopStartRadius: 20,
        borderTopEndRadius: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.white,
        zIndex: 10,
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey2
    },
    headerText: {
        fontSize: 24,
        fontWeight: '600'
    },
    itemText: {
        fontSize: 18,
        fontWeight: '600',
        color: colors.grey
    },
    rightText: {
        fontSize: 16,
        fontWeight: '500',
        marginRight: 10,
    },
    itemContainer: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 6,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey2
    },
    tncContainer: {
        width: '70%',
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 20,
    },
})
