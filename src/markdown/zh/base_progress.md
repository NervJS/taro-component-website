# Progress 进度条

--------------

## 如何使用

:::demo
```jsx
import Nerv, { Component } from 'nervjs' // Nerv框架
// import Taro, { Component } from '@tarojs/taro' // 或者使用 Taro框架

import { View, Text, Progress } from '@nerv/nerv-weui'

export default class PageView extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-spacing' style='margin-bottom:104px;'>
              <Progress percent={20} showInfo strokeWidth={2} ></Progress>
            </View>
            <View className='page-section-spacing'>
              <Progress percent={40} strokeWidth={2} active ></Progress>
            </View>
            <View className='page-section-spacing'>
              <Progress percent={60}  strokeWidth={2} active ></Progress>
            </View>
            <View className='page-section-spacing'>
              <Progress percent={80}  strokeWidth={2} active activeColor='blue' ></Progress>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
```
```scss
.page-section-spacing {
  position: relative;
  margin-bottom: 80px;
  height: 50px;
}

```
:::


## Progress 参数

|  H5  | 属性            | 类型    | 默认值    | 说明                                                    |
| --- | --------------- | ------- | --------- | ------------------------------------------------------- |
| √   | percent         | Float   |           | 百分比 0~100                                            |
| √   | showInfo       | Boolean | false     | 在进度条右侧显示百分比                                  |
| √   | strokeWidth    | Number  | 6         | 进度条线的宽度，单位 px                                 |
|     | color           | Color   | #09BB07   | 进度条颜色 （请使用 activeColor）                       |
| √   | activeColor     | Color   | 6         | 已选择的进度条的颜色                                    |
| √   | backgroundColor | Color   | 6         | 未选择的进度条的颜色                                    |
| √   | active          | Boolean | false     | 进度条从左往右的动画                                    |
|     | activeMode     | String  | backwards | backwards: 动画从头播；forwards：动画从上次结束点接着播 |