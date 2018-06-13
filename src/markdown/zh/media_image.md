# Image 图片

---

## 如何使用

:::demo

```jsx
!!!include(image/image.js)!!!
```

:::

## Image 参数

|       H5       | 属性     | 类型        | 默认值      | 说明                                                   |
| ------------ | -------- | ----------- | ----------- | ------------------------------------------------------ |
| √            | src      | String      |             | 图片资源地址                                           |
| √            | mode     | String      | scaleToFill | 图片裁剪、缩放的模式                                   |
| √（onError） | onError  | HandleEvent |             | 当错误发生时，发布到 AppService 的事件名               |
| √ (onLoad)   | onLoad   | HandleEvent |             | 当图片载入完毕时，发布到 AppService 的事件名           |
|              | lazyLoad | Boolean     | false       | 图片懒加载。只针对 page 与 scroll-view 下的 image 有效 |
