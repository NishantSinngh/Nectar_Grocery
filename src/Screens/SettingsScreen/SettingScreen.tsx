import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import imagePath from '../../assets/imagePath'
import ImageButton from '../../components/ImageButton'
import settingsStyle from './settings.style'
import SettingsItem from '../../components/SettingsItem'
import SettingsList from './SettingsList'
import { useAppSelector } from '../../redux/hooks'
import actions from '../../redux/actions'
import { showLogoutModal } from '../../components/LogoutModal'


const SettingScreen = () => {

    const userData = useAppSelector(state => state.authSlice.userData)
    console.log(userData);

    function handleLogout() {
        actions
            .userLogout()
    }

    return (
        <ScrollView style={{ flexGrow: 1, }} showsVerticalScrollIndicator={false}>
            <View style={settingsStyle.appContainer}>
                <View style={settingsStyle.headerContent} >
                    <View style={settingsStyle.center}>
                        <Image source={imagePath.user} style={settingsStyle.imageStyle} />
                    </View>
                    <View style={settingsStyle.profileDetails}>
                        <View style={[settingsStyle.center, { flexDirection: 'row' }]}>
                            <Text style={settingsStyle.userText}>{userData?.displayName}</Text>
                            <ImageButton imgSrc={imagePath.edit} />
                        </View>
                        <Text style={settingsStyle.mailText}>{userData?.email}</Text>
                    </View>
                </View>
                <View style={{ flex: 1, }} >
                    <FlatList
                        data={SettingsList}
                        scrollEnabled={false}
                        removeClippedSubviews={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }: { item: { id: string, title: string, path: any } }) => <SettingsItem item={item} />}
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