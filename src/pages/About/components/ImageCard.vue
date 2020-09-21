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
    margin-bottom: 10px;
    &:nth-child(3n){
      margin-right: 0;
    }
  }
  &-title{
    font-size: 15px;
    font-weight: 500;
    color: #343434;
    line-height: 30px;
    margin-bottom: 10px;
  }
  &-desc{
    width: 456px;
    font-size: 11px;
    font-weight: 500;
    color: #343434;
    line-height: 30px;
    letter-spacing: 0;
  }
}
</style>
