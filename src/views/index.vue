<template>
  <div class="wrapper">
    <m-header :collapse="false"></m-header>
    <section class="home-container">
      <div class="right-banner"></div>
      <div class="info-box">
        <h1 class="title">Taro基础组件库</h1>
        <div class="note">
          <h4>为快速开发多端项目准备的</h4>
          <h4>基于微信小程序和 WeUI 规范实现的基础组件库</h4>
        </div>
        
        <div class="btn-container">
          <div class="btn btn-begin">
            <a @click="toDemo" to="/zh/docs/introduction">开始使用</a>
          </div>
          <div class="btn btn-github">
            <a target="_blank" href="https://github.com/NervJS/taro/tree/master/packages/taro-components">Github</a>
          </div>
        </div>
      </div>
      <section class="img-container">
        <img class="phone " src="@/assets/taro/phone.png" alt="">
        <img class="image animated fadeInUp" src="@/assets/taro/image.png" alt="">
        <img class="web animated fadeWeb" src="@/assets/taro/web.png" alt="">
        <img class="media animated fadeMedia" src="@/assets/taro/media.png" alt="">
        <img class="message animated fadeMessage" src="@/assets/taro/message.png" alt="">
        <img class="important" src="@/assets/taro/important.png" alt="">
        <img class="share" src="@/assets/taro/share.png" alt="">
      </section>
    </section>
  </div>
</template>

<script>
import MHeader from '../components/header'
import MFooter from '../components/footer'

export default {
  components: {
    MHeader,
    MFooter
  },
  methods:{
    toDemo(){
      if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
          window.location.href = "./static/taro/";
        } else {
          this.$router.push('/zh/docs/introduction')
        }
    }
  }
}
</script>


<style lang="scss" scoped>
@import "@/sass/src/variables/index.scss";
$bg-color: #f8faff;
$drop-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);

.home-container {
  width: 1200px;
  max-width: 100%;
  height: 100vh;
  position: relative;
  margin: 0 auto;
}
.img-container {
  width: 700px;
  position: absolute;
  right: -100px;
  top: 35vh;
  background: url("../assets/taro/phone.png") no-repeat;
  background-size: contain;
  img {
    position: absolute;
    &.image {
      top: -100px;
      right: 150px;
      z-index: 1;
      animation-delay: 0.5s;
    }
    &.web {
      top: -50px;
      left: 180px;
      z-index: 2;
      animation-delay: 1.5s;
    }
    &.media {
      top: 100px;
      right: 280px;
      z-index: 3;
      animation-delay: 2s;
    }
    &.message {
      top: -40px;
      left: 20px;
      animation-delay: 2.3s;
    }
    &.important {
      top: 320px;
      right: 420px;
      animation-delay: 2.1s;
    }
    &.share {
      top: 365px;
      right: 330px;
      animation-delay: 2.4s;
    }
  }
}

.info-box {
  left: 0;
  top: calc(25vh + 80px);
  position: absolute;
  .title {
    font-size: 80px;
    color: #2842a2;
    font-style: italic;
    animation-delay: 2.5s;
  }
  .note {
    h4 {
      color: #666666;
      font-size: 20px;
    }
  }
}

.btn-container {
  margin-top: 60px;

  .btn {
    display: inline-block;
    text-align: center;
    width: 190px;
    height: 56px;
    font-size: 18px;
    margin-right: 30px;
    line-height: 56px;
    border-radius: 28px;
    transition: all 0.3s;
    cursor: pointer;

    a {
      display: inline-block;
      width: 100%;
      height: 100%;
    }
  }
  .btn-begin {
    background-color: #2842a2;
    a {
      color: #fff;
    }
  }
  .btn-github {
    border: 1px solid #2842a2;
    a {
      color: #2842a2;
    }
  }
}

@media screen and (max-width: $screen-sm-max) {
  .home-container {
    height: auto;
    margin-top: calc(80px + 10vh);
  }
  .info-box {
    text-align: center;
    position: initial;
    .btn-container .btn {
      margin-bottom: 20px;
    }
  }
  .img-container {
    display: none;
  }
}

.animated {
  animation-duration: 0.8s;
  animation-fill-mode: both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUp {
  animation-name: fadeInUp;
}

@keyframes fadeWeb {
  from {
    opacity: 0;
    transform: translate3d(140px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeWeb {
  animation-name: fadeWeb;
}

@keyframes fadeMedia {
  0% {
    opacity: 0;
    transform: translate3d(-60px,-130px,0);
  }

  100% {
    opacity: 1;
    transform:translate3d(0, 0, 0);
  }
}

.fadeMedia {
  animation-name: fadeMedia;
}



@keyframes fadeMessage {
  from {
    opacity: 0;
    transform:  translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform:  translate3d(0, 0, 0);
  }
}

.fadeMessage {
  animation-name: fadeMessage;
}
</style>
