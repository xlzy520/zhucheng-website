<template>
  <div class="link-card">
    <div class="card-left">
      <div class="title">{{item.title}}</div>
      <div class="address">
        <img class="icon" src="assets/icons/about/address.png" />
        <span>{{item.address}}</span>
      </div>
      <div class="phone">
        <img class="icon" src="assets/icons/about/phone.png" />
        <span>{{item.phone}}</span>
      </div>
      <div class="email">
        <img class="icon" src="assets/icons/about/email.png" />
        <span>{{item.email}}</span>
      </div>
    </div>
    <div class="card-right">
      <img src="assets/image/about-us.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'linkCard',
  props: {
    item: {
      type: Object,
      default: ()=>{}
    },
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .link-card{
    width: 1720px;
    height: 480px;
    background: #FFFFFF;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 200px;
    margin-top: -122px;
    display: flex;
    justify-content: space-between;
    .card-left{
      padding: 118px 0 0 74px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #343434;
      font-size: 20px;

    }
    .card-right{
      padding: 69px 75px 75px 0;
      img{
        width: 783px;
        height: 340px;
      }
    }
    &-item{
      margin-bottom: 36px;
    }
    .icon{
      margin-right: 24px;
    }
    .title{
      font-size: 22px;
      color: #343434;
      margin-bottom: 65px;
    }
    .address, .phone, .email{
      display: flex;
      align-items: center;
    }
    .address{
      margin-bottom: 42px;
      align-items: flex-start;
      span{
        max-width: 500px;
        line-height: 30px;
        display: block;
      }
    }
    .phone{
      margin-bottom: 42px;
    }


  }
</style>
