# Icon 图标

----

## 如何使用

:::demo
```jsx
import Nerv, { Component } from 'nervjs' // Nerv框架
// import Taro, { Component } from '@tarojs/taro' // 或者使用 Taro框架

import { View, Text, Icon } from '@nerv/nerv-weui'

export default class PageView extends Component {
  constructor() {
    super(...arguments)
  }

  render() {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-spacing'>
              <View className='page__con__list'>
                <Icon size='60' type='success' ></Icon>
                <View className='icon_right'>
                  <View className='icon_right_head'>成功</View>
                  <View className='icon_right_tit'>用于表示操作顺利完成</View>
                </View>
              </View>
              <View className='page__con__list'>
                <Icon size='60' type='info' ></Icon>
                <View className='icon_right'>
                  <View className='icon_right_head'>提示</View>
                  <View className='icon_right_tit'>用于表示信息展示；也常用于缺乏条件的操作拦截，提示用户所需信息</View>
                </View>
              </View>
              <View className='page__con__list'>
                <Icon size='60' type='warn' color='#ccc' ></Icon>
                <View className='icon_right'>
                  <View className='icon_right_head'>普通警告</View>
                  <View className='icon_right_tit'>用于表示操作后将引起一定后果的情况；也用于表示由于系统原因而造成的负向结果</View>
                </View>
              </View>
              <View className='page__con__list'>
                <Icon size='60' type='warn' ></Icon>
                <View className='icon_right'>
                  <View className='icon_right_head'>强烈警告</View>
                  <View className='icon_right_tit'>用于表示由于用户原因造成的负向结果；也用于表示操作后引起不可挽回的严重后果的情况</View>
                </View>
              </View>
              <View className='page__con__list'>
                <Icon size='60' type='waiting' ></Icon>
                <View className='icon_right'>
                  <View className='icon_right_head'>等待</View>
                  <View className='icon_right_tit'>用于表示由于用户原因造成的负向结果；也用于表示操作后引起不可挽回的严重后果的情况</View>
                </View>
              </View>
              <View className='page__con__list icon_sml'>
                <Icon size='20' type='success_no_circle' ></Icon>
                <View className='icon_right'>
                  <View className='icon_right_head'>多选控件图标_已选择</View>
                  <View className='icon_right_tit'>用于多选控件中，表示已选择该项目</View>
                </View>
              </View>
              <View className='page__con__list icon_sml'>
                <Icon size='20' type='warn' ></Icon>
                <View className='icon_right'>
                  <View className='icon_right_head'>错误提示</View>
                  <View className='icon_right_tit'>用于在表单中表示出现错误</View>
                </View>
              </View>
              <View className='page__con__list icon_sml'>
                <Icon size='20' type='success' ></Icon>
                <View className='icon_right'>
                  <View className='icon_right_head'>单选控件图标_已选择</View>
                  <View className='icon_right_tit'>用于单选控件中，表示已选择该项目</View>
                </View>
              </View>
              <View className='page__con__list icon_sml'>
                <Icon size='20' type='download' ></Icon>
                <View className='icon_right'>
                  <View className='icon_right_head'>下载</View>
                  <View className='icon_right_tit'>用于表示可下载</View>
                </View>
              </View>
              <View className='page__con__list icon_sml'>
                <Icon size='20' type='clear' color='red' ></Icon>
                <View className='icon_right'>
                  <View className='icon_right_head'>停止或关闭</View>
                  <View className='icon_right_tit'>用于在表单中，表示关闭或停止</View>
                </View>
              </View>
              <View className='page__con__list icon_sml'>
                <Icon size='20' type='search' ></Icon>
                <View className='icon_right'>
                  <View className='icon_right_head'>搜索</View>
                  <View className='icon_right_tit'>用于搜索控件中，表示可搜索</View>
                </View>
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

.page__con__list {
  position: relative;
  display: flex;
  margin-bottom: 40px;
  min-height: 120px;

  icon {
    position: absolute;
    left: 0;
  }

  &.icon_sml {
    icon {
      position: absolute;
      left: 40px;
      top:10px;
    }
  }
}

.icon_right {
  &_head {
    color: #333;
    font-size: 32px;
  }

  &_tit {
    color: #999;
    font-size: 26px;
  }
}


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
