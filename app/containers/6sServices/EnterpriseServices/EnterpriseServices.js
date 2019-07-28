import React, { Component } from 'react'
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native'
import { connect } from 'react-redux'

import { WhiteSpace, WingBlank, Icon, Card, Button, Grid } from '@ant-design/react-native';

import { NavigationActions } from '../../../utils'
import { ReadingStatus } from '../../../components';
import FormStatus from '../../../components/FormStatus';

@connect()
class EnterpriseServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    title: '企业运行服务'
  }
  //menu6s
  gotoScreen=(routeName) => {
    this.props.dispatch(NavigationActions.navigate({ routeName: routeName }))
  }

  echartData=[
        ['Mon', 222],
        ['Tue', 123],
        ['Wed', 312],
        ['Thu', 121],
        ['Fri', 31],
        ['Sat', 531],
        ['Sun',213]
  ]

  surveyData=[
        {
        data: 356,
        text: `点击量`
        },
        {
        data: 97,
        text: `申请数`
        },
        {
        data: 221,
        text: `跳转量`
        },
  ]

  render() {
    return (
      <ScrollView style={styles.container}>

        <ReadingStatus title='企业运行服务周况' echartData={this.echartData} surveyData={this.surveyData} />

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <FormStatus title='企业运行分析' desitination='企业分析' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <FormStatus title='要素保障服务' desitination='企业分析' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <ReadingStatus title='社保服务直通车' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <ReadingStatus title='税务服务直通车' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <ReadingStatus title='行政审批事项' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <FormStatus title='四上企业申报' desitination='企业分析' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <ReadingStatus title='法律援助服务' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <FormStatus title='我要投诉' desitination='企业分析' />
        </WingBlank>
        </View>

      </ScrollView>
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
})
export default EnterpriseServices
