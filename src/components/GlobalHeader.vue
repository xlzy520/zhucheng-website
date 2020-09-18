<template>
  <el-header class="header-main">
    <el-row>
      <el-col :span="24">
        <el-row>
          <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="4">
            <div class="logo">
              <img src="../assets/3917_jdbaq5ph(2).png" alt="">
            </div>
          </el-col>
          <el-col :xs="16" :sm="18" :md="20" :lg="20" :xl="20">
            <div class="header_nav">
              <div class="hidden-sm-and-down fl-r phone-number">
                <i class="el-icon-phone-outline">0574-88888888</i>
              </div>
              <el-menu class="hidden-sm-and-down" mode="horizontal" background-color="transparent"
                       text-color="#fff">
                <template v-for="yylist in menulist">
                  <el-submenu v-if="yylist.ylist && yylist.ylist.length > 0"
                              :index="yylist.yyid"
                              background-color="#545c64"
                              :key="yylist.yyid">
                    <template slot="title">
                      <router-link :data-hover="yylist.name" :to="{path:yylist.yrouterul,query: yylist.yid}">{{yylist.yname}}</router-link>
                    </template>
                    <template v-for="eelist in yylist.ylist">
                      <!-- <el-menu-item  v-if="yylist.ylist && yylist.ylist.length > 0" :key="eelist.eid" :index="eelist.eeid">
                        <router-link :to="{path:'/three',query:{id: eelist.eid}}">{{eelist.ename}}</router-link>
													</el-menu-item> -->

                      <!--  -->
                      <template v-if="eelist.elist.length > 0">
                        <el-submenu :index="eelist.eeid" background-color="#545c64">
                          <template slot="title">{{eelist.ename}}</template>
                          <el-menu-item v-for="sslist in eelist.elist" :index="sslist.ssid" :key="sslist.sid">
                            <router-link :to="{path:'/three',query:{id: eelist.eid}}">{{sslist.sname}}</router-link>
                          </el-menu-item>
                        </el-submenu>
                      </template>
                      <template v-else>
                        <el-menu-item v-if="yylist.ylist && yylist.ylist.length > 0" :key="eelist.eid" :index="eelist.eeid">
                          <router-link :to="{path:'/three',query:{id: eelist.eid}}">{{eelist.ename}}</router-link>
                        </el-menu-item>
                      </template>
                      <!--  -->

                    </template>
                  </el-submenu>

                  <el-menu-item v-else="yylist.ylist && yylist.ylist.length ==  0" :key="yylist.yid" :index="yylist.yyid">
                    <router-link :data-hover="yylist.yname" v-if="yylist.yid != 1" :to="{path:yylist.yrouterul,query: yylist.yid}">{{yylist.yname}}</router-link>
                    <router-link :data-hover="yylist.yname" v-if="yylist.yid == 1" to="/">{{yylist.yname}}</router-link>
                  </el-menu-item>
                </template>

                <!-- <el-menu-item index="6">
                  <router-link :to="{path:'/contactus',query: {id: 5}}">联系我们</router-link>
                </el-menu-item>
                <el-menu-item index="5">
                  <router-link :to="{path:'/newsandinformation',query: {id: 4}}">新闻资讯</router-link>
                </el-menu-item>
                <el-menu-item index="4">
                  <router-link :to="{path:'/customercase',query: {id: 3}}">客户案例</router-link>
                </el-menu-item>
                <el-submenu index="3">
                  <template slot="title">
                    <router-link :to="{path:'/solution',query: {id: 2}}">解决方案</router-link>
                  </template>

                  <el-submenu index="3-1">
                    <template slot="title">数据中心迁移解决方案</template>
                    <el-menu-item index="3-1-1">数据中心迁移解决方案一</el-menu-item>
                    <el-menu-item index="3-1-2">数据中心迁移解决方案二</el-menu-item>
                  </el-submenu>

                  <el-menu-item index="3-2">
                    <router-link :to="{path:'/three',query: {id: 32}}">Microsoft企业应用</router-link>
                  </el-menu-item>
                  <el-menu-item index="3-3">
                    <router-link :to="{path:'/three',query: {id: 33}}">储存备份</router-link>
                  </el-menu-item>
                  <el-menu-item index="3-4">
                    <router-link :to="{path:'/three',query: {id: 34}}">区块链部署</router-link>
                  </el-menu-item>
                  <el-menu-item index="3-5">
                    <router-link :to="{path:'/three',query: {id: 35}}">游戏解决方案</router-link>
                  </el-menu-item>
                  <el-menu-item index="3-6">
                    <router-link :to="{path:'/three',query: {id: 36}}">医疗解决方案</router-link>
                  </el-menu-item>
                  <el-menu-item index="3-7">
                    <router-link :to="{path:'/three',query: {id: 37}}">音视频解决方案</router-link>
                  </el-menu-item>
                  <el-menu-item index="3-8">
                    <router-link :to="{path:'/three',query: {id: 38}}">网站建设解决方案</router-link>
                  </el-menu-item>
                </el-submenu>
                <el-menu-item index="2">
                  <router-link :to="{path:'/about',query: {id: 1}}">关于我们</router-link>
                </el-menu-item>
                <el-menu-item index="1">
                  <router-link to="/">首页</router-link>
                </el-menu-item> -->
              </el-menu>
              <el-menu class="hidden-md-and-up" mode="horizontal">
                <el-menu-item index="1">
                  <i class="el-icon-menu" @click="navshow = !navshow"></i>
                </el-menu-item>
              </el-menu>
            </div>
          </el-col>
        </el-row>
        <transition name="el-zoom-in-top">
          <!-- 移动端 -->
          <el-row v-show="navshow" class="mobile hidden-md-and-up transition-box">
            <el-col :xs="24" class="transition-box">
              <el-menu default-active="2" class="el-menu-vertical-demo transition-box">


                <template v-for="yylist in menulist">
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




                <!-- <el-menu-item class="transition-box" index="1">
                  <i class="el-icon-menu"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item class="transition-box" index="2">
                  <i class="el-icon-document"></i>
                  <span slot="title">关于我们</span>
                </el-menu-item>

                <el-submenu class="transition-box" index="3">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>解决方案</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="1-1">数据中心迁移解决方案</el-menu-item>
                    <el-menu-item index="1-2">Microsoft企业应用</el-menu-item>
                    <el-menu-item index="1-3">储存备份</el-menu-item>
                    <el-menu-item index="1-4">区块链部署</el-menu-item>
                    <el-menu-item index="1-5">游戏解决方案</el-menu-item>
                    <el-menu-item index="1-6">医疗解决方案</el-menu-item>
                    <el-menu-item index="1-7">音视频解决方案</el-menu-item>
                    <el-submenu index="1-8">
                      <template slot="title">网站建设解决方案</template>
                      <el-menu-item index="1-8-1">选项1</el-menu-item>
                    </el-submenu>
                  </el-menu-item-group>
                </el-submenu>

                <el-menu-item class="transition-box" index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">客户案例</span>
                </el-menu-item>
                <el-menu-item class="transition-box" index="5">
                  <i class="el-icon-document"></i>
                  <span slot="title">新闻资讯</span>
                </el-menu-item>
                <el-menu-item class="transition-box" index="6">
                  <i class="el-icon-document"></i>
                  <span slot="title">联系我们</span>
                </el-menu-item> -->
              </el-menu>
            </el-col>
          </el-row>
        </transition>
      </el-col>
    </el-row>

  </el-header>
</template>

<script>
export default {
  name: 'GlobalHeader',
  props: {
    menulist: {
      type: Array,
      default: ()=> []
    },
  },
  data() {
    return {
      navshow: false,
      logo: '/static/img/3917_jdbaq5ph(2).png',
    }
  }
}
</script>

<style lang="less">
  .el-header.header-main {
    position: fixed;
    z-index: 9999;
    width: 100%;
    color: #fff;
    text-align: center;
    line-height: 60px;
    box-sizing: border-box;
    overflow: hidden;
    padding: 0 100px;
    .el-menu {
      padding-left: 50px;
      background: transparent;
    }
    .el-menu-item{
      font-size: 14px;
      transition: none;
      padding: 0 30px;
      a:after {
        content: attr(data-hover);
        color: #b22f6f;
        opacity: 1;
        display: block;
        font-weight: 700;
        text-transform: uppercase;
        -webkit-transition: opacity .3s;
        transition: opacity .3s;
      }
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
            transform: translate3d(0,-100%,0);
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
      margin: 0 30px;
      padding: 0;
    }
  }

  .logo,
  .logo img {
    width: 100%;
    height: 100%;
  }

  .logo img {
    vertical-align: middle;
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
</style>
