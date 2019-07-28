import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

// import { Button } from '../components'
import { WhiteSpace, WingBlank, Icon, Card, Button, Grid } from '@ant-design/react-native';
import { ECharts } from 'react-native-echarts-wrapper';

import { NavigationActions } from '../../../utils'

@connect()
class EnterpriseAnalyze extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // static navigationOptions = {
  //   tabBarIcon: ({ focused, tintColor }) => (
  //       <Icon name="rise" size="lg" style={{color: focused? tintColor: 'gray'}}  />
  //   ),
  // }

  productionData=
        [['中纺粮油（广元）有限公司', 147585, 1456479, 118423,1187195,112358, 1443465, 116930, 1174771, 21.26, 22.68, 24.63, 10.03]];

  option = {
    title:{
     text: '昭化区规上工业企业产值图表',
    },
  //   backgroundColor: '#2c343c',
  //   textStyle: {
  //     color: 'rgba(255, 255, 255, 0.3)'
  // },
    legend: {
      x: 'left',
      y: 'bottom',
      orient: 'vertical',
      itemGap: 0
      // data:['email', 'union', 'video', 'straght', 'search enginer']
    //   textStyle: {
    //     color: 'rgba(255, 255, 255, 0.3)'
    // }
    },
    xAxis: {
        type: 'category',
        // data: ['111', '222','333','444','555','666','777','888']
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        // axisPointer: {
        //   type: 'shadow'
        // }
    },
    yAxis: [
        {
          type: 'value',
          name: '产值(千元）',
          min: 0,
          max: 1800000,
          // axisLabel: {
          //   formatter: '{value} 千元'
          // }
        },
    ],
    dataset:{
      source: this.productionData
        // ['enterprise', '111', '222', '333', '444', '555'],
    },
    grid: {bottom: '48%',left:'18%'},
    radar: {
      startAngle: 180,
      center: ['70%','80%'],
      radius: '25%',
      indicator: [
        {name: '能耗对比'},
        {name: '累计同比增幅'},
        {name: '本月同比'},
        {name: '环比'},
      ]
    },
    series: [
      {type: 'bar',name:'本月工业产值: '+this.productionData[0][1], stack: '当年工业产值'},
      {type: 'bar', name: '1-本月工业产值: '+this.productionData[0][2], stack: '当年工业产值'},
      {type: 'bar', name: '上年本月工业产值: '+this.productionData[0][3], stack: '上年工业产值'},
      {type: 'bar', name: '上年1-本月工业产值: '+this.productionData[0][4], stack: '上年工业产值'},
      {type: 'bar', name: '本月销售产值: '+this.productionData[0][5], stack:'当年销售产值'},
      {type: 'bar', name: '1-本月销售产值: '+this.productionData[0][6], stack:'当年销售产值'},
      {type: 'bar', name: '上年本月销售产值: '+this.productionData[0][7], stack: '上年销售产值'},
      {type: 'bar', name: '上年1-本月销售产值: '+this.productionData[0][8], stack: '上年销售产值' },
      {type: 'radar', name: '也不知道', data: [{
        value: this.productionData[0].slice(-4),
      }]}
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.echartWrapper}>
                  <ECharts option={this.option}></ECharts>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContent: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  echartWrapper: {
    height: 400,
    // paddingLeft: 20,
  },
  survey:{
    // width: 380,
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default EnterpriseAnalyze
