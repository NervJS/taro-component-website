# 快速开始

## 安装

```bash
# 使用npm安装
$ npm install @tarojs/components --save

# 或者使用yarn安装
$ yarn add @tarojs/components
```

也可通过安装 @tarojs/cli 生成taro项目模板,内置了组件库

```bash
$ npm install -g @tarojs/cli

$ yarn global add @tarojs/cli

### 生成 Taro 项目模板
$ taro init myApp

```

## 使用

直接引入所需要使用的组件库即可

> 该组件库依赖于 [Taro框架](https://github.com/NervJS/taro) 或 [Nerv框架](https://github.com/NervJS/nerv)

```jsx
// 或者引入Nerv
import { Component } from 'nervjs' 

// 引入 Taro
import { Component } from '@tarojs/taro' 


import { View, Text } from '@tarojs/components';

export default class PageView extends Component {
  constructor () {
    super(...arguments)
  }

  render () {
    return (
      <View>
        <Text>Hello World!</Text>
      </View>
    )
  }
}
```
