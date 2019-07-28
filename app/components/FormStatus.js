import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {  StyleSheet, View, Text } from 'react-native';
import {Card, Button} from '@ant-design/react-native';
import { connect } from '../utils/dva';
import {NavigationActions} from '../utils';

@connect()
class FormStatus extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  gotoScreen=(routeName) => {
    this.props.dispatch(NavigationActions.navigate({ routeName: routeName }))
  }

  render() {
      const {title, desitination, surveyData} = this.props;
    return (
      <View>
          <Card>
            <Card.Header
              title={title}
            />
            <Card.Body>
              <View style={styles.surveyContainer}>
              {surveyData.map((_obj, i)=>
                {
                  return (
                  <View style={(i==surveyData.length-1)?styles.surveyLastItem: styles.surveyItem}>
                    <Text style={{color: '#222'}}>{_obj.data}</Text>
                    <Text style={{color: '#222'}}>{_obj.text}</Text>
                  </View>
                  );
                }
              )}
              </View>
            </Card.Body>
            <Card.Footer
            content={<Button onPress={()=>this.gotoScreen(desitination)}>>>查看详情>></Button>}
            />
          </Card>
      </View>
    );
  }
}

FormStatus.defaultProps = {
  title: '企业运行分析',
  desitination: 'EnterpriseServices',
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
  surveyContainer:{
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    // backgroundColor: '#c23531',


  },
  surveyItem: {
    // backgroundColor: '#c23531',
    height: 50,
    flex:1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.3,
    borderRightColor: '#ccc'
  },
  surveyLastItem: {
    // backgroundColor: '#c23531',
    height: 50,
    flex:1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default FormStatus;
