import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../utils'

export default class DownFrame extends Component{
  render() {
    const {leftTitle = '', leftStyle = {}, width = 0 } = this.props
    return(
      <View style={[styles.borderSty, {flexDirection: 'row', height: scaleSizeH(50), width: width}]}>
        <View style={{justifyContent: 'center', alignItems: 'center', paddingHorizontal: scaleSizeW(20)}}>
          <Text style={leftStyle}>{leftTitle}</Text>
        </View>
        <View style={{height: scaleSizeH(50), width: 1, backgroundColor: '#878787' }}/>
        <View style={{ width: scaleSizeW(50), height: scaleSizeH(50), justifyContent: 'center', alignItems: 'center'}}>
         <Image source={require('../images/down.png')}/>
        </View>
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
    marginHorizontal: 15
  }
})
