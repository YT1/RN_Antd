import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../utils'
import { Theme } from "../comm";
import Textarea from 'react-native-textarea'

export default class EditableFrame extends Component{
  render() {
    const {leftTitle = '', leftStyle = {}, rightTitle = '', rightStyle = {}, onChange } = this.props
    return(
      <View style={[styles.borderSty, { flex: 1 }]}>
          <View>
            <Text style={{ color: Theme.darkTextColor }}>批示:</Text>
          </View>
        <View style={{ height: scaleSizeH(180), flex: 1 }}>
           <Textarea
             containerStyle={styles.textareaContainer}
             style={styles.textarea}
             onChangeText={this.props.onChange}
             defaultValue={this.props.defaultValue}
             maxLength={120}
             placeholder={'请输入批示'}
             placeholderTextColor={'#c7c7c7'}
             underlineColorAndroid={'transparent'}
           />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          <Text onPress={() => this.props.goback()} style={{ textAlign: 'center', color: Theme.darkTextColor, marginHorizontal: scaleSizeW(10) }}>返回</Text>
          <Text onPress={() => this.props.revise()} style={{ textAlign: 'center', color: Theme.darkTextColor, marginHorizontal: scaleSizeW(10)  }}>修改</Text>
          <Text onPress={() => this.props.confirm()} style={{ textAlign: 'center', color: Theme.darkTextColor, marginHorizontal: scaleSizeW(10)  }}>确认</Text>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  borderSty: {
    borderColor: '#878787',
    borderWidth: 1,
    borderTopWidth: 0,
    padding: 5
  },
  textareaContainer: {
    height: scaleSizeH(180),
    padding: 5,
    backgroundColor: Theme.whiteColor,
  },
  textarea: {
    textAlignVertical: 'top',  // hack android
    height: scaleSizeH(180),
    fontSize: 14,
    color: Theme.darkTextColor,
  },
})
