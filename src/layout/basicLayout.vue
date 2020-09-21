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
            yrouterul: '/solution',
            // ylist: [
            //   {
            //   eid: 31,
            //   eeid: '3-1',
            //   ename: '数据中心迁移解决方案',
            //   elist: [{
            //     sid: 311,
            //     ssid: '3-1-1',
            //     sname: '数据中心迁移解决方案一',
            //     slist: []
            //   }, {
            //     sid: 312,
            //     ssid: '3-1-2',
            //     sname: '数据中心迁移解决方案二',
            //     slist: []
            //   }]
            // }, {
            //   eid: 32,
            //   eeid: '3-2',
            //   ename: 'Microsoft企业应用',
            //   elist: []
            // },
            //   {
            //     eid: 33,
            //     eeid: '3-3',
            //     ename: '储存备份',
            //     elist: []
            //   },
            //   {
            //     eid: 34,
            //     eeid: '3-4',
            //     ename: '区块链部署',
            //     elist: []
            //   },
            //   {
            //     eid: 35,
            //     eeid: '3-5',
            //     ename: '游戏解决方案',
            //     elist: []
            //   },
            //   {
            //     eid: 36,
            //     eeid: '3-6',
            //     ename: '医疗解决方案',
            //     elist: []
            //   },
            //   {
            //     eid: 37,
            //     eeid: '3-7',
            //     ename: '音视频解决方案',
            //     elist: []
            //   },
            //   {
            //     eid: 38,
            //     eeid: '3-8',
            //     ename: '网站建设解决方案',
            //     elist: []
            //   }
            // ],
            ylist: []
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
          // {
          //   yid: 5,
          //   yyid: '5',
          //   yname: '新闻资讯',
          //   ylist: [{
          //     eid: 51,
          //     eeid: '5-1',
          //     ename: '新闻资讯1',
          //     elist: [{
          //       sid: 511,
          //       ssid: '5-1-1',
          //       sname: '新闻资讯11',
          //       slist: []
          //     }]
          //   },
          //     {
          //       eid: 52,
          //       eeid: '5-2',
          //       ename: '新闻资讯2',
          //       elist: [{
          //         sid: 511,
          //         ssid: '5-2-1',
          //         sname: '新闻资讯21',
          //         slist: []
          //       }]
          //     },
          //     {
          //       eid: 53,
          //       eeid: '5-3',
          //       ename: '新闻资讯3',
          //       elist: [{
          //         sid: 533,
          //         ssid: '5-3-1',
          //         sname: '新闻资讯31',
          //         slist: []
          //       }]
          //     }
          //   ],
          //   yrouterul: '/newsandinformation'
          // },
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
