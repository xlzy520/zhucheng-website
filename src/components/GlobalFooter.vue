<template>
  <el-footer style="height: auto;" class="footer">
    <el-row>

      <template v-for="(value,key,index) in menulist">
        <el-col v-if="value.ylist.length != 0" :key="value.yyid" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
          <ul>
            <h3>
              <router-link :to="{path: value.yrouterul,query: value.yid}">{{value.yname}}</router-link>
            </h3>
            <li v-for="navylistlist in value.ylist" :key="navylistlist.eeid">
              <router-link :to="{path:'/three',query:{id: navylistlist.eid}}">{{navylistlist.ename}}</router-link>
            </li>
          </ul>
        </el-col>
      </template>

      <!-- <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
        <ul>
          <h3>快捷导航</h3>
          <li>公司简介</li>
          <li>客户案例</li>
          <li>新闻资讯</li>
        </ul>
      </el-col>
      <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
        <ul>
          <h3>快捷导航</h3>
          <li>公司简介</li>
          <li>客户案例</li>
          <li>新闻资讯</li>
        </ul>
      </el-col>
      <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
        <ul>
          <h3>快捷导航</h3>
          <li>公司简介</li>
          <li>客户案例</li>
          <li>新闻资讯</li>
        </ul>
      </el-col> -->

      <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
        <ul>
          <li><i class="el-icon-phone-outline"></i>电话：100-000-0000</li>
          <li><i class="el-icon-message"></i>邮箱：10000000@qq.com</li>
          <li><i class="el-icon-location-outline"></i>地址：中国互联网省域名市网站区666号</li>
        </ul>
      </el-col>
      <el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
        <li><img width="50%" src="../assets/1765_iz4wlezw.png" alt=""></li>
        <li>关注微信公众号</li>
      </el-col>
    </el-row>
    <el-row class="footer_row2">
      <el-col :xs="24">
        COPYRIGHT (©) 2020 执笔.
      </el-col>
    </el-row>
  </el-footer>

</template>

<script>
export default {
  name: 'GlobalFooter',
  props: {
    menulist: {
      type: Array,
      default: ()=> []
    },
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  /* footer */
  .footer {
    background-color: rgb(31, 37, 38);
    color: #F0F2F5;
    padding: 30px 30px;
  }

  .footer_row2 {
    margin: 20px;
    padding: 20px 20px;
    border-top: 1px solid #EBEEF5;
  }
  .footer h3,
  .footer a {
    color: #FFFFFF;
  }
</style>
