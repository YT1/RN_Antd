import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing, Text, View } from 'react-native'
import {Provider} from '@ant-design/react-native'
import {
  createStackNavigator,
  createBottomTabNavigator,
  NavigationActions,
} from 'react-navigation'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce'
import { connect } from 'react-redux'
import { Theme } from './comm'

import Loading from './containers/Loading'
import Login from './containers/Login'
import Home from './containers/Home'
import Project from './containers/Project'
import Finace from './containers/Finace'
import FinaceDetail from './containers/finace/FinaceDetail'
import ProjectDetail from './containers/project/ProjectDetail'

import User from './containers/User'


// bottom Navigator start
const HomeNavigator = createBottomTabNavigator({
  'Home': { screen: Home },
  'Finace': { screen: Finace},
  'Project': { screen: Project },
  'User': { screen: User },
},
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: true,
    cardStyle: {
      backgroundColor: Theme.whiteColor,
    },
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor, focused }) => {
        const { routeName } = navigation.state
        let routeTitle
        switch (routeName) {
          case 'Home':
            routeTitle = '企业运行'
            break
          case 'Finace':
            routeTitle = '融资需求'
            break
          case 'Project':
            routeTitle = '项目协调'
            break
          case 'User':
            routeTitle = '用户中心'
            break
        }
        if (focused) {
          return (
            <Text style={{ textAlign: 'center', color: Theme.baseColor }}>{routeTitle}</Text>
          )
        }
        return (
          <Text style={{ textAlign: 'center', color: Theme.darkTextColor }}>{routeTitle}</Text>
        )
      }, //I18n.t('common.home')
      tabBarButtonComponent: TouchableBounce,

    }),
    tabBarOptions: {
      showLabel: false,
      style: {
        borderTopWidth: null,
      },
    },
    initialRouteName: 'Home',
  }
  )

HomeNavigator.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index]
  let routeTitle
  switch (routeName) {
    case 'Home':
      routeTitle = '企业运行'
      break
    case 'Finace':
      routeTitle = '融资需求'
      break
    case 'Project':
      routeTitle = '项目协调'
      break
    case 'User':
      routeTitle = '用户中心'
      break
  }
  return {
    headerTitle: routeTitle,
    headerTitleStyle:{
      color: Theme.darkTextColor
    }
  }
}

//bottom Navigator end

// main navigator start
const MainNavigator = createStackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },

    FinaceDetail: { screen: FinaceDetail },
    ProjectDetail: { screen: ProjectDetail },

  },
  {
    headerMode: 'float',
    cardStyle: {
      backgroundColor: Theme.whiteColor,
    },
  }
)
// main navigator end


//login navigator start
const AppNavigator = createStackNavigator(
  {
    Main: { screen: MainNavigator },
    Login: { screen: Login },
  },
  {
    headerMode: 'none',
    mode: 'modal',
    navigationOptions: {
      gesturesEnabled: false,
    },
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps
        const { index } = scene

        const height = layout.initHeight
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        })

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        })

        return { opacity, transform: [{ translateY }] }
      },
    }),
  }
)
//login navigator end

export const routerReducer = createNavigationReducer(AppNavigator)

export const routerMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.router
)

const App = reduxifyNavigator(AppNavigator, 'root')

function getActiveRouteName(navigationState) {
  if (!navigationState) {
    return null
  }
  const route = navigationState.routes[navigationState.index]
  if (route.routes) {
    return getActiveRouteName(route)
  }
  return route.routeName
}

@connect(({ app, router }) => ({ app, router }))
class Router extends PureComponent {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.backHandle)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.backHandle)
  }

  backHandle = () => {
    const currentScreen = getActiveRouteName(this.props.router)
    if (currentScreen === 'Login') {
      return true
    }
    if (currentScreen !== 'Home') {
      this.props.dispatch(NavigationActions.back())
      return true
    }
    return false
  }

  render() {
    const { app, dispatch, router } = this.props
    if (app.loading) return <Loading />

    return <Provider><App dispatch={dispatch} state={router} /></Provider>
  }
}

export default Router
