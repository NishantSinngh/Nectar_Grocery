import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native'
import React from 'react'
import imagePath from '../../assets/imagePath'
import ImageButton from '../../components/ImageButton'
import settingsStyle from './settings.style'
import SettingsItem from '../../components/SettingsItem'
import SettingsList from './SettingsList'
import Slider from '../../components/Slider'


const SettingScreen = () => {

    return (
        <ScrollView style={{ flexGrow: 1, }} showsVerticalScrollIndicator={false}>
            <View style={settingsStyle.appContainer}>
                <View style={settingsStyle.headerContent} >
                    <View style={settingsStyle.center}>
                        <Image source={imagePath.user} style={settingsStyle.imageStyle} />
                    </View>
                    <View style={settingsStyle.profileDetails}>
                        <View style={[settingsStyle.center, { flexDirection: 'row' }]}>
                            <Text style={settingsStyle.userText}>User name</Text>
                            <ImageButton imgSrc={imagePath.edit} />
                        </View>
                        <Text style={settingsStyle.mailText}>example@gmail.com</Text>
                    </View>
                </View>
                <View style={{ flex: 1, }} >
                    <FlatList
                        data={SettingsList}
                        scrollEnabled={false}
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
                    onPress={() => console.log('Log Out')}
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