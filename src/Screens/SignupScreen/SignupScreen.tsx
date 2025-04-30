import { Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import imagePath from '../../assets/imagePath'
import Spacer from '../../components/Spacer'
import colors from '../../constants/colors'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import ButtonComp from '../../components/ButtonComp'
import NavigationStrings from '../../constants/NavigationStrings'
import app from '@react-native-firebase/app';
import signupStyle from './signup.style'
import { signup } from '../../helperFunctions/auth'
import actions from '../../redux/actions'

const LoginScreen = (props: any) => {
  const { navigation } = props;


  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const usernameRef = useRef<TextInput>(null)

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')



  function handleValidation() {
    actions.userSignUp(name, email, password)
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
        onSetData={(name: React.SetStateAction<string>) => {
          setName(name)
        }}
        onSubmitEditing={() => emailRef.current?.focus()}
        returnType='next'
      />
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
