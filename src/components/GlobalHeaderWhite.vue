<template>
  <el-header :class="['header-main white',isScrollToMain ? 'deep-bg': '']" style="height: auto">
    <el-row>
      <el-row>
        <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4">
          <div class="logo">
            <img src="assets/image/header-logo.png" alt="">
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20" :xl="20">
          <div class="header_nav">
<!--            <div class="hidden-sm-and-down fr phone-number">-->
<!--              <i class="el-icon-phone-outline">0574-88888888</i>-->
<!--            </div>-->
<!--            <el-menu class="hidden-sm-and-down" :default-active="activeRoute" mode="horizontal"-->
            <el-menu class="" :default-active="activeRoute" mode="horizontal"
                     background-color="transparent"
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
                  <!--                  <router-link :data-hover="menuItem.name" v-else to="/">{{menuItem.name}}</router-link>-->
                </el-menu-item>
              </template>
            </el-menu>
            <el-menu class="hidden-sm-and-down" :default-active="activeRoute" mode="horizontal"
                     background-color="transparent"
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
                  <!--                  <router-link :data-hover="menuItem.name" v-else to="/">{{menuItem.name}}</router-link>-->
                </el-menu-item>
              </template>
            </el-menu>
<!--            <el-menu class="hidden-md-and-up" mode="horizontal">-->
<!--              <el-menu-item index="1">-->
<!--                <i class="el-icon-menu" @click="navShow = !navShow"></i>-->
<!--              </el-menu-item>-->
<!--            </el-menu>-->
          </div>
        </el-col>
      </el-row>
      <transition name="el-zoom-in-top" v-if="false">
        <!-- 移动端 -->
        <el-row v-show="navShow" class="mobile hidden-md-and-up transition-box">
          <el-col :xs="24" class="transition-box">
            <el-menu default-active="1" router class="el-menu-vertical-demo transition-box">
              <template v-for="yylist in menuList">
                <!-- 一级  有二级 -->
                <el-submenu class="transition-box" v-if="yylist.ylist && yylist.ylist.length > 0" :index="yylist.yyid" :key="yylist.yyid">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <router-link :to="{path:yylist.yrouterul,query: yylist.yid}">{{yylist.yname}}</router-link>
                  </template>
                  <el-menu-item-group>
                    <template v-for="eelist in yylist.ylist">
                      <!-- 二级 有三级 -->
                      <template v-if="eelist.elist.length > 0">
                        <el-submenu :index="eelist.eeid">
                          <template slot="title">{{eelist.ename}}</template>
                          <el-menu-item v-for="sslist in eelist.elist" :index="sslist.ssid" :key="sslist.sid">
                            <router-link :to="{path:'/three',query:{id: eelist.eid}}">{{sslist.sname}}</router-link>
                          </el-menu-item>
                        </el-submenu>
                      </template>
                      <!-- 二级 没有三级 -->
                      <template v-if="eelist.elist.length == 0">
                        <el-menu-item v-if="yylist.ylist && yylist.ylist.length > 0" :key="eelist.eid" :index="eelist.eeid">
                          <router-link :to="{path:'/three',query:{id: eelist.eid}}">{{eelist.ename}}</router-link>
                        </el-menu-item>
                      </template>
                    </template>
                  </el-menu-item-group>
                </el-submenu>
                <!-- 一级 没有二级 -->
                <el-menu-item class="transition-box" v-else="yylist.ylist && yylist.ylist.length ==  0" :key="yylist.yid"
                              :index="yylist.yyid">
                  <i class="el-icon-document"></i>
                  <span slot="title">
													<router-link v-if="yylist.yid != 1" :to="{path:yylist.yrouterul,query: yylist.yid}">{{yylist.yname}}</router-link>
													<router-link v-if="yylist.yid == 1" to="/">{{yylist.yname}}</router-link>
												</span>
                </el-menu-item>
              </template>
            </el-menu>
          </el-col>
        </el-row>
      </transition>
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
  },
  computed: {

  },
  data() {
    return {
      navShow: false,
      logo: '/static/img/3917_jdbaq5ph(2).png',
      isScrollToMain: false,
      backTopShow: false,
      activeRoute: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // this.activeRoute = key
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
    console.log(item);
    if (item) {
      this.activeRoute = item.id
    }
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy(){
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="less">
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

    &.deep-bg{
      .el-menu--horizontal{
        .el-menu-item{
          &.is-active{
            font-size: 16px;
            border-bottom: none;
            border-top: 3px solid #fff!important;
            &>a{
              color: #fff;
            }
          }
          &:hover{
            /*background: transparent!important;*/
            color: #39A54B!important;
            &>a{
              color: #39A54B!important;
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
              color: #39A54B!important;
              i,a{
                color: #39A54B!important;
              }
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
