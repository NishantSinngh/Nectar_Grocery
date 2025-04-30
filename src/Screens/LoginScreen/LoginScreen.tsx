import { Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import imagePath from '../../assets/imagePath'
import Spacer from '../../components/Spacer'
import loginStyles from './login.styles'
import colors from '../../constants/colors'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import ButtonComp from '../../components/ButtonComp'
import NavigationStrings from '../../constants/NavigationStrings'
import { guestLogin, login } from '../../helperFunctions/auth'

const LoginScreen = (props: any) => {
  const { navigation } = props;

  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function NavigateToSingup() {
    navigation.navigate(NavigationStrings.SIGNUP)
  }

  function handleLogin() {
    login(email,password)
  }


  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.white }}
      contentContainerStyle={{ flexGrow: 1, }}
      keyboardDismissMode='interactive'
      keyboardShouldPersistTaps='handled'>
      <ImageBackground source={imagePath.blur_background} style={loginStyles.topBG} resizeMode='cover' />
      <Image source={imagePath.carrot} style={{ alignSelf: 'center', marginTop: 50, }} />

      <Spacer space={100} />
      <View style={loginStyles.headerContainer}>
        <Text style={loginStyles.loginText}>Login</Text>
        <Text style={loginStyles.text2}>Enter your email and password</Text>
      </View>
      <Spacer space={20} />


      <TextInputWithLabel
        label='Email'
        placeholder='Enter your email'
        reference={emailRef}
        onSetData={(email: React.SetStateAction<string>) => {
          setEmail(email)
        }}
        onSubmitEditing={() => passwordRef.current?.focus()}
        returnType='next'
      />
      <TextInputWithLabel
        placeholder='Enter your password'
        label='Password'
        onSetData={(password: React.SetStateAction<string>) => {
          setPassword(password)
        }}
        reference={passwordRef}
        secure
      />


      <View style={loginStyles.fpContainer}>
        <Text style={loginStyles.fpText}>Forgot Password?</Text>
      </View>

      <ButtonComp
        title='Login'
        onPress={handleLogin}
        mainViewStyle={loginStyles.button}
      />
      <View style={loginStyles.footerContainer} >
        <Text style={loginStyles.footerText}>Don't have an account? </Text>
        <Text onPress={NavigateToSingup} style={loginStyles.signupText}>Signup</Text>
      </View>

    </ScrollView>
  )
}

export default LoginScreen
