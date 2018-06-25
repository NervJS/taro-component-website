<template>
  <div class="wrapper">
    <m-header :collapse="false"></m-header>
    <section class="home-container">
      <div class="right-banner"></div>
      <div class="info-box">
        <h1 class="title">Taro</h1>
        <div class="note">
          <h4>一套遵循WeUI规范</h4>
          <h4>使用Nerv实现的移动端基础组件库</h4>
        </div>
        
        <div class="btn-container">
          <div class="btn btn-begin">
            <a @click="toDemo" to="/zh/docs/introduction">开始使用</a>
          </div>
          <div class="btn btn-github">
            <a href="https://github.com/NervJS/nerv-weui">Github</a>
          </div>
        </div>
      </div>
      <section class="img-container">
        <img class="phone " src="@/assets/taro/phone.png" alt="">
        <img class="image animated fadeInUp" src="@/assets/taro/image.png" alt="">
        <img class="web animated fadeInDown" src="@/assets/taro/web.png" alt="">
        <img class="media animated fadeInUp" src="@/assets/taro/media.png" alt="">
        <img class="message animated  fadeInLeft" src="@/assets/taro/message.png" alt="">
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
  right: 0;
  top: 35vh;
  background: url("../assets/taro/phone.png") no-repeat;
  background-size: contain;
  img {
    position: absolute;
    &.image {
      top: -100px;
      right: 150px;
      z-index: 1;
      animation-delay: 0.3s;
    }
    &.web {
      top: -50px;
      left: 180px;
      z-index: 2;
      animation-delay: 0.6s;
    }
    &.media {
      top: 100px;
      right: 280px;
      z-index: 3;
      animation-delay: 0.9s;
    }
    &.message {
      top: -40px;
      left: 20px;
      animation-delay: 1.5s;
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
    font-size: 110px;
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
    margin-top: 150px;
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
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

@-webkit-keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
}

@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}
</style>
