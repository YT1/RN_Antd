import React, { Component } from 'react';
import {ScrollView, View, Text } from 'react-native';
import { connect } from '../../../utils/dva';
import { FormStatus, Button, ReadingStatus } from '../../../components';
import {NavigationActions} from '../../../utils'
import {WhiteSpace, WingBlank} from '@ant-design/react-native';

class InnovationServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
        <ReadingStatus title="科技创新服务周况" />

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <ReadingStatus title='专利申报服务' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <ReadingStatus title='科技项目服务' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <FormStatus title='科技成果服务' desitination='企业分析' />
        </WingBlank>
        </View>

      </ScrollView>
    );
  }
}

export default InnovationServices;
