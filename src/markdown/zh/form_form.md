# Form 表单

---

## 如何使用

:::demo

```jsx
!!!include(form/form.js)!!!
```
:::

## Form 参数

| 微信小程序 | H5 | ReactNative | 属性值 | 类型 | 说明 |
| :-: | :-: | :-: | :-: |:-: | :-: | :-: |
| √ | x | x | report-submit | Boolean | 是否返回 formId 用于发送模板消息 |
| √ | √ | x | bindsubmit | EventHandle | 携带 form 中的数据触发 submit 事件，event.detail = {value : {'name': 'value'}}
| √ | √ | x | bindreset | EventHandle | 表单重置时会触发 reset 事件