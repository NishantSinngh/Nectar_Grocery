import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FavStyles from './FavStyles'
import AppHeader from '../../components/AppHeader'
import commonStyles from '../../helperFunctions/commonStyles'
import FavouriteItem from '../../components/FavouriteItem'
import imagePath from '../../assets/imagePath'
import Spacer from '../../components/Spacer'
import ButtonComp from '../../components/ButtonComp'
import { useAppSelector } from '../../redux/hooks'
import DATA from '../../constants/DATA'
import actions from '../../redux/actions'

const FavouriteScreen = () => {

    const favsId = useAppSelector(state => state.favSlice);

    const allItems = Object.values(DATA).flat();
    const favsItem = favsId
        .map(id => allItems.find(item => item.id === id))
        .filter((item): item is CartItem => item !== undefined);

    console.log(favsItem);

    function handlePress() {
        actions.AddAllToCart(favsItem)
    }

    return (
        <>
            <View style={FavStyles.appContainer}>
                <AppHeader mainViewStyle={commonStyles.appHeader} title='Favourite' />
                <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                    <FlatList
                        scrollEnabled={false}
                        data={favsItem}
                        ListFooterComponent={<Spacer space={180} />}
                        ListEmptyComponent={<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top: "50%" }}>
                            <Text style={{ fontSize: 24 }}>You have no favourites</Text>
                        </View>}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({ item }) => <FavouriteItem item={item} />}
                    />
                </ScrollView>
            </View>
            <ButtonComp title='Add All To Cart' onPress={handlePress} />
        </>
    )
}

export default FavouriteScreen

const styles = StyleSheet.create({})