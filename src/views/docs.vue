<template>
  <div class="wrapper">
    <m-header></m-header>
    <div class="at-container row">
      <sidebar :data="navs"></sidebar>
      <div class="at-markdown col-sm-24 col-md-18 col-lg-20">
        <div class="qrcode-container">
          <img src="@/assets/qr_code.png" alt="qrcode">
          <div class="qrcode-modal">
            <h6>扫描二维码查看演示效果</h6>
            <qrcode class="qrcode-box" :value="completeUrl" :options="{ size: 150 }"></qrcode>
          </div>
        </div>
        <div class="wxapp-container">
          <img src="@/assets/wxapp-logo.png" alt="qrcode">
          <div class="qrcode-modal">
            <h6>扫描二维码查看演示效果</h6>
            <img class="wxapp-qrcode" src="@/assets/wxapp.jpg" alt="wxapp">
          </div>
        </div>
        <transition name="fade" mode="out-in" @after-leave="afterLeave">
          <router-view></router-view>
        </transition>
      </div>
    </div>
    <div class="demo-frame">
      <iframe  :src="newurl" frameborder="0"></iframe>
    </div>
    <m-footer></m-footer>
  </div>
</template>

<script>
import MHeader from '../components/header'
import MFooter from '../components/footer'
import Sidebar from '../components/sidebar'
import navsConfig from '@/nav'

const URL_MAP = {
  scrollview: 'scroll-view',
}

const ABS_MAP = ['introduction','installation','quickstart','changelog']

export default {
  components: {
    Sidebar,
    MHeader,
    MFooter
  },
  data () {
    return {
      navs: navsConfig.zh.components
    }
  },
  computed:{
    completeUrl(){
      const path = document.location.href.split('#')[0]
      const url = this.newurl.slice(2);
      return `${path}${url}`;
    },
    newurl(){
      const name = this.$route.name;
      const isAbs =  ABS_MAP.indexOf(name) >= 0;
      const urlName = URL_MAP[name] ||  name;
      if(isAbs){
        return './static/taro/'
      }
      return `./static/taro/?time=${Date.now()}/#/pages/component/pages/${urlName}/${urlName}` 
    }
  },
  methods: {
    afterLeave () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss">
@import "../assets/style/docs.scss";
</style>


<style lang="scss" scoped>
@import "@/sass/src/variables/index.scss";

.wrapper {
  background-color: #f8faff;
}
.at-container {
  margin: 48px 0 48px 20px;
  width: calc(100% - 450px);
}
.demo-frame {
  width: 375px;
  height: 758px;
  position: absolute;
  right: 25px;
  top: 140px;
  background: url("../assets/iframe.png") no-repeat;
  background-size: contain;
  iframe {
    width: 375px;
    height: 755px;
    padding: 18px 22px;
    border-radius: 63px;
  }
}

.qrcode-container,
.wxapp-container {
  position: absolute;
  width: 25px;
  height: 25px;
  right: 45px;
  top: 40px;
  padding-bottom: 15px;
  box-sizing: content-box;
  h6 {
    font-size: 12px;
    text-align: center;
  }
  & > img {
    opacity: 0.3;
    width: 100%;
    height: 100%;
  }
  .wxapp-qrcode {
    width: 150px;
    margin-bottom: 10px;
    margin-top: 10px;
  }
  &:after {
    display: none;
    content: "";
    z-index: 11;
    position: absolute;
    width: 15px;
    height: 15px;
    top: calc(100% - 8px);
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    background-color: white;
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  }
  .qrcode-modal {
    display: none;
    z-index: 10;
    padding: 10px;
    padding-bottom: 5px;
    background-color: white;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    position: absolute;
    top: 100%;
    left: -70px;
    .qrcode-box {
      margin-top: 8px;
      width: 140px;
    }
  }
  &:hover {
    &:after,
    .qrcode-modal {
      display: initial;
    }
  }
}

.wxapp-container {
  right: 80px;
}

@media screen and (max-width: $screen-sm-max) {
  .at-container {
    position: relative;
    margin: 48px auto;
    width: 90%;
    background-color: #fff;
    box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  }
  .demo-frame {
    position: initial;
    right: initial;
    top: initial;
    margin-left: initial;
    margin-bottom: 40px;
    width: 100%;
    height: 500px;
  }
}

.page-header {
  position: relative !important;
}
.footer {
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.8);
}
</style>
