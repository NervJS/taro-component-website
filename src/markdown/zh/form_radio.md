# Radio 单选框

---

## 如何使用

:::demo

```jsx
!!!include(radio/radio.js)!!!
```
```scss
!!!include(radio/radio.scss)!!!
```
:::

## Radio 参数

#### RadioGroup 单项选择器，内部由多个<radio/>组成。

| 微信小程序 | H5 | ReactNative| 属性名 | 类型 | 默认值 | 说明 |
| :-: | :-: | :-: | :- | :- | :- | :- |
| √ | √ |  | onChange | EventHandle |  | RadioGroup 中选中项发生改变是触发 change 事件，detail = value:[选中的 radio 的 value 的数组] |

#### Radio 单选项目

| 微信小程序 | H5 | ReactNative| 属性名 | 类型 | 默认值 | 说明 |
| :-: | :-: | :-: | :- | :- | :- | :- |
| √ |   |  | value      | String      | false  | <Radio/> 标识。当该 Radio 选中时，RadioGroup 的 change 事件会携带<Radio/>的 value |
| √ | √ |  | checked    | Boolean     | false  | 当前是否选中    |
| √ | √ |  | disabled   | Boolean     | false  | 是否禁用        |
| √ |   |  | color      | Color       | false  | radio 的颜色，同 css 的 color   |
| √ | √ |  | onChange   | EventHandle |        | 选中项发生变化时触发 change 事件   |
