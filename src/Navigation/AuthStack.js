import { View, Text } from 'react-native'
import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import { Login } from '../Screens'

const AuthStack = (Stack) => {
  return (
    <>
    <Stack.Screen 
    name={navigationStrings.LOGIN}
    component={Login}
    options={{headerShow:false}}
    />
    </>
  )
}

export default AuthStack