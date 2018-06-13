# View 视图容器

----

## 如何使用

:::demo
```jsx
!!!include(view/view.js)!!!
```

```scss
!!!include(view/view.scss)!!!
```
:::

## View 参数

|   H5  | 属性                   | 类型    | 默认值 | 说明                                                         |
| --- | ---------------------- | ------- | ------ | ------------------------------------------------------------ |
| √   | hoverClass            | String  | none   | 指定按下去的样式类。当 hover-class='none' 时，没有点击态效果 |
| √   | hoverStartTime       | Number  | 50     | 按住后多久出现点击态，单位毫秒                               |
| √   | hoverStayTime        | Number  | 400    | 手指松开后点击态保留时间，单位毫秒                           |
|     | hoverStopPropagation | Boolean | false  | 指定是否阻止本节点的祖先节点出现点击态                       |
