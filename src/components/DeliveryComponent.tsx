import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Dispatch, SetStateAction } from 'react'
import Animated, { FadeIn, FadeInRight, FadeOut, FadeOutLeft, FadeOutRight, SlideInRight, ZoomIn } from 'react-native-reanimated'
import ImageButton from './ImageButton'
import imagePath from '../assets/imagePath'
import colors from '../constants/colors'
import { height } from '../helperFunctions/utils'

const DeliveryComponent = React.memo(({
    delivery,
    onBack,
    setDelivery
}: {
    delivery: 'pay' | 'cod'
    onBack: () => void
    setDelivery: Dispatch<SetStateAction<"pay" | "cod">>
}) => {
    return (
        <Animated.View
            entering={FadeInRight}
            exiting={FadeOutRight}
            style={[StyleSheet.absoluteFillObject, styles.secondScreen]}
        >
            <View style={styles.innerViewHeader}>
                <ImageButton
                    imgSrc={imagePath.back}
                    imgStyle={{ marginRight: 20 }}
                    onPress={onBack} />
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
    )
})

export default DeliveryComponent

const styles = StyleSheet.create({
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
        borderTopRightRadius: 60,
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