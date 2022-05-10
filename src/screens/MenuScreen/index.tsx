import {  SafeAreaView } from 'react-native'
import { Auth } from 'aws-amplify'
import React from 'react'
import Button from '../../components/Button'

const MenuScreen = () => {
const onLogout=()=>{
 Auth.signOut()
}
  return (
    <SafeAreaView>
  <Button text='Log out' onPress={onLogout} />
    </SafeAreaView>
  )
}

export default MenuScreen