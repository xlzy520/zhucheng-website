<template>
  <el-header class="header-main" :class="headerClass" style="height: auto">
    <el-row>
      <el-row>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
          <div class="logo">
            <img :src="logo" width="135" height="38" alt="">
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
          <div class="header_nav">
            <el-menu class="" :default-active="activeRoute" mode="horizontal"
                     background-color="transparent"
                     @select="handleSelect"
                     text-color="#5AA572">
              <template v-for="menuItem in menuList">
                <el-submenu v-if="menuItem.children" :index="menuItem.id" background-color="#545c64"
                            :key="menuItem.id">
                  <template slot="title">
                    <router-link :data-hover="menuItem.name" :to="{path:menuItem.url}">
                      {{menuItem.name}}
                    </router-link>
                  </template>
                  <el-menu-item v-for="subMenuItem in menuItem.children" :key="subMenuItem.id"
                                :index="subMenuItem.id">
                    <a :href="subMenuItem.url" v-if="subMenuItem.isExtra" target="_blank">{{subMenuItem.name}}</a>
                    <router-link v-else :to="{path: subMenuItem.url}">
                      {{subMenuItem.name}}
                    </router-link>
                  </el-menu-item>
                </el-submenu>

                <el-menu-item v-else :key="menuItem.id" :index="menuItem.id">
                  <router-link :data-hover="menuItem.name"
                               :to="{path:menuItem.url}">
                    {{menuItem.name}}
                  </router-link>
                </el-menu-item>
              </template>
            </el-menu>
          </div>
        </el-col>
      </el-row>
    </el-row>
    <el-button circle class="back-top" @click="backTop" v-show="backTopShow">
      <i class="el-icon-upload2"></i>
    </el-button>
  </el-header>
</template>

<script>
export default {
  name: 'GlobalHeader',
  props: {
    menuList: {
      type: Array,
      default: ()=> []
    },
    isWhite1: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    headerClass(){
      if (!this.isWhite) {
        return {
          'deep-bg': this.isScrollToMain,
        }
      }
      return {
        'deep-bg': this.isScrollToMain,
        'white': !this.isScrollToMain
      }
    }
  },
  data() {
    return {
      navShow: false,
      logo: 'assets/image/header-logo-green.png',
      isScrollToMain: false,
      backTopShow: false,
      activeRoute: '1',
      isWhite: false
    }
  },
  methods: {
    handleSelect(key) {
      this.isWhite = key === '5';
      this.logo = this.isWhite ? 'assets/image/header-logo-green.png' : 'assets/image/header-logo.png'
    },
    handleScroll() {
      const scrollY = window.scrollY
      const boolBackTop= scrollY > 100;
      const bool = scrollY > 60
      if (boolBackTop !== this.backTopShow) {
        this.backTopShow = boolBackTop
      }
      if (bool !== this.isScrollToMain) {
        this.isScrollToMain = bool
        if (this.isWhite) {
          this.logo = !bool ? 'assets/image/header-logo-green.png' : 'assets/image/header-logo.png'
        }
      }
    },
    backTop() {
      let back = setInterval(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop) {
          document.body.scrollTop -= 100;
          document.documentElement.scrollTop -= 100;
        } else {
          clearInterval(back)
        }
      });
    },
  },
  mounted() {
    const path = this.$route.path
    const item = this.menuList.find(v=> v.url === path)
    if (item) {
      this.activeRoute = item.id
      this.isWhite = item.id === '5';
    }
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less">
  .el-header.header-main {
    position: fixed;
    z-index: 1999;
    width: 100%;
    color: #fff;
    text-align: center;
    line-height: 60px;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0 100px;
    a{
      color: #fff;
      height: 60px;
      display: inline-block;
    }
    &.deep-bg{
      background: #39A54B;
      color: #fff!important;
      .el-menu-item, a{
        color: #fff!important;
      }
      &.white .el-menu--horizontal .el-submenu .el-submenu__title a{
        color: #fff!important;
      }
    }
    .el-menu {
      padding-left: 50px;
      background: transparent;
    }
    .el-menu-item{
      font-size: 14px;
      transition: none;
      padding: 0 30px;
      /*a:after {*/
      /*  content: attr(data-hover);*/
      /*  color: #b22f6f;*/
      /*  opacity: 1;*/
      /*  display: block;*/
      /*  font-weight: 700;*/
      /*  text-transform: uppercase;*/
      /*  -webkit-transition: opacity .3s;*/
      /*  transition: opacity .3s;*/
      /*}*/
    }
    .el-menu--horizontal{
      .el-menu-item{
        border-top: 3px solid transparent;
        &>a{
          color: #fff9;
          transition: transform .5s;
        }
        &.is-active{
          font-size: 16px;
          border-bottom: none;
          border-top: 3px solid #fff;
          &>a{
            color: #fff;
          }
        }
        &:hover{
          background: transparent!important;
          color: #fff!important;
          &>a{
            color: #fff;
            /*transform: translate3d(0,-100%,0);*/
          }
        }
      }
      .el-submenu{
        .el-submenu__title{
          color: #fff9;
          margin-top: 2px;
          i,a{
            color: #fff9;
          }
          &:hover{
            color: #fff;
            i,a{
              color: #fff;
            }
          }
        }
      }

    }

    .el-menu--horizontal>.el-menu-item,
    .el-menu--horizontal>.el-submenu .el-submenu__title {
      background: transparent!important;
    }

    .el-menu.el-menu--horizontal {
      border-bottom: 0;
    }

    .el-menu--horizontal>.el-menu-item,
    .el-menu--horizontal>.el-submenu {
      margin: 0 48px;
      padding: 0;
    }
  }

  .el-header.header-main.white {
    position: fixed;
    z-index: 1999;
    width: 100%;
    color: #343434;
    text-align: center;
    line-height: 60px;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0 100px;
    a{
      color: #343434;
    }
    &.deep-bg{
      background: #39A54B;
    }
    .el-menu {
      padding-left: 50px;
      /*background: transparent;*/
    }
    .el-menu-item{
      font-size: 14px;
      transition: none;
      padding: 0 30px;
    }
    .el-menu--horizontal{
      .el-menu-item{
        border-top: 3px solid transparent;
        &>a{
          color: #343434;
          transition: transform .5s;
        }
        &.is-active{
          font-size: 16px;
          border-bottom: none;
          border-top: 3px solid #5AA572!important;
          &>a{
            color: #5AA572;
          }
        }
        &:hover{
          /*background: transparent!important;*/
          color: #5AA572!important;
          &>a{
            color: #5AA572!important;
            /*transform: translate3d(0,-100%,0);*/
          }
        }
      }
      .el-submenu{
        .el-submenu__title{
          color: #343434;
          margin-top: 2px;
          i,a{
            color: #343434!important;
          }
          &:hover{
            color: #5AA572!important;
            i,a{
              color: #5AA572!important;
            }
          }
        }
      }

    }

    .el-menu--horizontal>.el-menu-item,
    .el-menu--horizontal>.el-submenu .el-submenu__title {
      /*background: transparent!important;*/
    }

    .el-menu.el-menu--horizontal {
      border-bottom: 0;
    }

    .el-menu--horizontal>.el-menu-item,
    .el-menu--horizontal>.el-submenu {
      margin: 0 48px;
      padding: 0;
    }
  }

  .logo{
    img{
      vertical-align: middle;
    }
  }

  .header_nav {
    .phone-number{
      margin-top: 3px;
      margin-left: 20px;
    }
    ul{
      height: 100%;
      float: right;
      li{
        height: 100%;

      }
    }
  }

  .mobile .el-menu {
    border-right: 0;
  }

  .mobile .el-menu>li {
    border-bottom: 1px solid #8CC5FF;
  }
  .back-top {
    position: fixed;
    right: 50px;
    bottom: 50px;
  }
</style>
