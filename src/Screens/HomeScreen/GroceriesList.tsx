import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import imagePath from '../../assets/imagePath'
import ItemComponent from '../../components/ItemComponent'
import DATA from '../../constants/DATA'

const GroceriesList = () => {





    return (
        <View style={{ marginLeft: 10, }} key={3}>
            <ScrollView horizontal>
                {DATA.NonVeg.map((item, index) => (
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