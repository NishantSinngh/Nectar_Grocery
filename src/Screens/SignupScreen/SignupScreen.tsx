import { Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'
import imagePath from '../../assets/imagePath'
import Spacer from '../../components/Spacer'
import colors from '../../constants/colors'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import ButtonComp from '../../components/ButtonComp'
import NavigationStrings from '../../constants/NavigationStrings'
import signupStyle from './signup.style'
// previous push by wrong account
const LoginScreen = (props: any) => {
  const { navigation } = props;


  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const usernameRef = useRef<TextInput>(null)


  function handleValidation() {

  }





  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.white }}
      contentContainerStyle={{ flexGrow: 1, }}
      keyboardDismissMode='interactive'
      keyboardShouldPersistTaps='handled'>
      <ImageBackground source={imagePath.blur_background} style={signupStyle.topBG} resizeMode='cover' />
      <Image source={imagePath.carrot} style={{ alignSelf: 'center', marginTop: 50, }} />

      <Spacer space={100} />
      <View style={signupStyle.headerContainer}>
        <Text style={signupStyle.loginText}>Sign Up</Text>
        <Text style={signupStyle.text2}>Enter your email and password</Text>
      </View>
      <Spacer space={20} />


      <TextInputWithLabel
        placeholder='Enter your name  '
        label='Username'
        reference={usernameRef}
        onSubmitEditing={() => emailRef.current?.focus()}
        returnType='next'
      />
      <TextInputWithLabel
        label='Email'
        placeholder='Enter your email'
        reference={emailRef}
        onSubmitEditing={() => passwordRef.current?.focus()}
        returnType='next'
      />
      <TextInputWithLabel
        placeholder='Enter your password'
        label='Password'
        reference={passwordRef}
        secure
      />

      <View style={signupStyle.fpContainer}>
        <Text style={signupStyle.fpText}>By Continuing you agree to our
          <Text style={{ color: colors.themeColor }}> Terms of Service</Text>
          <Text style={signupStyle.fpText}> and</Text>
          <Text style={{ color: colors.themeColor }}> Privacy Policy</Text>
        </Text>
      </View>

      <ButtonComp
        title='Sign Up'
        // onPress={() => navigation.navigate(NavigationStrings.BOTTOM_TABS)}
        onPress={handleValidation}
        mainViewStyle={signupStyle.button}
      />
      <View style={signupStyle.footerContainer} >
        <Text style={signupStyle.footerText}>Already have an account? </Text>
        <Text onPress={() => navigation.goBack()} style={signupStyle.signupText}>Login</Text>
      </View>

    </ScrollView>
  )
}

export default LoginScreen
