import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useAppSelector } from '../../redux/hooks'
import Animated, { FadeInRight } from 'react-native-reanimated'
import colors from '../../constants/colors'
import AppHeader from '../../components/AppHeader'
import commonStyles from '../../helperFunctions/commonStyles'
import Spacer from '../../components/Spacer'

const AddressScreen = (props: any) => {
    const { navigation } = props
    const MultipleLocation = useAppSelector(state => state.locSlice)
    return (
        <>
            <AppHeader onBackPress={() => navigation.goBack()} mainViewStyle={commonStyles.appHeader} isBack title='Delivery Address' />
            <ScrollView style={{ flex: 1, backgroundColor: colors.white }} contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                {MultipleLocation.map((item, index) => {
                    const last = MultipleLocation.length - 1
                    return (
                        <Animated.View
                            entering={FadeInRight.delay(index * 100)}
                            key={index}
                            style={[styles.locItem, { borderBottomWidth: index == last ? 0 : 1 }]}
                        >
                            <Text style={styles.heading}>Address{' '}{index + 1}:</Text>
                            <Text style={styles.addressText}>{item.address}</Text>
                        </Animated.View>
                    )
                })}
                <Spacer space={40} />
            </ScrollView>
        </>
    )
}

export default AddressScreen

const styles = StyleSheet.create({
    locItem: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderBottomColor: colors.grey1,
    },
    addressText: {
        paddingLeft: 10,
        color: colors.black,
        textAlign: 'left',
    },
    heading: {
        paddingLeft: 10,
        fontWeight: 'bold',
        textAlign: 'left',
    }
})