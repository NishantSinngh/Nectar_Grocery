import { FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import AppHeader from '../../components/AppHeader'
import DATA from '../../constants/DATA'
import Spacer from '../../components/Spacer'
import ItemComponent from '../../components/ItemComponent'

const ProductScreen = () => {
    return (
        <View style={styles.appContainer}>
            <AppHeader mainViewStyle={{ paddingTop: 30, }} title='Find Products' />
            <ScrollView>
                {DATA.Egg.map((item, index) => (
                    <ItemComponent index={index} key={index} item={item} />
                ))}

            </ScrollView>
            {/* <FlatList
                data={DATA.Egg}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                renderItem={({ item, index }) => <ItemComponent index={index} item={item} />}
            /> */}

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