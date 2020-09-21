<template>
  <el-footer class="footer" style="height: auto">
    <el-row>
      <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
        <div class="info">
          <div class="info-main">
            <img src="" alt="" class="logo">
            <div class="name">
              <div class="title">
                <img src="" alt="">
              </div>
              <div class="title-en">
                <img src="" alt="">
              </div>
            </div>
          </div>
          <div class="slogan">服务外包让商业 更简单</div>
          <div class="lz"></div>
        </div>
     </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8" class="contact-us">
       <div class="header">
         <div class="header-title">联系我们</div>
         <div class="header-title-en">CONTACT US</div>
       </div>
        <div class="divider"></div>
       <div class="info-item flex-column">
         <span>浙江省宁波市江北区前洋E商小镇1幢1号楼512</span>
         <span>联系电话：XXXXXXXXXXXXX</span>
         <span>电子邮箱：XXXXXXX@zc-corp.cn</span>
       </div>
     </el-col>
      <el-col :xs="12" :sm="12" :md="8" :lg="8" :xl="8">
       <div class="header">
         <div class="header-title">关注我们</div>
         <div class="header-title-en">FOCUS ON US</div>
       </div>
       <div class="divider w375"></div>
       <div class="qrcodes">
         <div class="qrcodes-item flex-column" v-for="item in qrcodes" :key="item.name">
           <img :src="item.url" alt="">
           <span>{{item.name}}</span>
         </div>
       </div>
     </el-col>
    </el-row>

    <el-row v-if="false">

      <template v-for="(value,key,index) in menuList">
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
    <el-row class="footer-copyright">
      <el-col :xs="24">
        COPYRIGHT © 2013-2020 ZC GROUP浙ICP备:100000000号-1
      </el-col>
    </el-row>
  </el-footer>

</template>

<script>
export default {
  name: 'GlobalFooter',
  props: {
    menuList: {
      type: Array,
      default: ()=> []
    },
  },
  data() {
    return {
      qrcodes: [
        {url: '', name: '竹帮帮小程序'},
        {url: '', name: '竹帮帮公众号'},
        {url: '', name: '竹闲客小程序'},
      ]
    }
  }
}
</script>

<style lang="less" scoped>
  /* footer */
  .footer {
    background-color: #464854;
    color: #fff;
    padding: 120px 130px 23px;
    margin-top: 110px;
    .logo{
      width: 45px;
      height: 45px;
    }
  }
  .info{
    display: flex;
    flex-direction: column;
    &-main{
      display: flex;
    }
    .title img{
      width: 96px;
      height: 18px;
    }
    .title-en img{
      width: 97px;
      height: 7px;

    }
    .slogan{
      width: 109px;
      height: 29px;
      font-size: 14px;
      font-family: SimHei;
      font-weight: 400;
      color: #FFFFFF;
      opacity: 0.56;
      margin-top: 20px;
    }
    .lz{
      width: 17px;
      height: 2px;
      background: #FFFFFF;
      opacity: 0.56;
      margin-top: 33px;
    }
  }
  .contact-us{

  }
  .header{
    display: flex;

    .header-title{
      font-size: 14px;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 18px;
    }
    .header-title-en{
      font-size: 9px;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 18px;
      opacity: 0.32;
      margin-left: 5px;

    }
  }
  .divider{
    width: 285px;
    height: 1px;
    background: #FFFFFF;
    opacity: 0.32;
    margin-top: 11px;
    margin-bottom: 17px;
  }
  .w375{
    width: 375px;
  }
  .info-item{
    font-size: 11px;
    color: #FFFFFF;
    line-height: 18px;
    span{
      margin-bottom: 18px;
    }
  }
  .qrcodes{
    display: flex;
    &-item{
      padding: 2px;
      margin-right: 26px;
      img{
        width: 78px;
        height: 77px;
      }
      span{
        font-size: 12px;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 18px;
        margin-top: 7px;
      }
    }
  }

  .footer-copyright{
    text-align: center;
    height: 9px;
    font-size: 9px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 18px;
    margin-top: 90px;
  }
</style>
