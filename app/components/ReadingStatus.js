import React, { Component } from 'react'
import PropTypes from 'prop-types';

import { StyleSheet, ScrollView, View, Image, Text } from 'react-native'

// import { Button } from '../components'
import { WhiteSpace, WingBlank, Icon, Card, Button, Grid } from '@ant-design/react-native';
import { ECharts } from 'react-native-echarts-wrapper';



class ReadingStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  LiveWeeklyOption = {
    title: {
      text: this.props.title,
      x:  'center',
      y: '5%',
      textStyle: {
        color: '#ccc'
      }
    },
    grid: {
      x: 0,
      y: 0,
      width: '100%',
      height: '100%'
    },
    backgroundColor: '#2c343c',
    xAxis: {
        type: 'category',
    },
    yAxis: {
        type: 'value',
        splitLine: {
          show: false
        }
    },
    dataset: {
        dimensions: ['date', 'value'],
        source: this.props.echartData
    },
    series: [{type: 'line', areaStyle: {}}]
  }



  render() {
      const surveyData = this.props.surveyData;

    return (
        <View>
        <View style={styles.echartWrapper}>
                  <WhiteSpace />
                  <ECharts option={this.LiveWeeklyOption}></ECharts>
        </View>
        <View style={styles.surveyWrapper}>
          <WingBlank size={"lg"}>
          <WingBlank size={"lg"}>
          <View style={styles.surveyContainer}>
          {surveyData.map((_obj, i)=>
            {
              return (
              <View style={(i==surveyData.length-1)?styles.surveyLastItem: styles.surveyItem} key={i}>
                <Text style={{color: '#ccc'}}>{_obj.data}</Text>
                <Text style={{color: '#ccc'}}>{_obj.text}</Text>
              </View>
              );
            }
          )}
          </View>
          </WingBlank>
          </WingBlank>
        </View>
        </View>
    );
  }
}

ReadingStatus.propTypes = {
    title: PropTypes.string.isRequired,
    echartData: PropTypes.array.isRequired,
    surveyData: PropTypes.array.isRequired
}

ReadingStatus.defaultProps = {
    title: 'APP使用率周况',
    echartData: [
        ['Mon', 222],
        ['Tue', 123],
        ['Wed', 312],
        ['Thu', 121],
        ['Fri', 31],
        ['Sat', 531],
        ['Sun',213]
        ],
    surveyData: [
        {
        data: 356,
        text: `下载量`
        },
        {
        data: 97,
        text: `注册企业`
        },
        {
        data: 221,
        text: `注册用户`
        },
    ]

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
    height: 200,
    backgroundColor: '#2c343c',
    // paddingLeft: 20,
  },
  surveyWrapper:{
    backgroundColor: '#2c343c',
    // position: 'relative',
    // top: -100,
    // backgroundColor: '#fff',
    // width: 380,
    paddingBottom:20,
  },
  surveyContainer:{
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#c23531',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,


  },
  surveyItem: {
    backgroundColor: '#c23531',
    height: 50,
    flex:1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.3,
    borderRightColor: '#ccc'
  },
  surveyLastItem: {
    backgroundColor: '#c23531',
    height: 50,
    flex:1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default ReadingStatus;
