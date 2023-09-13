import { View, Text } from 'react-native'
import React from 'react'
import navigationStrings from '../constants/navigationStrings'
import BottomTab from './BottomTabs'


export default function MainStack(Stack) {
  return (
   <>
   <Stack.Screen 
   name={navigationStrings.BOTTOM_TABS}
   component={BottomTab}
   />

   
   </>
  )
}