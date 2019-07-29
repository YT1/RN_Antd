import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from 'react-redux'

import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../../utils'
import {ReadingStatus, SwitchTab, DownFrame, DataTableList, Button, EditableFrame} from '../../components';
import { Theme } from '../../comm'
import InputScrollView from 'react-native-input-scroll-view'

@connect()
class ProjectDetail extends Component {
  static navigationOptions = {
    title: '项目协调需求详情',
    headerTitleStyle:{
      color: Theme.darkTextColor
    }
  }
  componentDidMount(): void {
    console.info('this.props',this.props)
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }))
  }

  render() {
    return (
      <InputScrollView
        style={styles.container}
      >
        <View style={{ flex: 1, paddingHorizontal: scaleSizeW(20), paddingVertical: scaleSizeH(20) }}>
          <DataTableList
            daraArr={[
              {"isChecked": true, "type": "detail_display", "hy" : "行业类型:", "hc":"工业企业"},
              {"isChecked": true, "type": "detail_display", "hy" : "主营业务:", "hc":"食品"},
              {"isChecked": true, "type": "detail_display", "hy" : "行业类型:", "hc":"工业企业"},
              {"isChecked": true, "type": "detail_display", "hy" : "注册资金（万元）:", "hc":"1800"},
              {"isChecked": true, "type": "detail_display", "hy" : "行业类型:", "hc":"工业企业"},
              {"isChecked": true, "type": "detail_display", "hy" : "行业类型:", "hc":"工业企业"},
              {"isChecked": true, "type": "detail_display", "hy" : "行业类型:", "hc":"工业企业"},
              {"isChecked": true, "type": "detail_display", "hy" : "行业类型:", "hc":"工业企业"},
              {"isChecked": true, "type": "detail_display", "hy" : "行业类型:", "hc":"工业企业"},
              {"isChecked": true, "type": "detail_display", "hy" : "联系人:", "hc":"李贤"},
              {"isChecked": true, "type": "detail_display", "hy" : "联系电话:", "hc":"1566262278"},
            ]}
            headerArr={[
              {name: '企业名称:', width: 1},
              {name: '食品典典', width: 2},
            ]}
            onPress={(item) => {
              this.props.navigation.navigate('FinaceDetail', {sourceInfo: item})
            }}
          />
          <EditableFrame
            defaultValue={''}
            goback={() => {
              this.props.navigation.pop()
            }}
            revise={() => {

            }}
            confirm={() => {

            }}
            onChange={value => {

            }}
          />
        </View>
      </InputScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
// FinaceDetail.navigationOptions(() => {
//   return {
//     headerTitle: '详情',
//   }
// })
export default ProjectDetail
