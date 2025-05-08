import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import imagePath from '../../assets/imagePath'
import ImageButton from '../../components/ImageButton'
import settingsStyle from './settings.style'
import SettingsItem from '../../components/SettingsItem'
import { useAppSelector } from '../../redux/hooks'
import actions from '../../redux/actions'
import { showLogoutModal } from '../../components/LogoutModal'
import { NotImplement } from '../../helperFunctions/utils'
import { useNavigation } from '@react-navigation/native'
import NavigationStrings from '../../constants/NavigationStrings'


const SettingScreen = () => {
    const navigation = useNavigation<any>();
    const SettingsList = [{
        id: '1',
        title: 'Orders',
        path: imagePath.orders_icon,
        onPress: NotImplement,
    }, {
        id: '2',
        title: 'My Details',
        path: imagePath.myDetails_icon,
        onPress: NotImplement,
    }, {
        id: '3',
        title: 'Delivery Address',
        path: imagePath.delivery_address,
        onPress: () => navigation.navigate(NavigationStrings.ADDRESS_SCREEN),
    }, {
        id: '4',
        title: 'Payment Methods',
        path: imagePath.payment_card,
        onPress: NotImplement,
    }, {
        id: '6',
        title: 'Notifications',
        path: imagePath.bell,
        onPress: NotImplement,
    }, {
        id: '7',
        title: 'Help',
        path: imagePath.help_icon,
        onPress: NotImplement,
    }, {
        id: '8',
        title: 'About',
        path: imagePath.about,
        onPress: NotImplement,
    },]
    const userData = useAppSelector(state => state.authSlice.userData)
    console.log(userData);

    function handleLogout() {
        setTimeout(() => {
            actions.userLogout()
        }, 200);
    }

    return (
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1, }} showsVerticalScrollIndicator={false}>
            <View style={settingsStyle.appContainer}>
                <View style={settingsStyle.headerContent} >
                    <View style={settingsStyle.center}>
                        <Image source={imagePath.user} style={settingsStyle.imageStyle} />
                    </View>
                    <View style={settingsStyle.profileDetails}>
                        <View style={[settingsStyle.center, { flexDirection: 'row' }]}>
                            <Text style={settingsStyle.userText}>{userData?.displayName}</Text>
                            <ImageButton imgSrc={imagePath.edit} onPress={NotImplement} />
                        </View>
                        <Text style={settingsStyle.mailText}>{userData?.email}</Text>
                    </View>
                </View>
                <View>
                    <FlatList
                        data={SettingsList}
                        scrollEnabled={false}
                        removeClippedSubviews={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }: { item: { id: string, title: string, path: any, onPress: () => void } }) => <SettingsItem item={item} />}
                    />
                </View>

                {/* <View style={settingsStyle.sliderContainer}>
                    <Image source={imagePath.darkMode} style={{ height: 20, width: 20, transform: [{ scale: 1.5 }] }} />
                    <View style={settingsStyle.innerContainer}>
                        <Text style={settingsStyle.text}>Dark Mode</Text>
                    </View>
                    <Slider />
                </View> */}

                <Pressable
                    style={settingsStyle.logOutButton}
                    onPress={() => showLogoutModal(handleLogout)}
                >
                    <Image source={imagePath.exit} />
                    <View style={[{ flex: 1, }, settingsStyle.center]}>
                        <Text style={settingsStyle.logOutText}>Log Out</Text>
                    </View>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default SettingScreen