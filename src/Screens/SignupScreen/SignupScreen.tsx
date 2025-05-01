import { Image, ImageBackground, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'
import imagePath from '../../assets/imagePath'
import Spacer from '../../components/Spacer'
import colors from '../../constants/colors'
import TextInputWithLabel from '../../components/TextInputWithLabel'
import ButtonComp from '../../components/ButtonComp'
import signupStyle from './signup.style'
import actions from '../../redux/actions'
import validation from '../../helperFunctions/validation'
import { showToast } from '../../components/Toast'

const LoginScreen = (props: any) => {
  const { navigation } = props;


  const emailRef = useRef<TextInput>(null)
  const passwordRef = useRef<TextInput>(null)
  const usernameRef = useRef<TextInput>(null)

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [nameError, setNameError] = useState<string>('')
  const [emailError, setEmailError] = useState<string>('')
  const [passwordError, setPasswordError] = useState<string>('')

  const [loading, setLoading] = useState<boolean>(false)

  function handleValidation() {
    setNameError('');
    setEmailError('');
    setPasswordError('')

    let emailError = validation({
      email: email.toString().trim().toLowerCase(),
    });
    let nameError = validation({
      name: name.toString().trim().toLowerCase(),
    });

    let passwordError = validation({ password: password.toString().trim() });
    if (!!emailError || !!passwordError || !!nameError) {
      setNameError(!!nameError ? nameError.toString() : '');
      setEmailError(!!emailError ? emailError.toString() : '');
      setPasswordError(!!passwordError ? passwordError.toString() : '');
    } else {
      setLoading(true)
      actions.userSignUp(name, email, password)
        .catch(error => {
          console.log('error=====>', error);
          showToast(error?.message || 'Something went wrong')
        })
        .finally(() => {
          setLoading(false)
        });
    }
  }

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1, }}
      showsVerticalScrollIndicator={false}
      keyboardDismissMode='interactive'
      keyboardShouldPersistTaps='handled'>
      {/* <ImageBackground source={imagePath.blur_background} style={signupStyle.topBG} resizeMode='cover' /> */}
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
        error={nameError}
        onSetData={(name: React.SetStateAction<string>) => {
          setName(name)
          setNameError('')
        }}
        disabled={!loading}
        onSubmitEditing={() => emailRef.current?.focus()}
        returnType='next'
      />
      <TextInputWithLabel
        label='Email'
        placeholder='Enter your email'
        reference={emailRef}
        error={emailError}
        onSetData={(email: React.SetStateAction<string>) => {
          setEmail(email)
          setEmailError('')
        }}
        disabled={!loading}
        onSubmitEditing={() => passwordRef.current?.focus()}
        returnType='next'
      />
      <TextInputWithLabel
        placeholder='Enter your password'
        label='Password'
        reference={passwordRef}
        error={passwordError}
        onSetData={(password: React.SetStateAction<string>) => {
          setPassword(password)
          setPasswordError('')
        }}
        disabled={!loading}
        secure
        returnType='done'
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
        isAnimated
        loading={loading}
        onPress={handleValidation}

        mainViewStyle={signupStyle.button}
      />
      <View style={signupStyle.footerContainer} >
        <Text style={signupStyle.footerText}>Already have an account? </Text>
        <Text onPress={() => navigation.goBack()} style={signupStyle.signupText}>Login</Text>
      </View>
      <Spacer space={100} />
    </ScrollView>
  )
}

export default LoginScreen
