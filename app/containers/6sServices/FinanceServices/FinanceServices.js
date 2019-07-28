import React, { Component } from 'react';
import {ScrollView, View, Text } from 'react-native';
import { connect } from '../../../utils/dva';
import { FormStatus, Button, ReadingStatus } from '../../../components';
import {NavigationActions} from '../../../utils'
import {WhiteSpace, WingBlank} from '@ant-design/react-native';

@connect()
class FinanceServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ScrollView>
        <ReadingStatus title="金融与证券服务周况" />


        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <FormStatus title='融资需求登记' desitination='企业分析' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <FormStatus title='融资担保申请' desitination='企业分析' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <ReadingStatus title='银行直通车' />
        </WingBlank>
        </View>


      </ScrollView>
    );
  }
}

export default FinanceServices;
