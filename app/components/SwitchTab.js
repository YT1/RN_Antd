import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../utils'

export default class CardView extends Component{
  render() {
    const {leftTitle = '', leftStyle = {}, rightTitle = '', rightStyle = {}, onChange } = this.props
    return(
      <View style={[styles.borderSty, {flexDirection: 'row', height: scaleSizeH(50), width: scaleSizeW(120)}]}>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress = {() => onChange(1)}>
          <Text style={leftStyle}>{leftTitle}</Text>
        </TouchableOpacity>
        <View style={{height: scaleSizeH(50), width: 1, backgroundColor: '#878787' }}/>
        <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}} onPress = {() => onChange(2)}>
          <Text style={rightStyle}>{rightTitle}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  borderSty: {
    borderColor: '#878787',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  }
})
