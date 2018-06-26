<template>
  <header
    class="page-header"
    :class="[
      collapse ? 'collapse' : ''
    ]"
    id="J-page-header">
    <div class="nav-container">
      <div class="nav-left">
        <div class="logo">
          <router-link to="Home">
            <img class="logo-img" src="@/assets/taro/logo.png" preload="">基础组件库
          </router-link>
        </div>
        <i class="icon icon-menu nav-icon" @click="toggleMenu"></i>
      </div>
      <div class="nav-right">
        <ul class="navbar">
          <li>
            <a target="_blank" href="https://taro.aotu.io/">框架</a>
          </li>
          <li>
            <a target="_blank" href="https://nervjs.github.io/taro/component.html">API</a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/NervJS/taro">工具</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    collapse: {
      type: Boolean,
      default: true
    }
  },
  created(){
    this.isOpen = false;
  },
  mounted () {
    if (!this.collapse) {
      window.addEventListener('scroll', this.headerCollapse)
    } else {
      window.removeEventListener('scroll', this.headerCollapse)
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.headerCollapse)
  },
  methods: {
    toggleMenu () {
      const header = document.getElementById('J-page-header')

      if (this.isOpen) {
        this.isOpen = false
        header.classList.remove('open')
      } else {
        this.isOpen = true
        header.classList.add('open')
      }
    },
    headerCollapse () {
      const header = document.getElementById('J-page-header')
      const offsetTop = window.scrollY || 0

      if (offsetTop > 50) {
        header.classList.add('collapse')
      } else {
        header.classList.remove('collapse')
      }
    },
  }
}
</script>

<style lang="scss">
@import "@/sass/src/variables/index.scss";

$header-height: 80px;

.page-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  margin: 0 auto;
  height: $header-height;
  background-color: transparent;
  transition: all 0.3s;
  z-index: 100;

  &.collapse {
    background-color: #fff;
    box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.07);
    opacity: 0.98;
  }
  &.open {
    background-color: #fff;
  }
}
.nav-container {
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  color: #1d1d1f;
  max-width: 100%;

  .nav-left {
    float: left;

    .logo {
      position: relative;
      height: $header-height;
      line-height: $header-height;
      & > a {
        line-height: 100px;
        display: inline-block;
        width: 300px;
        padding-left: 140px;
        font-size: 30px;
        font-weight: bold;
        color: #333;
        vertical-align: bottom;
        box-sizing: border-box;
        height: 80px;
      }
      img {
        position: absolute;
        top: 50%;
        left: 0;
        width: 120px;
        transform: translateY(-50%);
      }
      span {
        margin-left: 40px;
        color: #3473e7;
        font-weight: bold;
        font-size: 16px;
      }
    }
    .nav-icon {
      display: none;
      position: absolute;
      top: 50%;
      right: 0;
      margin-top: -10px;
      font-size: 20px;
    }
  }
  .nav-right {
    float: right;

    .navbar {
      line-height: 100px;
      display: inline-block;
      margin: 0;
      padding: 0;
      height: $header-height;
      font-size: 14px;
      line-height: $header-height;
      list-style-type: none;

      a {
        display: inline-block;
        color: #1d1d1f;
        margin: 0 45px;
        font-size: 18px;
        &::after {
          content: "";
          display: none;
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          width: 100%;
          background-color: #6190e8;
        }
        &.router-link-active {
          color: #0028b4;

          &::after {
            display: inline-block;
          }
        }
      }
      li {
        position: relative;
        display: inline-block;

        cursor: pointer;
        transition: color 0.3s;

        &:not(:last-child)::after {
          right: 0;
          content: "/";
          position: absolute;
          font-size: 18px;
        }

        &:hover {
          color: #0028b4;

          a {
            color: #0028b4;
          }
        }
        &.disabled {
          color: #c9c9c9;
          cursor: not-allowed;
        }
      }
    }
    .btn-language {
      display: inline-block;
      margin: 0 24px;
      padding: 2px 12px;
      border: 1px solid #1d1d1f;
      border-radius: 2px;
      cursor: pointer;
      transition: color 0.3s, border 0.3s;

      &:hover {
        color: #0028b4;
        border-color: #0028b4;
      }
    }
  }
}

@media screen and (max-width: $screen-sm-max) {
  .nav-container {
    width: 100%;
    overflow: hidden;
    text-align: center;
    .nav-left{
      width: 100%;
    }
    .nav-left .logo {
      display: inline-block;
      & > a {
        width: 200px;
        padding-left: 70px;
        font-size: 20px;
      }
      img {
        width: 80px;
      }
    }
  }
}
</style>
