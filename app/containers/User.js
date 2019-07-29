import React, { Component } from 'react'
import { StyleSheet, ScrollView, FlatList, View, Image, Text, ImageBackground } from 'react-native'
import { connect } from 'react-redux'

// import { Button } from '../components'
import { WhiteSpace, WingBlank, Icon, Card, Button, Grid, List } from '@ant-design/react-native';
import { ECharts } from 'react-native-echarts-wrapper';

import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../utils'

import {IconFont} from "../components";
import {ReadingStatus, SwitchTab, DownFrame, DataTableList} from '../components';
import { Theme } from '../comm'

@connect()
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View
        style={styles.container}
      >
       <View>
         <Image style={{ height: scaleSizeH(400), width: scaleSizeW(750) }}
          source={{ uri: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1664408413,183558933&fm=26&gp=0.jpg' }}
         />
       </View>
        <Card style={styles.user_content}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../images/user.png')}/>
            <Text style={{ marginLeft: scaleSizeW(20), fontSize: setSpText(45) }}>龙兆雪</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../images/approval.png')}/>
            <Text style={{ color: Theme.darkTextColor, marginTop: scaleSizeH(10) }}>我得审批</Text>
          </View>
        </Card>
        <View style={{ paddingHorizontal: scaleSizeW(75) }}>
          <List>
            <List.Item
              thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
              arrow="horizontal"
              onClick={() => {}}
            >我的收藏</List.Item>
            <List.Item
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
             帮助中心
            </List.Item>
            <List.Item
              thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png"
              onClick={() => {}}
              arrow="horizontal"
            >
              推荐APP给朋友
            </List.Item>
          </List>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  user_content: {
    marginTop: scaleSizeH(-150),
    width: scaleSizeW(600),
    height: scaleSizeH(300),
    marginHorizontal: scaleSizeW(75),
    backgroundColor: Theme.whiteColor,
  }
})

export default User
