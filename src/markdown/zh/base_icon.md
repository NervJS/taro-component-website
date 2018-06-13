# Icon 图标

----

## 如何使用

:::demo
```jsx
!!!include(icon/icon.js)!!!
```
```scss
!!!include(icon/icon.scss)!!!
```
:::

## Icon 参数

<!-- - [x] Be awesome
- [ ] Prepare dinner
  - [x] Research recipe
  - [ ] Buy ingredients
  - [ ] Cook recipe
- [ ] Sleep -->

| H5  | 属性  | 类型   | 默认值 | 说明                                                                                                  |
| --- | ----- | ------ | ------ | ----------------------------------------------------------------------------------------------------- |
| √   | type  | String |        | icon 的类型，有效值：success, success_no_circle, info, warn, waiting, cancel, download, search, clear |
| √   | size  | Number | 23     | icon 的大小，单位 px                                                                                  |
| √   | color | Color  |        | icon 的颜色，同 css 的 color                                                                          |