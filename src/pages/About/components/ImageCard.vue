<template>
  <div class="img-card">
    <img :src="`assets/image/chooseUs/${url}.png`" />
    <div class="img-card-title">{{title}}</div>
    <div class="img-card-desc">{{desc}}</div>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    title: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
.img-card{
  display: flex;
  flex-direction: column;
  color: #333;
  box-sizing: border-box;
  width: 470px;
  margin-right: 81px;
  img{
    width: 100%;
    height: 171px;
    margin-bottom: 22px;
    &:nth-child(3n){
      margin-right: 0;
    }
  }
  &-title{
    font-size: 20px;
    color: #343434;
    margin-bottom: 16px;
  }
  &-desc{
    width: 456px;
    font-size: 11px;
    color: #343434;
    letter-spacing: 1px;
    margin-bottom: 60px;
  }
}
</style>
