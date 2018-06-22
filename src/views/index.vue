<template>
  <div class="wrapper">
    <m-header :collapse="false"></m-header>
      <section class="home-container">
        <div class="right-banner"></div>
        <div class="info-box">
          <div class="logo">
            Taro
          </div>
          <h1>一套基于微信小程序和WEUI的基础组件库</h1>
          <div class="btn-container">
            <div class="btn btn-begin"><router-link to="/zh/docs/introduction">开始使用</router-link></div>
            <div class="btn btn-github"><a href="https://github.com/NervJS/nerv-weui">Github</a></div>
          </div>
        </div>
        <section class="img-container">
          <img src="@/assets/banner.png" alt="">
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
  }
}
</script>


<style lang="scss" scoped>
@import "@/sass/src/variables/index.scss";
$bg-color: #f8faff;
$drop-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);

.right-banner {
  position: absolute;
  width: 60vw;
  height: 60vw;
  right: 0;
  transform: translateX(50%) rotate(45deg);
  background-color: rgba($color: #157eff, $alpha: 0.6);
}
.home-container {
  margin-top: 80px;
  position: relative;
  width: 100%;
  height: 100vh;
  padding-bottom: 50px;
  box-sizing: content-box;
}
.img-container {
  width: 60vw;
  position: absolute;
  margin: auto;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  height: 42vw;
  z-index: -1;
  max-width: 1080px;
  img {
    width: 100%;
  }
}
.info-box {
  left: 200px;
  top: 250px;
  position: absolute;
  .logo {
    font-size: 150px;
    line-height: 1;
  }
  h1 {
    margin-top: 40px;
    color: #8994c6;
    font-size: 32px;
  }
}

.btn-container {
  margin-top: 60px;

  .btn {
    display: inline-block;
    text-align: center;
    width: 190px;
    height: 56px;
    margin: 0 35px;
    font-size: 18px;
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
    color: #fff;
    background-image: linear-gradient(90deg, #00aeff 0%, #3369e7 100%);
    box-shadow: 0 2px 6px 0 rgba(51, 105, 231, 0.4);

    &:hover {
      box-shadow: 0 4px 12px 0 rgba(51, 105, 231, 0.4);

      a {
        color: #fff;
      }
    }
    a {
      color: #fff;
    }
  }
  .btn-github {
    color: #316de9;
    border: 1px solid #2f6ee9;

    &:hover {
      color: $brand-blue-400;
      border-color: $brand-blue-400;
    }
  }
}
.section-navigation {
  position: absolute;
  right: 0;
  .container {
    margin: 80px auto 200px;
    height: 380px;
    border-radius: 4px;
    background-color: #fff;
    box-shadow: $drop-shadow;
  }
  .navigation-panel {
    margin-top: 56px;
    padding-left: 32px;
    width: 250px;
    height: 250px;

    .icon-cnt {
      margin-left: -32px;
      width: 80px;
      height: 83px;

      img {
        width: 100%;
      }
    }
    .title {
      margin: 16px 0;
      color: #4573de;
      font-size: 18px;
    }
    .desc {
      color: #6b798c;
      font-size: 14px;
      line-height: 1.5;
    }
    .btn-readmore {
      display: inline-block;
      margin-top: 16px;
      color: #6b798c;
      font-size: 13px;
      border: 1px solid #ececec;
      border-radius: 2px;
      transition: all 0.3s;
      cursor: pointer;

      &:hover:not(.disabled) {
        color: $brand-blue-400;
        border-color: $brand-blue-400;
      }
      &.disabled {
        cursor: not-allowed;
      }

      a {
        display: block;
        padding: 4px 20px;
        color: #6b798c;
      }
    }
  }
}
@media screen and (max-width: $screen-sm-max) {
}
</style>
