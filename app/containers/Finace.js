import React, { Component } from 'react'
import { StyleSheet, ScrollView, FlatList, View, Image, Text, TouchableOpacity } from "react-native";
import { connect } from 'react-redux'

// import { Button } from '../components'
import { WhiteSpace, WingBlank, Icon, Card, Button, Grid } from '@ant-design/react-native';
import { ECharts } from 'react-native-echarts-wrapper';
import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../utils'
import {ReadingStatus, SwitchTab, DownFrame, DataTableList} from '../components';
import { Theme } from '../comm'


@connect()
class Finace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 1,
    }
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
      >
        <View style={{ flex: 1, paddingHorizontal: scaleSizeW(20) }}>
          <View style={{ paddingVertical: scaleSizeH(40), justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <Text style={{ fontSize: setSpText(40), color: Theme.darkTextColor }}>融资需求列表</Text>
            <View style={{ flexDirection: 'row', marginLeft: scaleSizeW(20) }}>
              <TouchableOpacity style={styles.borderSty} onPress = {() => {this.setState({selected: 1})}}>
                <Text style={{ color: this.state.selected === 1 ? Theme.baseColor : Theme.darkTextColor}}>未处理</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.borderSty} onPress = {() => {this.setState({selected: 2})}}>
                <Text style={{ color: this.state.selected === 2 ? Theme.baseColor : Theme.darkTextColor }}>已处理</Text>
              </TouchableOpacity>
            </View>
          </View>
          <DataTableList
            daraArr={[
              {"isChecked": true, "type": "tap",  "no" : 1, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 2, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 3, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 4, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 5, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 6, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 7, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 8, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 9, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 10, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 11, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 12, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 13, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 14, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 15, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
              {"isChecked": true, "type": "tap",  "no" : 16, "hy" : "食点豆豆客", "hc":"工业企业", "zyyw":"粮食、食用油",  "zzc":"1000", "rzje":"3000万", "rzfs": "银行贷款", "zrbm": "区商务和经和局", "xq": "查看"},
            ]}
            headerArr={[
              {name: '序号', width: 1},
              {name: '企业名称', width: 3},
              {name: '行业类型', width: 2},
              {name: '主营业务', width: 2},
              {name: '总资产（万元）', width: 2},
              {name: '融资金额（万元）', width: 2},
              {name: '融资方式', width: 2},
              {name: '联挂责任部门', width: 3},
              {name: '详情', width: 2},
            ]}
            onPress={(item) => {
              this.props.navigation.navigate('FinaceDetail', {sourceInfo: item})
            }}
          />
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  borderSty: {
    borderColor: '#878787',
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
})

export default Finace
