import { createAction, NavigationActions, Storage } from '../utils'
import * as readService from '../services/read'
import {Toast} from '@ant-design/react-native'

export default {
  namespace: 'financeDemands',
  state: {
  },
  //同步
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
  //异步
  effects: {
      *initFinanceDemands(action, {call, put, select}){
        console.log("initFinanceDemands")
        //异步用call, 同步用put，获取全局状态用select
        yield put({type:"app/updateState", payload: {loading:true}})
        const globalState=yield select((state)=>state)
        console.log("global state in model financeDemands", globalState)
        const res = yield call(readService.fetchFinanceDemands)
        if(res){
          yield put({type: 'updateState', payload: res.data})
          yield put({type:"app/updateState", payload: {loading:false}})
        }else{
          yield put(NavigationActions.navigate({routeName: "Account"}))
          console.log("fail",res)
        }
      }
  },
  subscriptions: {
    //调用时加载
    setup({ dispatch }) {
        dispatch({type:"initFinanceDemands"})
    },
  },
}
