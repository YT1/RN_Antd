import React, { PureComponent } from 'react'
import { BackHandler, Animated, Easing, Text, View } from 'react-native'
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

import Loading from './containers/Loading'
import Login from './containers/Login'
import Home from './containers/Home'
import Project from './containers/Project'
import User from './containers/User'
import Account from './containers/Account'
import Detail from './containers/Detail'

import Finace from './containers/Finace'
import Coordinate from './containers/Coordinate';

//企业运行服务
import EnterpriseServices from './containers/6sServices/EnterpriseServices/EnterpriseServices';
import EnterpriseAnalyze  from "./containers/6sServices/EnterpriseServices/EnterpriseAnalyze";

//项目推送服务
import ProjectPushServices from './containers/6sServices/ProjectPushServices/ProjectPushServices';

//科技创新服务
import InnovationServices from './containers/6sServices/InnovationServices/InnovationServices';

//金融与证券服务
import FinanceServices from './containers/6sServices/FinanceServices/FinanceServices';

//品牌与市场促进服务
import BrandMarketServices from './containers/6sServices/BrandMarketServices/BrandMarketServices';

// 政策咨询服务
import PoliticsServices from './containers/6sServices/PoliticsServices/PoliticsServices';

// bottom Navigator start
const HomeNavigator = createBottomTabNavigator({
  'Home': { screen: Home },
  'Finace': { screen: Finace},
  'Project': { screen: EnterpriseAnalyze },
  'User': { screen: User },
},
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: true,
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
            <Text style={{ textAlign: 'center', color: '#EE2B62' }}>{routeTitle}</Text>
          )
        }
        return (
          <Text style={{ textAlign: 'center', color:'#878787' }}>{routeTitle}</Text>
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
  }
}

//bottom Navigator end

// main navigator start
const MainNavigator = createStackNavigator(
  {
    HomeNavigator: { screen: HomeNavigator },
    Detail: { screen: Detail },

    //项目运行服务
    EnterpriseServices: {screen: EnterpriseServices},
    // EnterpriseAnalyze: {screen: EnterpriseAnalyze},

    // 项目推送服务
    ProjectPushServices: {screen: ProjectPushServices},

    //科技创新服务
    InnovationServices: {screen: InnovationServices},

    //金融与证券服务
    FinanceServices: {screen: FinanceServices},

    //品牌与市场促进服务
    BrandMarketServices: {screen: BrandMarketServices},

    //政策咨询服务
    PoliticsServices: {screen: PoliticsServices}

  },
  {
    headerMode: 'float',
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

    return <App dispatch={dispatch} state={router} />
  }
}

export default Router
