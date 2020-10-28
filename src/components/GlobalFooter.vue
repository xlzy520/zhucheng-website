<template>
  <el-footer class="footer lz-row" style="height: auto">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <div class="info">
          <div class="info-main">
            <img width="201" src="assets/image/footer/logo.png" alt="" class="logo">
            <div class="name" v-if="false">
              <div class="title">
                <img src="" alt="">
              </div>
              <div class="title-en">
                <img src="" alt="">
              </div>
            </div>
            <div class="slogan">让商业更简单</div>
            <div class="slogan">让幸福更简单</div>
            <div class="lz"></div>
          </div>
        </div>
     </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" class="contact-us">
       <div class="header">
         <div class="header-title">联系我们</div>
         <div class="header-title-en">CONTACT US</div>
       </div>
        <div class="divider w380"></div>
       <div class="info-item flex-column">
         <span>浙江省宁波市江北区前洋E商小镇1幢1号楼512</span>
         <span>联系电话：13958319323</span>
         <span>电子邮箱：zcyunying@zc-corp.cn</span>
       </div>
     </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8">
       <div class="header">
         <div class="header-title">关注我们</div>
         <div class="header-title-en">FOCUS ON US</div>
       </div>
       <div class="divider w500"></div>
       <div class="qrcodes">
         <div class="qrcodes-item flex-column" v-for="item in qrcodes" :key="item.name">
           <img :src="'assets/image/qrcode/'+item.url" alt="">
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
        COPYRIGHT © 2013-2020 ZC GROUP浙ICP备2020037031号
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
        {url: 'xcx.png', name: '竹帮帮小程序'},
        {url: 'gzh.png', name: '竹帮帮公众号'},
        {url: 'zxk_xcx.png', name: '竹闲客小程序'},
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
    /*margin-top: 110px;*/
    .logo{
    }
  }
  .info{
    /*display: flex;*/
    /*flex-direction: column;*/
    /*text-align: center;*/
    &-main{
      display: flex;
      margin-bottom: 25px;
      flex-direction: column;
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
      width: 125px;
      margin-left: 70px;
      font-size: 18px;
      font-family: SimHei;
      color: #FFFFFF;
      line-height: 32px;
      opacity: 0.56;
    }
    .lz{
      width: 22px;
      height: 2px;
      background: #FFFFFF;
      opacity: 0.56;
      margin-top: 34px;
      margin-left: 70px;
    }
  }
  .contact-us{

  }
  .header{
    display: flex;

    .header-title{
      font-size: 18px;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 24px;
    }
    .header-title-en{
      font-size: 12px;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 24px;
      opacity: 0.32;
      margin-left: 8px;

    }
  }
  .divider{
    width: 285px;
    height: 1px;
    background: #FFFFFF;
    opacity: 0.32;
    margin-top: 14px;
    margin-bottom: 23px;
  }
  .w380{
    /*width: 380px;*/
  }
  .w500{
    /*width: 500px;*/
  }
  .info-item{
    font-size: 14px;
    color: #FFFFFF;
    line-height: 24px;
    span{
      margin-bottom: 23px;
    }
  }
  .qrcodes{
    display: flex;
    justify-content: space-between;
    &-item{
      padding: 2px;
      img{
      }
      span{
        font-size: 16px;
        font-weight: 500;
        color: #FFFFFF;
        line-height: 24px;
        margin-top: 9px;
        text-align: center;
      }
    }
  }

  .footer-copyright{
    text-align: center;
    height: 12px;
    font-size: 12px;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 24px;
    margin-top: 120px;
  }
  @media (max-width: 1200px) {
    .info{
      text-align: center;
      &-main{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;
        img{
          margin-bottom: 40px;
        }
      }
      .slogan{
        width: auto;
      }
      .lz{
        display: none;
        width: auto;
        margin-bottom: 20px;
      }
    }
  }
  @media (max-width: 685px) {
    .info{
      text-align: left;
      &-main{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 20px;
        img{
          margin-bottom: 40px;
        }
      }
      .slogan{
        width: auto;
      }
      .lz{
        display: none;
        width: auto;
        margin-bottom: 20px;
      }
    }
  }

</style>
