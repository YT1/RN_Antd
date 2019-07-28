import React, { Component } from 'react';
import {ScrollView, View, Text } from 'react-native';
import { connect } from '../../../utils/dva';
import { FormStatus, Button, ReadingStatus } from '../../../components';
import {NavigationActions} from '../../../utils'
import {WhiteSpace, WingBlank} from '@ant-design/react-native';

@connect()
class BrandMarketServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
        <ReadingStatus title="品牌与市场促进服务" />

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <ReadingStatus title='市场开拓' />
        </WingBlank>
        </View>


        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <FormStatus title='金字招牌申请' desitination='企业分析' />
        </WingBlank>
        </View>

      </ScrollView>
    );
  }
}

export default BrandMarketServices;
