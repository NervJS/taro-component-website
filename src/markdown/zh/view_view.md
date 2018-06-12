# View 视图容器

----

## 如何使用

:::demo
```jsx
import Nerv, { Component } from 'nervjs' // Nerv框架
// import Taro, { Component } from '@tarojs/taro' // 或者使用 Taro框架

import { View, Text } from '@nerv/nerv-weui'

export default class PageView extends Component {
  constructor() {
    super(...arguments)
  }
  render() {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>flex-direction: row 横向布局</Text>
            </View>
            <View className='page-section-spacing'>
              <View className='flex-wrp' style='flex-direction:row;'>
                <View className='flex-item demo-text-1' ></View>
                <View className='flex-item demo-text-2' ></View>
                <View className='flex-item demo-text-3' ></View>
              </View>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>flex-direction: column 纵向布局</Text>
            </View>
            <View className='flex-wrp' style='flex-direction:column;'>
              <View className='flex-item flex-item-V demo-text-1' ></View>
              <View className='flex-item flex-item-V demo-text-2' ></View>
              <View className='flex-item flex-item-V demo-text-3' ></View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
```

```scss
.flex-wrp {
  margin-top: 60px;
  display: flex;
}
.flex-item {
  width: 200px;
  height: 300px;
  font-size: 26px;
}
.flex-item-V {
  margin: 0 auto;
  width: 300px;
  height: 200px;
}
```
:::

## View 参数

|   H5  | 属性                   | 类型    | 默认值 | 说明                                                         |
| --- | ---------------------- | ------- | ------ | ------------------------------------------------------------ |
| √   | hoverClass            | String  | none   | 指定按下去的样式类。当 hover-class='none' 时，没有点击态效果 |
| √   | hoverStartTime       | Number  | 50     | 按住后多久出现点击态，单位毫秒                               |
| √   | hoverStayTime        | Number  | 400    | 手指松开后点击态保留时间，单位毫秒                           |
|     | hoverStopPropagation | Boolean | false  | 指定是否阻止本节点的祖先节点出现点击态                       |
