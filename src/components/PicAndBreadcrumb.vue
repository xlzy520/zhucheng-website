<template>
  <div class="main-bg">
    <div class="bg-desc">
      <div class="title">{{data.title}}</div>
      <div class="slogan" v-for="item in data.slogan" :key="item">{{item}}</div>
      <div class="lz"></div>
    </div>
    <div class="main-breadcrumb">
      <img src="assets/icons/address.png" class="icon" />
      <span class="content">{{data.content}}</span>
    </div>
    <img :src="data.img" alt="">
  </div>
</template>

<script>
export default {
  name: 'PicAndBreadcrumb',
  props: {
    data: {
      type: Object,
      default: ()=>({
        slogan: [],
        title: '',
        content: '',
        img: ''
      })
    },
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .main-bg{
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
  .main-breadcrumb{
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
</style>
