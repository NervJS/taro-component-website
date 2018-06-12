# 文本

---

## 如何使用

:::demo
```jsx
import Nerv, { Component } from 'nervjs' // Nerv框架
// import Taro, { Component } from '@tarojs/taro' // 或者使用 Taro框架

import { View, Text, Button } from '@nerv/nerv-weui'

export default class PageView extends Component {
  constructor () {
    super(...arguments)

    this.contents = []
  }


  add = e => {
    const cot = this.contents
    cot.push({text: 'hello world'})
    this.setState(() => {
      return {contents: cot}
    })
  }

  remove = e => {
    const cot = this.contents
    cot.pop()
    this.setState(() => {
      return {contents: cot}
    })
  }

  render () {
    return (
      <View className="container">
        <Head title="text"/>
        <View className="page-body">
          <View className="page-section">
            <View className="text_content">
              {this.state.contents.map(item => {
                return (
                  <Text>{item.text}</Text>
                )
              })}
            </View>
          </View>
          <View className="page-section">
            <View className="flex-wrp" style="flex-direction:column;">
              <Button className="btn-max-w button_style" plain type="default" onClick={this.add}>add line</Button>
              <Button className="btn-max-w button_style" plain type="default" disabled={this.contents.length ? false:true} onClick={this.remove}>remove line</Button>
            </View>
          </View>
        </View>
        <Foot/>
      </View>
    )
  }
}
```
```scss
.flex-wrp {
  margin-top: 60px;
  display: flex;
}
.flex-item {
  width: 200px;
  height: 300px;
  font-size: 26px;
}
.flex-item-V {
  margin: 0 auto;
  width: 300px;
  height: 200px;
}

.button_style {
  width: 500px;
  height: 80px;
  line-height: 80px;
}

.text_content {
  margin: 0 100px;
  background: #fff;
  padding: 40px 0;
  min-height: 300px;
  text-align: center;

  Text {
    display: block;
  }
}

```
:::
