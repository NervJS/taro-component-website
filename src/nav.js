module.exports = {
  zh: {
    components: [
      {
        title: "综述",
        name: "Docs",
        items: [
          { title: "介绍", name: "Abs_Introduction" },
          // { title: "安装", name: "Abs_Installation" },
          { title: "快速上手", name: "Abs_Quickstart" },
          // { title: "更新日志", name: "Abs_Changelog" }
        ]
      },
      {
        title: "组件",
        name: "Docs",
        groups: [
          {
            title: "视图容器",
            items: [
              { title: "视图容器", name: "View_View" },
              { title: "可滚动视图容器", name: "View_ScrollView" },
              { title: "滑块视图容器", name: "View_Swiper" }
            ]
          },
          {
            title: "基础内容",
            items: [
              { title: "图标", name: "Base_Icon" },
              { title: "文本", name: "Base_Text" },
              { title: "进度条", name: "Base_Progress" }
            ]
          },
          {
            title: "表单组件",
            items: [
              { title: "按钮", name: "Form_Button" },
              { title: "单选框", name: "Form_Radio" },
              { title: "多选框", name: "Form_CheckBox" },
              { title: "表单", name: "Form_Form" },
              { title: "标签", name: "Form_Label" },
              { title: "输入框", name: "Form_Input" },
              { title: "多行输入框", name: "Form_Textarea" },
              { title: "选择器", name: "Form_Picker" },
              { title: "滑动选择器", name: "Form_Slider" },
              { title: "开关选择器", name: "Form_Switch" }
            ]
          },
          // {
          //   title: "导航组件",
          //   items: [{ title: "链接", name: "Nav_Navigator" }]
          // },
          {
            title: "媒体组件",
            items: [
              { title: "音频", name: "Media_Audio" },
              { title: "图片", name: "Media_Image" },
              { title: "视频", name: "Media_Video" },
              { title: "相机", name: "Media_Camera" }
            ]
          }
        ]
      }
    ]
  }
}
