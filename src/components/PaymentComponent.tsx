import { Alert, Linking, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useMemo } from 'react'
import Animated, { FadeInRight, FadeOutRight } from 'react-native-reanimated'
import ImageButton from './ImageButton'
import imagePath from '../assets/imagePath'
import colors from '../constants/colors'
import { generateUpiUrl, height } from '../helperFunctions/utils'

const PaymentComponent = React.memo(({
    onBack
}: {
    onBack: () => void
}) => {

    const openUpiPayment = useCallback(async (paymentParams: PaymentParams) => {
        const url = generateUpiUrl(paymentParams);
        try {
            await Linking.openURL(url);
        } catch (error) {
            Alert.alert('Error', 'An error occurred while trying to open the payment app.');
        }
    }, []);

    const paymentParams = useMemo(() => ({
        pa: '9929770168@ptyes',
        pn: 'Nishant Singh',
        tr: 'TXN123456',
        am: 99999.00,
        cu: 'INR',
        tn: 'Payment for order #1234'
    }), []);

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
                <Text style={styles.innerViewHeaderText}>Payment</Text>
            </View>
            <View>
                <ImageButton
                    imgSrc={imagePath.paytm}
                    imgStyle={styles.imageStyle}
                    onPress={() => openUpiPayment(paymentParams)}
                />
                <ImageButton
                    imgSrc={imagePath.gpay}
                    imgStyle={styles.imageStyle}
                    onPress={() => openUpiPayment(paymentParams)}
                />
                <ImageButton
                    imgSrc={imagePath.phonepe}
                    imgStyle={styles.imageStyle}
                    onPress={() => openUpiPayment(paymentParams)}
                />
            </View>
        </Animated.View>
    )
})

export default PaymentComponent

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
    imageStyle: { height: 80, width: 80, }
})