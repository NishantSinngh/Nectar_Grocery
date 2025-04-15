import { Image, ScrollView, Text, View } from 'react-native'
import React from 'react'
import homeStyles from './homeStyles'
import SearchBar from '../../components/SearchBar'
import imagePath from '../../assets/imagePath'
import ExclusiveOfferList from './ExclusiveOfferList'
import Spacer from '../../components/Spacer'
import BestSellingList from './BestSellingList'
import GroceriesList from './GroceriesList'

const HomeScreen = () => {
    return (

        <ScrollView style={{ flex: 1, flexGrow: 1, }}>
            <View style={homeStyles.appContainer}>
                <View style={homeStyles.headerStyle}>
                    <Image source={imagePath.carrot} />
                    <View style={homeStyles.locationContainer}>
                        <Image source={imagePath.location} />
                        <Text style={homeStyles.locationText}>Location</Text>
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
                <GroceriesList />
                <Spacer space={100} />
            </View>
        </ScrollView>
    )
}

export default HomeScreen
