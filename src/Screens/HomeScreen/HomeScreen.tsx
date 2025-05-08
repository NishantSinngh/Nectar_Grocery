import { ActivityIndicator, Image, KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'
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
import NavigationStrings from '../../constants/NavigationStrings'

const HomeScreen = (props: any) => {
    const { navigation, route } = props;
    const { loading, currentPosition } = useHomeScreen()

    function navigateToMap() {
        navigation.navigate(NavigationStrings.MAP_SCREEN)
    }

    return (
        <ScrollView style={{ flex: 1, flexGrow: 1, }} keyboardDismissMode='on-drag' keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} >
            <View style={homeStyles.appContainer}>
                <View style={homeStyles.headerStyle}>
                    <Image source={imagePath.carrot} />
                    <View style={homeStyles.locationContainer}>
                        <ImageButton imgSrc={imagePath.location} onPress={navigateToMap} />
                        {loading ? <ActivityIndicator /> : <Text onPress={navigateToMap} style={homeStyles.locationText}>{currentPosition}</Text>}
                    </View>
                </View>
                <SearchBar placeholder='Search Store' />
                <View style={homeStyles.offerContainer} >
                    <Text style={homeStyles.headingText}>Exclusive Offer</Text>
                    {/* <Text style={homeStyles.seeAllText}>See all</Text> */}
                </View>
                <ExclusiveOfferList />
                <View style={homeStyles.offerContainer} >
                    <Text style={homeStyles.headingText}>Best Selling</Text>
                    {/* <Text style={homeStyles.seeAllText}>See all</Text> */}
                </View>
                <BestSellingList />
                <View style={homeStyles.offerContainer} >
                    <Text style={homeStyles.headingText}>Groceries </Text>
                    {/* <Text style={homeStyles.seeAllText}>See all</Text> */}
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ flexGrow: 1, marginTop: 10, }} >
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
