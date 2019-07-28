import React, { Component } from 'react';
import {ScrollView, View, Text } from 'react-native';
import { connect } from '../../../utils/dva';
import { FormStatus, Button, ReadingStatus } from '../../../components';
import {NavigationActions} from '../../../utils'
import {WhiteSpace, WingBlank} from '@ant-design/react-native';

@connect()
class ProjectPushServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  gotoScreen=(routeName) => {
    this.props.dispatch(NavigationActions.navigate({ routeName: routeName }))
  }

  render() {
    return (
      <ScrollView>
        <ReadingStatus title="项目推进服务" />

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <ReadingStatus title='投资在线审批服务' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <ReadingStatus title='项目申报办理' />
        </WingBlank>
        </View>

        <WhiteSpace />
        <View>
        <WingBlank size="lg">
        <FormStatus title='建设项目协调服务' desitination='企业分析' />
        </WingBlank>
        </View>

      </ScrollView>

    );
  }
}

export default ProjectPushServices;
