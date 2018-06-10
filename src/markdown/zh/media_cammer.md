# View 视图容器

----

## 如何使用

使用 `class="icon"` 来声明图标，具体图标的名称请 `copy` 相应的标签

:::demo
```html
<Text>flex-direction: row 横向布局</Text>
<View className="flex-wrp" style="flex-direction:row;">
  <View className="flex-item demo-text-1"/>
  <View className="flex-item demo-text-2"/>
  <View className="flex-item demo-text-3"/>
</View>
<Text>flex-direction: column 纵向布局</Text>

<View className="flex-wrp" style="flex-direction:column;">
  <View className="flex-item flex-item-V demo-text-1"/>
  <View className="flex-item flex-item-V demo-text-2"/>
  <View className="flex-item flex-item-V demo-text-3"/>
</View>
```
:::

## Icon 参数

| 是否支持 | 属性           | 类型        | 默认值 | 说明                                                         |
| -------- | -------------- | ----------- | ------ | ------------------------------------------------------------ |
| √        | devicePosition | String      | back       | 前置或后置，值为front, back                                     |
| √        | onStop       | EventHandle     |    | 摄像头在非正常终止时触发，如退出后台等情况        |
| √         | onError       | EventHandle     |   | 用户不允许使用摄像头时触发                                             |
