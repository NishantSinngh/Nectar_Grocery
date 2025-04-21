import { FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../../constants/colors'
import AppHeader from '../../components/AppHeader'
import DATA from '../../constants/DATA'
import Spacer from '../../components/Spacer'
import ItemComponent from '../../components/ItemComponent'
import Animated, { ZoomIn } from 'react-native-reanimated'

const ProductScreen = (props: any) => {
    const { navigation, route } = props
    const { header } = route.params
    const [localData, setLocalData] = useState<CartItem[]>([])

    useEffect(() => {
        switch (header) {
            case 'Fresh Fruits & Vegetables':
                setLocalData([...DATA.Fruits, ...DATA.Veggies])
                break;
            case 'Cooking Oil & Ghee':
                setLocalData([])
                break;
            case 'Meat & Fish':
                setLocalData(DATA.NonVeg)
                break;
            case 'Bakery & Snacks':
                setLocalData([])
                break;
            case 'Dairy & Eggs':
                setLocalData(DATA.Egg)
                break;
            case 'Beverages':
                setLocalData(DATA.Beverages)
                break;
            default:
                setLocalData([])
                break;
        }
    }, [header])


    return (
        <View style={styles.appContainer}>
            <AppHeader isBack onBackPress={() => navigation.goBack()} mainViewStyle={{ paddingTop: 30, }} title={header} />
            <FlatList
                data={localData}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1, }}
                ListEmptyComponent={() => (
                    <Animated.View entering={ZoomIn.springify().delay(200)} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 24 }}>Product unavailable</Text>
                    </Animated.View>
                )}
                removeClippedSubviews={false}
                renderItem={({ item, index }) => <View style={{ flex: 1, alignItems: 'center' }}>
                    <ItemComponent index={index} item={item} />
                </View>}
            />
        </View>
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: 'flex-start',
    },
})