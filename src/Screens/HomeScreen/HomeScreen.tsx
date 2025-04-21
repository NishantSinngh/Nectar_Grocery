import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import homeStyles from './homeStyles'
import SearchBar from '../../components/SearchBar'
import imagePath from '../../assets/imagePath'
import ExclusiveOfferList from './ExclusiveOfferList'
import Spacer from '../../components/Spacer'
import BestSellingList from './BestSellingList'
import GroceriesList from './GroceriesList'
import { useHomeScreen } from './useHomeScreen'
import ImageButton from '../../components/ImageButton'

const HomeScreen = () => {

    const { loading, currentPosition } = useHomeScreen()


    return (

        <ScrollView style={{ flex: 1, flexGrow: 1, }} keyboardDismissMode='on-drag' keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} >
            <View style={homeStyles.appContainer}>
                <View style={homeStyles.headerStyle}>
                    <Image source={imagePath.carrot} />
                    <View style={homeStyles.locationContainer}>
                        <Image source={imagePath.location} />
                        {loading ? <ActivityIndicator /> : <Text style={homeStyles.locationText}>Location : {currentPosition?.coords?.longitude}, {currentPosition?.coords?.latitude}</Text>}
                    </View>
                </View>
                <SearchBar />
                <View style={homeStyles.offerContainer} >
                    <Text style={homeStyles.headingText}>Exclusive Offer</Text>
                    <Text style={homeStyles.seeAllText}>See all</Text>
                </View>
                <ExclusiveOfferList />
                <View style={homeStyles.offerContainer} >
                    <Text style={homeStyles.headingText}>Best Selling</Text>
                    <Text style={homeStyles.seeAllText}>See all</Text>
                </View>
                <BestSellingList />
                <View style={homeStyles.offerContainer} >
                    <Text style={homeStyles.headingText}>Groceries </Text>
                    <Text style={homeStyles.seeAllText}>See all</Text>
                </View>
                <ScrollView horizontal contentContainerStyle={{ flexGrow: 1,marginTop:10, }} >
                    <ImageButton imgSrc={imagePath.pulses} imgStyle={{ marginRight: 10, marginLeft: 20, }} />
                    <ImageButton imgSrc={imagePath.pulses} imgStyle={{ marginRight: 10 }} />
                </ScrollView>
                <GroceriesList />
                <Spacer space={100} />
            </View>
        </ScrollView>
    )
}

export default HomeScreen
