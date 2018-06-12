# CheckBox 多选框

---

## 如何使用

:::demo

```jsx
import Nerv, { Component } from 'nervjs' // Nerv框架
// import Taro, { Component } from '@tarojs/taro' // 或者使用 Taro框架

import { View, Text, Checkbox } from '@nerv/nerv-weui'

export default class PageCheckbox extends Component {
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
            <View className="container">
                <Head title="Checkbox" />
                <View className="page-body">
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>默认样式</Text>
                        </View>
                        <View className="page-section-spacing-reset">
                            <Checkbox value="选中" checked>选中</Checkbox>
                            <Checkbox style="margin-left: 20px" value="未选中">未选中</Checkbox>
                        </View>
                    </View>
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>推荐展示样式</Text>
                        </View>
                        <View>
                            <View className="checkbox-list">
                                {this.state.list.map((item, i) => {
                                    return (
                                        <Label className="checkbox-list__label" for={i} key={i}>
                                            <Checkbox className="checkbox-list__checkbox" value={item.value} checked={item.checked}>{item.text}</Checkbox>
                                        </Label>
                                    )
                                })}
                            </View>
                        </View>
                    </View>
                </View>
                <Foot />
            </View>
        )
    }
}
```
```scss
.checkbox-list {
    position: relative;
    padding: 10px 15px;
    background-color: #FFFFFF;
    &::before {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #e5e5e5;
        color: #e5e5e5;
    }
    &::after {
        content: " ";
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #e5e5e5;
        color: #e5e5e5;
    }
}

.checkbox-list__label {
    position: relative;
    display: flex;
    padding: 10px 15px;
    &:not(:first-child) {
        &::before {
            content: "";
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

.checkbox-list__checkbox {
    width: 100%;
}
```
:::

## CheckBox 参数

#### 多项选择器，内部由多个 checkbox 组成。

|  H5   | 属性     | 类型        | 默认值 | 说明                                                                                                 |
| --- | -------- | ----------- | ------ | ---------------------------------------------------------------------------------------------------- |
| √   | onChange | EventHandle |        | CheckboxGroup 中选中项发生改变是触发 change 事件，detail = value:[选中的 Checkbox 的 value 的数组] |

#### Checkbox 多选项目

|  H5   | 属性     | 类型        | 默认值 | 说明                                                                                   |
| --- | -------- | ----------- | ------ | -------------------------------------------------------------------------------------- |
|     | value    | String      | false  | Checkbox 标识，选中时触发 CheckboxGroup 的 change 事件，并携带 Checkbox 的 value |
| √   | checked  | Boolean     | false  | 当前是否选中                                                                           |
| √   | disabled | Boolean     | false  | 是否禁用                                                                               |
| √   | color    | Color       | false  | checkbox 的颜色，同 css 的 color                                                       |
| √   | onChange | EventHandle |        | 选中项发生变化时触发 change 事件                                                       |
