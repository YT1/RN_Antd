import { PixelRatio, Dimensions } from 'react-native'
// 获取屏幕的dp
const screenW = Dimensions.get('window').width
const screenH = Dimensions.get('window').height
const fontScale = PixelRatio.getFontScale()
const pixelRatio = PixelRatio.get()
// 高保真的宽度和告诉
const designWidth = 750.0
const designHeight = 1334.0
// 根据dp获取屏幕的px
const screenPxW = PixelRatio.getPixelSizeForLayoutSize(screenW)
const screenPxH = PixelRatio.getPixelSizeForLayoutSize(screenH)
export { NavigationActions, StackActions } from 'react-navigation'

export { default as Storage } from './storage'

export const delay = time => new Promise(resolve => setTimeout(resolve, time))

export const createAction = type => payload => ({ type, payload })

/**
 * 设置text
 * @param size  px
 * @returns {Number} dp
 */
export function setSpText(size) {
  // console.log(`screenW======${screenW}`)
  // console.log(`screenPxW======${screenPxW}`)
  const scaleWidth = screenW / designWidth
  const scaleHeight = screenH / designHeight
  const scale = Math.min(scaleWidth, scaleHeight)
  size = Math.round(size * scale / fontScale + 0.5)
  return size
}

/**
 * 设置高度
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeH(size) {
  const scaleHeight = size * screenPxH / designHeight
  size = Math.round((scaleHeight / pixelRatio + 0.5))
  return size
}

/**
 * 设置宽度
 * @param size  px
 * @returns {Number} dp
 */
export function scaleSizeW(size) {
  const scaleWidth = size * screenPxW / designWidth
  size = Math.round((scaleWidth / pixelRatio + 0.5))
  return size
}

