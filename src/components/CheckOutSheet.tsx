import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { FadeIn, FadeOut, SlideInDown, ZoomOutEasyDown } from 'react-native-reanimated'
import colors from '../constants/colors'
import ImageButton from './ImageButton'
import imagePath from '../assets/imagePath'
import ButtonComp from './ButtonComp'

const AnimatedPressable = Animated.createAnimatedComponent(Pressable)
const { height, width } = Dimensions.get('window');
const CheckOutModal = ({
    isVisible,
    onClose,
}: {
    isVisible: boolean
    onClose: () => void
}) => {

    return (
        <React.Fragment>
            <AnimatedPressable
                entering={FadeIn.duration(300)}
                exiting={FadeOut.duration(300)}
                onPress={onClose}
                style={styles.backDrop}
            />
            <Animated.View
                entering={SlideInDown}
                exiting={ZoomOutEasyDown}
                style={styles.modalContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Checkout</Text>
                    <ImageButton imgSrc={imagePath.cross} imgStyle={{ tintColor: colors.black }} onPress={onClose} />
                </View>
                <Pressable android_ripple={{ color: colors.grey1 }} style={styles.itemContainer}>
                    <Text style={styles.itemText}>Delivery</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.rightText}>Select Method</Text>
                        <ImageButton imgSrc={imagePath.right_arrow} onPress={onClose} />
                    </View>
                </Pressable>
                <Pressable android_ripple={{ color: colors.grey1 }} style={styles.itemContainer}>
                    <Text style={styles.itemText}>Payment</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={imagePath.card} style={{ marginRight: 10, }} />
                        <ImageButton imgSrc={imagePath.right_arrow} onPress={onClose} />
                    </View>
                </Pressable>
                <Pressable android_ripple={{ color: colors.grey1 }} style={styles.itemContainer}>
                    <Text style={styles.itemText}>Promo Code</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.rightText}>Pick Discount</Text>
                        <ImageButton imgSrc={imagePath.right_arrow} onPress={onClose} />
                    </View>
                </Pressable>
                <Pressable android_ripple={{ color: colors.grey1 }} style={styles.itemContainer}>
                    <Text style={styles.itemText}>Total Cost</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.rightText}>₹50000</Text>
                        <ImageButton imgSrc={imagePath.right_arrow} onPress={onClose} />
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
                    isAnimated />
            </Animated.View>
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
        top: height * 0.42,
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
    }
})
