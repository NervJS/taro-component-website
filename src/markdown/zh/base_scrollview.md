# ScrollView 滚动视图容器

---

## 如何使用

:::demo
```jsx
import Nerv, { Component } from 'nervjs' // Nerv框架
// import Taro, { Component } from '@tarojs/taro' // 或者使用 Taro框架

import { View, Text, ScrollView } from '@nerv/nerv-weui'

export default class PageView extends Component {
  constructor() {
    super(...arguments)
  }
  render() {
    return (
      <View className="container">
        <View className="page-body">
          <View className="page-section">
            <View className="page-section-title">
              <Text>Vertical Scroll\n纵向滚动</Text>
            </View>
            <ScrollView className='scrollview'
              scroll-y
              scroll-with-animation
              scroll-top='0'
              style='height: 150px;'
              lower-threshold='20'
              upperThreshold='20'
              bindscrolltoupper={this.handleBindscrolltoupper}
              onScroll={this.handleScroll}>
              <View style='height:150px;background-color:rgb(26,173,25);'>A</View>
              <View style='height:150px;background-color:rgb(39,130,215);'>B</View>
              <View style='height:150px;background-color:rgb(241,241,241);color: #333;'>C</View>
            </ScrollView>
          </View>
          <View className="page-section">
            <View className="page-section-title">
              <Text> Horizontal \n横向滚动</Text>
            </View>
            <ScrollView className='scrollview'
              scroll-x
              scroll-left='0'
              style='white-space: nowrap;'
              bindscrolltolower={this.handleBindscrolltolower}>
              <View style='height:150px;background-color:rgb(26,173,25);display:inline-block;width: 300px;'>A</View>
              <View style='height:150px;background-color:rgb(39,130,215);display:inline-block;width: 300px;'>B</View>
              <View style='height:150px;background-color:rgb(241,241,241);display:inline-block;width: 300px;color: #333;'>C</View>
            </ScrollView>
          </View>
        </View>
      </View>
    )
  }
}
```

```scss
.scrollview {
  text-align: center;
  line-height: 300px;
  color: #fff;
  width:600px;
  margin:30px auto 0;
}
```
:::

## ScrollView 参数

|     H5      | 属性                | 类型        | 默认值 | 说明                                                                                 |
| ----------- | ------------------- | ----------- | ------ | ------------------------------------------------------------------------------------ |
| √           | scrollX             | Boolean     | false  | 允许横向滚动                                                                         |
| √           | scrollY             | Boolean     | false  | 允许纵向滚动                                                                         |
| √           | upperThreshold      | Number      | 50     | 距顶部/左边多远时（单位 px），触发 scrolltoupper 事件                                |
| √           | lowerThreshold      | Number      | 50     | 距底部/右边多远时（单位 px），触发 scrolltolower 事件                                |
| √           | scrollTop           | Number      |        | 设置竖向滚动条位置                                                                   |
| √           | scrollLeft          | Number      |        | 设置横向滚动条位置                                                                   |
|             | scrollIntoView      | String      |        | 值应为某子元素 id（id 不能以数字开头）。设置哪个方向可滚动，则在哪个方向滚动到该元素 |
| √           | scrollWithAnimation | Boolean     | false  | 在设置滚动条位置时使用动画过渡                                                       |
|             | enableBackToTop     | Boolean     | false  | iOS 点击顶部状态栏、安卓双击标题栏时，滚动条返回顶部，只支持竖向                     |
| √           | onScrolltoupper     | EventHandle |        | 滚动到顶部/左边，会触发 scrolltoupper 事件                                           |
| √           | onScrolltolower     | EventHandle |        | 滚动到底部/右边，会触发 scrolltolower 事件                                           |
| √(onScroll) | onScroll            | EventHandle |        | 是否解码                                                                             |
