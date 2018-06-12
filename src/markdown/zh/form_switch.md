# Switch 开关选择器

---

## 如何使用

:::demo

```jsx
import Nerv, { Component } from 'nervjs' // Nerv框架
// import Taro, { Component } from '@tarojs/taro' // 或者使用 Taro框架

import { View, Text, Switch } from '@nerv/nerv-weui'

export default class PageSwitch extends Component {
    constructor() {
        super(...arguments)
    }

    state = {

    }
    render() {
        return (
           <View className='container'>
                <View className='page-body'>
                    <View className='page-section'>
                        <View className='page-section-title'>
                            <Text>默认样式</Text>
                        </View>
                        <View className='page-section-spacing-reset'>
                            <Switch checked ></Switch>
                            <Switch ></Switch>
                        </View>
                    </View>
                    <View className='page-section'>
                        <View className='page-section-title'>
                            <Text>推荐展示样式</Text>
                        </View>
                        <View className='switch-list'>
                            <View className='switch-list__item'>
                                <View className='switch-list__text'>开启中</View>
                                <Switch checked ></Switch>
                            </View>
                            <View className='switch-list__item'>
                                <View className='switch-list__text'>关闭</View>
                                <Switch ></Switch>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
```
```scss
.switch-list {
    position: relative;
    padding: 0 15px;
    background-color: #FFFFFF;
    &__item {
        position: relative;
        display: flex;
        padding: 10px 0;
        &:not(:first-child) {
            &::before {
                content: '';
                position: absolute;
                left: 15px;
                right: -15px;
                top: 0;
                height: 1px;
                border-top: 1px solid #e5e5e5;
                color: #e5e5e5;
            }
        }
    }
    &__text {
        display: flex;
        flex: 1;
        align-items: center;
        padding-left: 15px;
    }
}
```
:::


## Switch 参数

|  H5   | 属性    | 类型    | 默认值 | 说明                           |
| --- | ------- | ------- | ------ | ------------------------------ |
| √  | checked | Boolean | false  | 是否选中                       |
| √   | type    | String  | switch | 样式，有效值：switch, checkbox |
|     | color   | Color   |        | switch 的颜色，同 css 的 color |
