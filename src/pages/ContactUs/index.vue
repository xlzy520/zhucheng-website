<template>
  <div class="about">
    <div class="about-bg">
      <div class="bg-desc">
        <div class="title">联系我们</div>
        <div class="slogan">竹成集团    想你所想</div>
        <div class="lz"></div>
      </div>
      <div class="about-breadcrumb">
        <img src="assets/icons/address.png" class="icon" />
        <span class="content">首页>联系我们</span>
      </div>
      <img src="assets/image/contact_us_bg.png" alt="">
    </div>
    <el-row>
      <el-col :xs="24">
        <ContactUsCard />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ContactUsCard from "./components/ContactUsCard";
  export default {
    components: {
      ContactUsCard,
    },
    data() {
      return {

      };
    },

  }

</script>

<style lang="less" scoped>
  .about{
    .about-bg{
      font-family: Microsoft YaHei;
      color: #fff;
      img{
        width: 100%;
      }
    }
    .bg-desc{
      position: absolute;
      display: flex;
      flex-direction: column;
      left: 175px;
      bottom: 218px;
      .title{
        font-size: 24px;
        margin-bottom: 38px;
      }
      .slogan{
        font-size: 36px;
        margin-bottom: 25px;
      }
      .lz{
        margin-top: 25px;
        width: 44px;
        height: 1px;
        background: #fff;
      }
    }
    .about-breadcrumb{
      position: absolute;
      right: 176px;
      bottom: 219px;
      display: flex;
      font-size: 16px;
      .icon{
        width: 14px;
        height: 18px;
        margin-right: 10px;
      }
    }
  }
</style>
