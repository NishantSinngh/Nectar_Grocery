import { Image, ImageBackground, ScrollView, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import imagePath from '../../assets/imagePath'
import Spacer from '../../components/Spacer'
import loginStyles from './login.styles'
import colors from '../../constants/colors'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import ButtonComp from '../../components/ButtonComp'
import NavigationStrings from '../../constants/NavigationStrings'
import actions from '../../redux/actions'

const LoginScreen = (props: any) => {
  const { navigation } = props;

  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  function NavigateToSingup() {
    navigation.navigate(NavigationStrings.SIGNUP)
  }

  function handleLogin() {
    let emailError = email.trim() === '';
    let passwordError = password.trim() === '';
    if (!!emailError || !!passwordError) {
      setEmailError(!!emailError ? 'Please enter email' : '');
      setPasswordError(!!passwordError ? 'Please enter password' : '');
      return;
    }
    setLoading(true)
    actions
      .userLogin(email, password)
      .finally(() => setLoading(false))
  }


  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.white }}
      contentContainerStyle={{ flexGrow: 1, }}
      keyboardDismissMode='interactive'
      keyboardShouldPersistTaps='handled'
      showsVerticalScrollIndicator={false}>
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
        disabled={!loading}
        error={emailError}
        onSetData={(email: React.SetStateAction<string>) => {
          setEmail(email)
          setEmailError('')
        }}
        onSubmitEditing={() => passwordRef.current?.focus()}
        returnType='next'
      />
      <TextInputWithLabel
        placeholder='Enter your password'
        label='Password'
        reference={passwordRef}
        disabled={!loading}
        error={passwordError}
        onSetData={(password: React.SetStateAction<string>) => {
          setPassword(password)
          setPasswordError('')
        }}
        secure
        returnType='done'
      />


      <View style={loginStyles.fpContainer}>
        <Text onPress={() => navigation.navigate(NavigationStrings.FORGOT_PASSWORD)} style={loginStyles.fpText}>Forgot Password?</Text>
      </View>

      <ButtonComp
        title='Login'
        onPress={handleLogin}
        isAnimated
        loading={loading}
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
