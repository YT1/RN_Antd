import React, { Component } from 'react';
import {ScrollView, View, Text } from 'react-native';
import { connect } from '../../../utils/dva';
import { FormStatus, Button, ReadingStatus } from '../../../components';
import {NavigationActions} from '../../../utils'
import {WhiteSpace, WingBlank} from '@ant-design/react-native';

@connect()
class PoliticsServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
        <ReadingStatus title="政策咨询服务" />

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <ReadingStatus title='文件库' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <ReadingStatus title='专题政策' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <ReadingStatus title='法律法规' />
        </WingBlank>
        </View>

      </ScrollView>
    );
  }
}

export default PoliticsServices;
