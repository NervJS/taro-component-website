# Slider 滑动选择器

---

## 如何使用

:::demo

```jsx
import Nerv, { Component } from 'nervjs' // Nerv框架
// import Taro, { Component } from '@tarojs/taro' // 或者使用 Taro框架

import { View, Text, Slider } from '@nerv/nerv-weui'

export default class PageSlider extends Component {
    constructor() {
        super(...arguments)
    }

    state = {

    }

    render() {
        return (
            <View className="container">
                <View className="page-body">
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>设置step</Text>
                        </View>
                        <View className="page-section-spacing-reset">
                            <Slider step={1} value={50} ></Slider>
                        </View>
                    </View>
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>显示当前value</Text>
                        </View>
                        <View className="page-section-spacing-reset">
                            <Slider step={1} value={50} showValue ></Slider>
                        </View>
                    </View>
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>设置最小/最大值</Text>
                        </View>
                        <View className="page-section-spacing-reset">
                            <Slider step={1} value={100} showValue min={50} max={200}></Slider>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
```

:::

## Slider 参数

##### 滑动选择器。

|  H5   | 属性            | 类型        | 默认值  | 说明                                          |
| --- | --------------- | ----------- | ------- | --------------------------------------------- |
| √   | min             | Number      | 0       | 最小值                                        |
| √   | max             | Number      | 100     | 最大值                                        |
| √   | step            | Number      | 1       | 步长，取值必须大于 0，并且可被(max - min)整除 |
| √   | disabled        | Boolean     | false   | 是否禁用                                      |
| √   | value           | Number      | 0       | 当前取值                                      |
|     | color           | Color       | #e9e9e9 | 背景条的颜色（请使用 backgroundColor）        |
|     | selectedColor   | Color       | #1aad19 | 已选择的颜色（请使用 activeColor）            |
| √   | activeColor     | Color       | #1aad19 | 已选择的颜色                                  |
| √   | backgroundColor | Color       | #e9e9e9 | 背景条的颜色                                  |
| √   | blockSize       | Number      | 28      | 滑块的大小，取值范围为 12 - 28                |
| √   | blockColor      | Color       | #ffffff | 滑块的颜色                                    |
| √   | showValue       | Boolean     | false   | 是否显示当前 value                            |
| √   | onChange        | EventHandle |         | 完成一次拖动后触发的事件                      |
| √   | onChanging      | EventHandle |         | 拖动过程中触发的事件                          |
