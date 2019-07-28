import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

// import { Button } from '../components'
import {Grid, Icon, Button} from '@ant-design/react-native';

import { createAction, NavigationActions } from '../utils'

@connect(({ app }) => ({ ...app }))
class Account extends Component {


  gotoLogin = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Login' }))
  }

  logout = () => {
    this.props.dispatch(createAction('app/logout')())
  }

  infoLogo = [
    {
      icon: <Icon name={'sliders'} size={200} />,
      text: "关于6S平台"
    }
  ]

  render() {
    const { login } = this.props
    return (
      <View style={styles.container}>
        {/* {login ? (
          <Button text="Logout" onPress={this.logout} />
        ) : (
          <Button text="Goto Login" onPress={this.gotoLogin} />
        )} */}
      <Grid columnNum={1} data={this.infoLogo} hasLine={false} />
      <Button>平台介绍</Button>
      <Button>修改密码</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Account
