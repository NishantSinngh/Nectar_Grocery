import { Image, ImageBackground, ScrollView, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import imagePath from '../../assets/imagePath'
import Spacer from '../../components/Spacer'
import fpStyles from './fp.styles'
import colors from '../../constants/colors'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import ButtonComp from '../../components/ButtonComp'
import NavigationStrings from '../../constants/NavigationStrings'
import actions from '../../redux/actions'

const ForgotPassword = (props: any) => {
    const { navigation } = props;

    const emailRef = useRef<TextInput>(null)
    const passwordRef = useRef<TextInput>(null)
    const [email, setEmail] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [emailError, setEmailError] = useState<string>('')


    function handleLogin() {
        let emailError = email.trim() === '';
        if (!!emailError) {
            setEmailError(!!emailError ? 'Please enter email' : '');
            return;
        }
        setLoading(true)
        actions
            .ForgotPassword(email)
            .finally(() => setLoading(false))
    }

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: colors.white }}
            contentContainerStyle={{ flexGrow: 1, }}
            keyboardDismissMode='interactive'
            keyboardShouldPersistTaps='handled'
            showsVerticalScrollIndicator={false}>
            <ImageBackground source={imagePath.blur_background} style={fpStyles.topBG} resizeMode='cover' />
            <Image source={imagePath.carrot} style={{ alignSelf: 'center', marginTop: 50, }} />

            <Spacer space={100} />
            <View style={fpStyles.headerContainer}>
                <Text style={fpStyles.loginText}>Forgot Password</Text>
            </View>
            <Spacer space={20} />


            <TextInputWithLabel
                label=''
                placeholder='Enter your email'
                reference={emailRef}
                disabled={!loading}
                error={emailError}
                onSetData={(email: React.SetStateAction<string>) => {
                    setEmail(email)
                    setEmailError('')
                }}
                onSubmitEditing={() => passwordRef.current?.focus()}
                returnType='done'
            />

            <ButtonComp
                title='Reset Password'
                onPress={handleLogin}
                isAnimated
                loading={loading}
                mainViewStyle={fpStyles.button}
            />
        </ScrollView>
    )
}

export default ForgotPassword
