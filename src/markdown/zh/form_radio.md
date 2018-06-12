# Radio 单选框

---

## 如何使用

:::demo

```jsx
import Nerv, { Component } from 'nervjs' // Nerv框架
// import Taro, { Component } from '@tarojs/taro' // 或者使用 Taro框架

import { View, Text, Radio } from '@nerv/nerv-weui'

export default class PageRadio extends Component {
    constructor() {
        super(...arguments)
    }

    state = {
        list: [
            {
                value: '美国',
                text: '美国',
                checked: false
            },
            {
                value: '中国',
                text: '中国',
                checked: true
            },
            {
                value: '巴西',
                text: '巴西',
                checked: false
            },
            {
                value: '日本',
                text: '日本',
                checked: false
            },
            {
                value: '英国',
                text: '英国',
                checked: false
            },
            {
                value: '法国',
                text: '法国',
                checked: false
            }
        ]
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
                            <Radio value='选中' checked>选中</Radio>
                            <Radio style='margin-left: 20px' value='未选中'>未选中</Radio>
                        </View>
                    </View>
                    <View className='page-section'>
                        <View className='page-section-title'>
                            <Text>推荐展示样式</Text>
                        </View>
                        <View>
                            <View className='radio-list'>
                                <RadioGroup>
                                    {this.state.list.map((item, i) => {
                                        return (
                                            <Label className='radio-list__label' for={i} key={i}>
                                                <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>
                                            </Label>
                                        )
                                    })}
                                </RadioGroup>
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
.radio-list {
    position: relative;
    padding: 10px 15px;
    background-color: #FFFFFF;
    &::before {
        content: ' ';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #e5e5e5;
        color: #e5e5e5;
    }
    &::after {
        content: ' ';
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #e5e5e5;
        color: #e5e5e5;
    }
}

.radio-list__label {
    position: relative;
    display: flex;
    padding: 10px 15px;
    &:not(:first-child) {
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            height: 1px;
            border-top: 1px solid #e5e5e5;
            color: #e5e5e5;
            left: 15px;
        }
    }
}

.radio-list__radio {
    width: 100%;
}
```
:::

## Radio 参数

#### RadioGroup 单项选择器，内部由多个<radio/>组成。

|  H5   | 属性     | 类型        | 默认值 | 说明                                                                                           |
| --- | -------- | ----------- | ------ | ---------------------------------------------------------------------------------------------- |
| √   | onChange | EventHandle |        | <radioGroup/>中选中项发生改变是触发 change 事件，detail = value:[选中的 radio 的 value 的数组] |

#### Radio 单选项目

|  H5   | 属性     | 类型        | 默认值 | 说明                                                                                   |
| --- | -------- | ----------- | ------ | -------------------------------------------------------------------------------------- |
|     | value    | String      | false  | <Radio/> 标识。当该<Radio/> 选中时，<radioGroup/> 的 change 事件会携带<Radio/>的 value |
| √   | checked  | Boolean     | false  | 当前是否选中                                                                           |
| √   | disabled | Boolean     | false  | 是否禁用                                                                               |
|     | color    | Color       | false  | radio 的颜色，同 css 的 color                                                          |
| √   | onChange | EventHandle |        | 选中项发生变化时触发 change 事件                                                       |
