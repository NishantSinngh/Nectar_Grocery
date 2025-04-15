import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import imagePath from '../../assets/imagePath'
import ItemComponent from '../../components/ItemComponent'

const GroceriesList = () => {

    const DATA = [{
        id: '1',
        title: 'Beef Bone',
        quantity: 1,
        price: 500,
        path: imagePath.beef
    }, {
        id: '2',
        title: 'Broiler Chicken',
        quantity: 1,
        price: 200,
        path: imagePath.chicken
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

export default GroceriesList

const styles = StyleSheet.create({})