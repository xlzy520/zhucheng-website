<template>
  <div class="service-card">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="title">{{title}}</div>
    <div class="desc">{{desc}}</div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    title: {
      type: String,
      default: '关于我们'
    },
    desc: {
      type: String,
      default: 'About Us'
    },
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  @import "@/styles/var.less";

  .service-card{
    display: flex;
    flex-direction: column;
    color: #333;
    background: #fff;
    width: 203px;
    height: 263px;
    box-shadow: 0px 0px 19px 1px rgba(54, 78, 93, 0.08);
    border-radius: 8px;
    margin-right: 40px;
    padding: 40px 25px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    &:hover{
      background: @primary-color;
      color: #fff;
    }
    &:last-child{
      margin-right: 0;
    }
    .icon{
    }
    .title{
      font-size: 17px;
    }
    .desc{
      margin-top: 50px;
      width: 155px;
      height: 31px;
      font-size: 11px;
      font-weight: 500;
      line-height: 21px;
    }
  }

</style>
