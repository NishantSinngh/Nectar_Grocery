import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import imagePath from '../../assets/imagePath'
import ItemComponent from '../../components/ItemComponent'

const BestSellingList = () => {

    const DATA = [{
        id: '1',
        title: 'Bell Pepper Red',
        quantity: 1,
        price: 60,
        path: imagePath.res_capsicum
    }, {
        id: '2',
        title: 'Ginger',
        quantity: 1,
        price: 50,
        path: imagePath.ginger
    }, {
        id: '3',
        title: 'Organic Banana',
        quantity: 1,
        price: 40,
        path: imagePath.banana
    },]


    return (
        <View style={{ marginLeft: 10, }}>
            <ScrollView horizontal>
                {DATA.map((item, index) => (
                    <ItemComponent
                        key={index}
                        item={item}
                        index={index}
                    />
                ))}
            </ScrollView>
        </View>
    )
}

export default BestSellingList

const styles = StyleSheet.create({})