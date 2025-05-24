import React from 'react';
import { ForgotPasswordScreen, LoginScreen, SignupScreen } from '../Screens';
import NavigationStrings from '../constants/NavigationStrings';

const AuthStack = (Stack: any) => {
  return (
    <React.Fragment>
      <Stack.Screen name={NavigationStrings.LOGIN} component={LoginScreen} />
      <Stack.Screen name={NavigationStrings.FORGOT_PASSWORD} component={ForgotPasswordScreen} />
      <Stack.Screen name={NavigationStrings.SIGNUP} component={SignupScreen} />
    </React.Fragment>
  );
};

export default AuthStack;
