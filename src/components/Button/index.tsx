import { View, Text, Pressable,StyleSheet } from 'react-native'
import React from 'react'

interface ButtonProps{
  text:string,
  onPress:()=>void;
}

const Button = ({text,onPress}:ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default Button

const styles=StyleSheet.create({
  root:{
    backgroundColor:'#e47911',
    marginVertical:10,
    height:35,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#a15e1b'
  },
  text:{
    fontSize:16
  }
})