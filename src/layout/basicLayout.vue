<template>
  <div class="container">
    <el-container direction="vertical">
      <!-- 顶部 -->
      <GlobalHeader :menu-list="menuList"/>
      <!-- 中部 -->
      <el-main>
        <router-view/>
      </el-main>
      <!-- 底部 -->
      <GlobalFooter :menu-list="menuList"/>
    </el-container>
    <!-- 返回顶部 -->

  </div>
</template>

<script>
  import GlobalHeader from "@/components/GlobalHeader";
  import GlobalFooter from "@/components/GlobalFooter";
  import service from "@/api/service";

  export default {
    name: 'basicLayout',
    components: {GlobalHeader, GlobalFooter},
    data() {
      return {
        menuList: [
          {
            id: '1',
            name: '首页',
            url: '/'
          },
          {
            id: '2',
            name: '走进竹成',
            url: '/about'
          },
          {
            id: '3',
            name: '解决方案',
            url: '/solution',
          },
          {
            id: '4',
            name: '产品中心',
            children: [
              {id: '4-1', name: '灵活用工2.0', url: 'http://baidu.com'},
              {id: '4-2', name: '竹成CRM', url: 'http://baidu.com'},
            ],
          },
          {
            id: '5',
            name: '信息验证',
            url: '/query'
          },
          {
            id: '6',
            name: '联系我们',
            url: '/contactus'
          },
        ]
      }
    },
    methods: {
      getProducts() {
        service.getProductsList({
          pageNo: 1,
          pageSize: 2,
          orderByClause: 'id desc'
        }).then(res => {
          const index = this.menuList.findIndex(v=> v.id === '4')
          const data = res.list.map((v,index)=> {
            v.id = '4-'+( index + 1)
            v.isExtra = true
            return v
          })
          this.$set(this.menuList, index, {
              id: '4',
              name: '产品中心',
              children: data,
            },)
          console.log(res);
        })
      },
    },
    mounted() {
      this.getProducts()
    },
  }
</script>

<style lang="less">
  .container {
    .el-main {
      /*text-align: center;*/
      padding: 0;
      background: #F7FAFC;
      overflow: hidden;
    }
  }
</style>
