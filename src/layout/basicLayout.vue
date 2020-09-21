<template>
  <div class="container">
    <el-container direction="vertical">
      <!-- 顶部 -->
      <GlobalHeader :menu-list="menuList" />
      <!-- 中部 -->
      <el-main>
        <router-view />
      </el-main>
      <!-- 底部 -->
      <GlobalFooter :menu-list="menuList" />
    </el-container>
    <!-- 返回顶部 -->

  </div>
</template>

<script>
  import GlobalHeader from "@/components/GlobalHeader";
  import GlobalFooter from "@/components/GlobalFooter";
  export default {
    name: 'basicLayout',
    components: { GlobalHeader, GlobalFooter },
    data() {
      return {
        menuList: [
          {
          yid: 1,
          yyid: '1',
          yname: '首页',
          ylist: [],
          yrouterul: '/'
        },
          {
            yid: 2,
            yyid: '2',
            yname: '走进竹成',
            ylist: [],
            yrouterul: '/about'
          },
          {
            yid: 3,
            yyid: '3',
            yname: '解决方案',
            ylist: [],
            yrouterul: '/solution',
          },
          {
            yid: 4,
            yyid: '4',
            yname: '产品中心',
            ylist: [
                {eid: 41, eeid: '4-1', ename: '灵活用工2.0', elist: [],},
                {eid: 42, eeid: '4-2', ename: '竹成CRM', elist: [],},
            ],
            yrouterul: '/customercase'
          },
          {
            yid: 5,
            yyid: '5',
            yname: '信息验证',
            ylist: [],
            yrouterul: '/newsandinformation'
          },
          {
            yid: 6,
            yyid: '6',
            yname: '联系我们',
            ylist: [],
            yrouterul: '/contactus'
          },
        ]
      }
    },
    methods: {

    },
  }
</script>

<style lang="less">
  .container{
    .el-main {
      /*text-align: center;*/
      padding: 0;
      background: #F7FAFC;
    }
  }
</style>
