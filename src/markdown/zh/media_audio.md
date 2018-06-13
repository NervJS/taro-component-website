# Audio 音频

---

## 如何使用

:::demo

```jsx
!!!include(audio/audio.js)!!!
```

:::

## Audio 参数

| H5 | 属性         | 类型        | 默认值 | 说明                                                                        |
| -------- | ------------ | ----------- | ------ | --------------------------------------------------------------------------- |
| √        | src          | String      |        | 要播放视频的资源地址                                                        |
| √        | controls     | Boolean     | true   | 是否显示默认播放控件（播放/暂停按钮、播放进度、时间）                       |
| √        | autoplay     | Boolean     | false  | 是否自动播放                                                                |
|          | poster       | String      |        | 视频封面的图片网络资源地址，如果 controls 属性值为 false 则设置 poster 无效 |
|          | initialTime  | Number      |        | 指定视频初始播放位置                                                        |
| √        | loop         | Boolean     | false  | 是否循环播放                                                                |
| √        | muted        | Boolean     | false  | 是否静音播放                                                                |
| √        | onPlay       | EventHandle |        | 当开始/继续播放时触发 play 事件                                             |
| √        | onPause      | EventHandle |        | 当暂停播放时触发 pause 事件                                                 |
| √        | onEnded      | EventHandle |        | 当播放到末尾时触发 ended 事件                                               |
| √        | onTimeupdate | EventHandle |        | 播放进度变化时触发，触发频率 250ms 一次                                     |
| √        | onError      | EventHandle |        | 视频播放出错时触发                                                          |
