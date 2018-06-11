<template>
  <div class="wrapper">
    <m-header></m-header>
    <div class="at-container row">
      <sidebar :data="navs"></sidebar>
      <div class="at-markdown col-sm-24 col-md-18 col-lg-20">
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
    newurl(){
      const name = this.$route.name;
      const isAbs =  ABS_MAP.indexOf(name) >= 0;
      const urlName = URL_MAP[name] ||  name;
      if(isAbs){
        return './taro.html'
      }
      return `./taro.html?time=${Date.now()}/#/pages/component/pages/${urlName}/${urlName}` 
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
.wrapper {
  background-color: #f8faff;
}
.at-container {
  margin: 48px 0 48px 20px;
  width: calc(100% - 450px);
}
.demo-frame {
  width: 375px;
  height: 667px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  border: 15px solid black;
  border-radius: 15px;
  border-top: 30px solid black;
  position: absolute;
  right: 25px;
  top: 140px;
  background-color: white;
  iframe {
    width: 100%;
    height: 100%;
  }
}
.page-header {
  position: relative !important;
}
.footer {
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.8);
}
</style>
