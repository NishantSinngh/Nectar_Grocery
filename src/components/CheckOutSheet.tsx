import { Alert, Dimensions, Image, Linking, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import Animated, { FadeIn, FadeOut, SlideInDown, SlideInRight, ZoomIn, ZoomOutEasyDown } from 'react-native-reanimated'
import colors from '../constants/colors'
import ImageButton from './ImageButton'
import imagePath from '../assets/imagePath'
import ButtonComp from './ButtonComp'
import { generateUpiUrl } from '../helperFunctions/utils'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const { height, width } = Dimensions.get('window');
const CheckOutModal = ({
    isVisible,
    onClose,
}: {
    isVisible: boolean
    onClose: () => void
}) => {

    const [delivery, setDelivery] = useState<'pay' | 'cod'>('pay');
    const deliveryText = delivery === 'cod' ? 'Cash On Delivery' : 'Pay Online';

    const [currentScreen, setCurrentScreen] = useState<'main' | 'delivery' | 'payment' | 'cost'>('main');
    const [loading, setLoading] = useState(false);


    const openUpiPayment = async (paymentParams: PaymentParams) => {
        const url = generateUpiUrl(paymentParams);
        try {
            await Linking.openURL(url);
        } catch (error) {
            Alert.alert('Error', 'An error occurred while trying to open the payment app.');
        }
    };

    const paymentParams = {
        pa: '9929770168@ptyes',
        pn: 'Nishant Singh',
        tr: 'TXN123456',                // Transaction reference ID
        am: 99999.00,
        cu: 'INR',                      // Currency
        tn: 'Payment for order #1234'   // Transaction note
    };


    return (
        <React.Fragment>
            <AnimatedPressable
                entering={FadeIn.duration(300)}
                exiting={FadeOut.duration(300)}
                onPress={() => !loading && onClose()}
                disabled={currentScreen !== 'main'}
                style={styles.backDrop}
            />
            <Animated.View
                entering={SlideInDown}
                exiting={ZoomOutEasyDown}
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
                    <Text style={styles.itemText}>Payment</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={imagePath.upi} style={{ marginRight: 10, height: 20, width: 40, }} />
                        <Image source={imagePath.right_arrow} />
                    </View>
                </Pressable>

                {/* <Pressable android_ripple={{ color: colors.grey1 }} style={styles.itemContainer}>
                    <Text style={styles.itemText}>Promo Code</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.rightText}>Pick Discount</Text>
                        <Image source={imagePath.right_arrow} />
                    </View>
                </Pressable> */}

                <Pressable
                    android_ripple={{ color: colors.grey1 }}
                    style={styles.itemContainer}
                    onPress={() => setCurrentScreen('cost')}
                >
                    <Text style={styles.itemText}>Total Cost</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.rightText}>₹50000</Text>
                        <Image source={imagePath.right_arrow} />
                    </View>
                </Pressable>
                <View style={styles.tncContainer}>
                    <Text style={{ color: colors.grey, fontWeight: '400' }}>By placing an order you agree to our <Text style={{ color: colors.black, fontWeight: '500' }}>Terms </Text>
                        and
                        <Text style={{ color: colors.black, fontWeight: '500' }}> Condition</Text>
                    </Text>
                </View>
                <ButtonComp
                    title='Place Order'
                    mainViewStyle={{ bottom: 30, }}
                    isAnimated
                    loading={loading}
                    setLoading={setLoading}
                />
            </Animated.View>


            {currentScreen === 'delivery' && (
                <Animated.View
                    entering={SlideInRight}
                    exiting={FadeOut.duration(200)}
                    style={[StyleSheet.absoluteFillObject, styles.secondScreen]}
                >
                    <View style={styles.innerViewHeader}>
                        <ImageButton
                            imgSrc={imagePath.back}
                            imgStyle={{ marginRight: 20 }}
                            onPress={() => setCurrentScreen('main')} />
                        <Text style={styles.innerViewHeaderText}>Delivery</Text>
                    </View>
                    <Pressable style={styles.deliveryItem} onPress={() => setDelivery('pay')} >
                        <View style={styles.circle} >
                            {delivery === 'pay' && <Animated.View entering={ZoomIn.springify()} style={styles.dotView} />}
                        </View>
                        <Text style={styles.payText}>Pay Online</Text>
                    </Pressable>

                    <Pressable style={styles.deliveryItem} onPress={() => setDelivery('cod')} >
                        <View style={styles.circle} >
                            {delivery === 'cod' && <Animated.View entering={ZoomIn.springify()} style={styles.dotView} />}
                        </View>
                        <Text style={styles.payText}>Cash on delivery</Text>
                    </Pressable>
                </Animated.View>
            )}

            {currentScreen === 'payment' && (
                <Animated.View
                    entering={SlideInRight}
                    exiting={FadeOut.duration(200)}
                    style={[StyleSheet.absoluteFillObject, styles.secondScreen]}
                >
                    <View style={styles.innerViewHeader}>
                        <ImageButton
                            imgSrc={imagePath.back}
                            imgStyle={{ marginRight: 20 }}
                            onPress={() => setCurrentScreen('main')} />
                        <Text style={styles.innerViewHeaderText}>Payment</Text>
                    </View>
                    <View>
                        <ImageButton
                            imgSrc={imagePath.paytm}
                            imgStyle={{ height: 80, width: 80, }}
                            onPress={() => openUpiPayment(paymentParams)}
                        />
                        <ImageButton
                            imgSrc={imagePath.gpay}
                            imgStyle={{ height: 80, width: 80, }}
                            onPress={() => openUpiPayment(paymentParams)}
                        />
                        <ImageButton
                            imgSrc={imagePath.phonepe}
                            imgStyle={{ height: 80, width: 80, }}
                            onPress={() => openUpiPayment(paymentParams)}
                        />
                    </View>
                </Animated.View>
            )}

            {currentScreen === 'cost' && (
                <Animated.View
                    entering={SlideInRight}
                    exiting={FadeOut.duration(200)}
                    style={[StyleSheet.absoluteFillObject, styles.secondScreen]}
                >
                    <View style={styles.innerViewHeader}>
                        <ImageButton
                            imgSrc={imagePath.back}
                            imgStyle={{ marginRight: 20 }}
                            onPress={() => setCurrentScreen('main')} />
                        <Text style={styles.innerViewHeaderText}>Cost</Text>
                    </View>
                </Animated.View>
            )}

        </React.Fragment>
    )
}

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
    innerViewHeaderText: {
        fontSize: 24,
        fontWeight: '600',
        color: colors.black,
    },
    secondScreen: {
        backgroundColor: colors.white,
        zIndex: 20,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'flex-start',
        top: height * 0.5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,

    },
    innerViewHeader: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 40,
    },
    deliveryItem: {
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    circle: {
        height: 24,
        width: 24,
        borderWidth: 2,
        borderColor: colors.grey,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    dotView: {
        height: 16,
        width: 16,
        borderRadius: 10,
        backgroundColor: colors.themeColor
    },
    payText: {
        fontSize: 18,
        fontWeight: '600'
    },
})
