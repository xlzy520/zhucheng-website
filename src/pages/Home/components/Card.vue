<template>
  <div class="service-card" @mouseenter.self="enter" @mouseleave.self="leave">
    <div class="icon">
      <img class="card-icon"
           :src="`assets/icons/services/${img}${isHover? '': '-green'}.png`" />
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
    img: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isHover: false
    }
  },
  methods: {
    enter() {
      this.isHover = true
    },
    leave() {
      this.isHover = false
    },

  },
}
</script>

<style lang="less" scoped>
  @import "@/styles/var.less";

  .service-card{
    display: flex;
    flex-direction: column;
    color: #333;
    background: #fff;
    max-width: 240px;
    height: 312px;
    border-radius: 8px;
    padding: 58px 20px;
    box-sizing: border-box;
    text-align: center;
    cursor: pointer;
    opacity: 0.9;
    margin-bottom: 40px;
    &:hover{
      background: @primary-color;
      color: #fff;
      box-shadow: 0px 0px 26px 2px rgba(55, 78, 93, 0.08);
      opacity: 1;
    }
    &:last-child{
      margin-right: 0;
    }
    .card-icon{
      margin-bottom: 35px;
    }
    .title{
      font-size: 22px;
    }
    .desc{
      font-size: 14px;
      font-weight: 500;
      line-height: 28px;
      margin-top: 10%;
      text-align: left;
    }
  }
  @media (max-width: 1919px) {
    .service-card {
      margin-bottom: 40px;
      /*margin-right: 120px;*/
    }
  }

</style>
