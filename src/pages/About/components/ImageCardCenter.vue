<template>
  <div class="img-card" :style="{background: `assets/image/culture/${url}.png`}">
    <img :src="`assets/image/culture/${url}.png`" />
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
  width: 418px;
  margin-right: 73px;
  &:nth-child(3n){
    margin-right: 0;
  }
  img{
    width: 100%;
    height: 174px;
    margin-bottom: 22px;
  }
  &-title{
    font-size: 20px;
    color: #fff;
    bottom: 45%;
    width: 100%;
    text-align: center;
    position: relative;
  }
  &-desc{
    width: 100%;
    text-align: center;
    color: #fff;
    bottom: 45%;
    margin-bottom: 60px;
    position: relative;
    height: 16px;
    font-size: 16px;
    font-weight: bold;
    line-height: 40px;

  }
}
@media (max-width: 1919px) {
  .img-card{
    margin-right: 235px;
    &:nth-child(2n){
      margin-right: 0;
    }
  }
}
</style>
