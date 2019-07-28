import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Image, Text, ImageBackground, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

// import { Button } from '../components'
import { WhiteSpace, WingBlank, Icon, Card, Button, Grid } from '@ant-design/react-native';
import SegmentedControlTab from "react-native-segmented-control-tab"
import ModalDropdown from 'react-native-modal-dropdown'
import { NavigationActions, scaleSizeW, scaleSizeH, setSpText } from '../utils'

import {IconFont} from "../components";

import { ECharts } from 'react-native-echarts-wrapper';
import {ReadingStatus, SwitchTab, DownFrame, DataTableList} from '../components';
import { Theme } from '../comm'
// "@bang88/china-city-data": "^1.0.0",

@connect()
class Home extends Component {

  constructor() {
    super();
    this.state = {
      selectedIndex: 0,
      selected: 1,
      showChart: 1,
      years:[
        new Date().getFullYear() + '年',
        new Date().getFullYear() + 1 + '年',
        new Date().getFullYear() + 2 + '年',
        new Date().getFullYear() + 3 + '年',
        new Date().getFullYear() + 4 + '年',
        new Date().getFullYear() + 5 + '年',
        new Date().getFullYear() + 6 + '年',
        new Date().getFullYear() + 7 + '年',
        new Date().getFullYear() + 8 + '年',
        new Date().getFullYear() + 9 + '年',
      ],
      startYear: new Date().getFullYear() + '年',
      endYear:  new Date().getFullYear() + '年',
      months: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      startMonth: '1月',
      endMonth: '1月',
    };
  }
  productionData=
    [['中纺粮油（广元）有限公司', 147585, 1456479, 118423,1187195,112358, 1443465, 116930, 1174771, 21.26, 22.68, 24.63, 10.03]];
  option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      data:['当月产值（万元）','1-6月产值累计（万元）','当月产值同比增值（%）'],
      x: 'left',
      y: 'bottom',
      orient: 'vertical',
      itemGap: 0
    },
    xAxis: [
      {
        type: 'category',
        data: ['1月','2月','3月','4月','5月','6月'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '单位（万元）',
        min: 0,
        max: 5000,
        interval: 1000,
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: '(单位（%）)',
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value}'
        }
      }
    ],
    grid: {bottom: '30%',left:'15%'},
    series: [
      {
        name:'当月产值（万元）',
        type:'bar',
        data:[2.0, 4.9, 4000.0, 2300, 2500, 760.7]
      },
      {
        name:'1-6月产值累计（万元）',
        type:'bar',
        data:[2400, 509, 900.0, 264, 1000]
      },
      {
        name:'当月产值同比增值（%）',
        type:'line',
        yAxisIndex: 1,
        data:[10.0, 8.0, 10.3, 20, 11, 20]
      }
    ]
  };

  gotoScreen=(routeName) => {
    this.props.dispatch(NavigationActions.navigate({ routeName: routeName }))
  }


  render() {
    const  tabs = [
      '工业企业',
      '商贸服务业',
     '农业企业',
     '建筑企业',
    ]
    return (
      <ScrollView
       style={styles.container}
       contentContainerStyle={styles.containerContent}
      >
        <View>
          <ImageBackground style={{
            width: scaleSizeW(750),
            height: scaleSizeH(350),
            justifyContent: 'center',
            alignItems: 'center',
          }} source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564210357065&di=7211c752fb9c3852d6e802ad775895ff&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190613%2Fea7338ac7e9f474b9642f8e628b1d43d.jpeg'}}>
            <Text style={{ fontSize: setSpText(40), color: Theme.whiteColor }}>企业运行分析</Text>
            <View style={{ borderColor: Theme.whiteColor, borderWidth: 1, marginTop: scaleSizeH(10) }}>
              <Text style={{ fontSize: setSpText(28), color: Theme.whiteColor }}>数观企业 尽在指尖</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ paddingHorizontal: scaleSizeW(20), flex: 1}}>

          <WhiteSpace size="lg" />

          <View style={{ marginHorizontal: scaleSizeW(-20) }}>
            <SegmentedControlTab
              values={tabs}
              tabStyle = {{ backgroundColor:Theme.whiteColor, borderColor: Theme.whiteColor }}
              activeTabStyle = {{ backgroundColor:Theme.whiteColor }}
              tabTextStyle = {{ color: Theme.darkTextColor }}
              activeTabTextStyle = {{ color: Theme.baseColor }}
              selectedIndex={this.state.selectedIndex}
              onTabPress={(index) => {
                  this.setState({
                    ...this.state,
                    selectedIndex: index
                  });
              }}
            />
          </View>

          <WhiteSpace size="lg" />

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.borderSty} onPress = {() => {this.setState({selected: 1})}}>
              <Text style={{ color: this.state.selected === 1 ? Theme.baseColor : Theme.darkTextColor}}>汇总数据</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.borderSty} onPress = {() => {this.setState({selected: 2})}}>
              <Text style={{ color: this.state.selected === 2 ? Theme.baseColor : Theme.darkTextColor }}>企业详细数据</Text>
            </TouchableOpacity>
          </View>

          <WhiteSpace size="lg" />

          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
                <Text style={{ color: Theme.darkTextColor}}>数据周期:</Text>
              </View>
              <View style={{flex: 4, flexDirection: 'row'}}>
                <ModalDropdown
                  options={this.state.years}
                  dropdownStyle={{marginHorizontal: scaleSizeW(25), width: scaleSizeW(200) }}
                  dropdownTextStyle={{color: Theme.darkTextColor }}
                  onSelect = {(idx) => {
                    this.setState({
                      startYear: this.state.years[idx]
                    })
                  }}
                >
                  <DownFrame
                    width={scaleSizeW(200)}
                    leftStyle={{color: Theme.darkTextColor}}
                    leftTitle={this.state.startYear}
                  />
                </ModalDropdown>
                <ModalDropdown
                  options={this.state.months}
                  dropdownStyle={{marginHorizontal: scaleSizeW(25), width: scaleSizeW(150) }}
                  dropdownTextStyle={{color: Theme.darkTextColor }}
                  onSelect = {(idx) => {
                    this.setState({
                      startMonth: this.state.months[idx]
                    })
                  }}
                >
                  <DownFrame
                    width={scaleSizeW(150)}
                    leftStyle={{color: Theme.darkTextColor}}
                    leftTitle={this.state.startMonth}
                  />
                </ModalDropdown>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: scaleSizeH(20) }}>
              <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Text style={{ color: Theme.darkTextColor}}>至:</Text>
              </View>
              <View style={{flex: 4, flexDirection: 'row'}}>
                <ModalDropdown
                  options={this.state.years}
                  dropdownStyle={{marginHorizontal: scaleSizeW(25), width: scaleSizeW(200) }}
                  dropdownTextStyle={{color: Theme.darkTextColor }}
                  onSelect = {(idx) => {
                    this.setState({
                      endYear: this.state.years[idx]
                    })
                  }}
                >
                  <DownFrame
                    width={scaleSizeW(200)}
                    leftStyle={{color: Theme.darkTextColor}}
                    leftTitle={this.state.endYear}
                  />
                </ModalDropdown>
                <ModalDropdown
                  options={this.state.months}
                  dropdownStyle={{marginHorizontal: scaleSizeW(25), width: scaleSizeW(150) }}
                  dropdownTextStyle={{color: Theme.darkTextColor }}
                  onSelect = {(idx) => {
                    this.setState({
                      endMonth: this.state.months[idx]
                    })
                  }}
                >
                  <DownFrame
                    width={scaleSizeW(150)}
                    leftStyle={{color: Theme.darkTextColor}}
                    leftTitle={this.state.endMonth}
                  />
                </ModalDropdown>
              </View>
            </View>
          </View>

          <WhiteSpace size="lg" />
          <View>
            <SwitchTab
              leftTitle={'图'}
              leftStyle={{ color: this.state.showChart === 1 ? Theme.baseColor : Theme.darkTextColor }}
              rightStyle={{ color: this.state.showChart === 2 ? Theme.baseColor : Theme.darkTextColor }}
              rightTitle={'表'}
              onChange={(index) => {
                this.setState({
                  showChart: index
                })
              }}
            />
          </View>

          <WhiteSpace size="lg" />

          <View style={styles.echartWrapper}>
            {this.state.showChart === 1 ?  <ECharts option={this.option}></ECharts> :
              <DataTableList
                headerArr={[
                  {name: '序号'},
                  {name: '统计时间'},
                  {name: '当月产值（元）'},
                  {name: '当月产值同比增速（%）'},
                  {name: '当月产值环比增速（%）'},
                  {name: '当月增值增速（%）'},
                  {name: '工业增加值累计增速（%）'},
                ]}
            />}
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerContent: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
  borderSty: {
    borderColor: '#878787',
    borderWidth: 1,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5
  },
  echartWrapper: {
    height: 300,
    // paddingLeft: 20,
  },
})

export default Home
