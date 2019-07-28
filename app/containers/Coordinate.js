import React, { Component } from 'react'
import { StyleSheet, ScrollView, FlatList, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

// import { Button } from '../components'
import { WhiteSpace, WingBlank, Icon, Card, Button, Grid } from '@ant-design/react-native';
import { ECharts } from 'react-native-echarts-wrapper';

import { NavigationActions } from '../utils'


@connect()
class Coordinate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }



  option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
  };

  enterprisesData = [
      {
          key: '1',
          title: '中粮集团',
      },
      {
          key: '2',
          title: '中粮集团',
      },
      {
          key: '3',
          title: '中粮集团',
      },
      {
          key: '4',
          title: '中粮集团',
      }
  ]

  listHeader = () => <Text>我是头部</Text>;
  renderList = ({item}) => {
      return (
          <Card>
              <Card.Header
                title={item.title}
              />
              <Card.Body>
                  <Text>一些简略信息</Text>
              </Card.Body>
              <Card.Footer
                content="2019年4月21日"
              />
          </Card>
      );
  }

  render() {
    return (
      <View
       style={styles.container}
      >
        <View style={styles.echartWrapper}>
                  <ECharts option={this.option}></ECharts>
        </View>
        <WhiteSpace
        />
        <Card>
            <Card.Header
                title="申请列表"
            />
        </Card>
        <FlatList
            // ListHeaderComponent={this.listHeader}
            data={this.enterprisesData}
            renderItem={this.renderList}
        />
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
    height: 250,
  },
  survey:{
    // width: 380,
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Coordinate
