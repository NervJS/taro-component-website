# View 视图容器

---

## 如何使用

使用 `class="icon"` 来声明图标，具体图标的名称请 `copy` 相应的标签

:::demo

```html
<Text>默认样式</Text>
<Switch checked/>
<Switch/>
<Text>推荐展示样式</Text>
<Switch checked/>
<Switch/>
```

:::

## Icon 参数

|     | 属性    | 类型    | 默认值 | 说明                           |
| --- | ------- | ------- | ------ | ------------------------------ |
| √   | checked | Boolean | false  | 是否选中                       |
| √   | type    | String  | switch | 样式，有效值：switch, checkbox |
|     | color   | Color   |        | switch 的颜色，同 css 的 color |
