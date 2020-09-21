<template>
  <div class="df flex-column-xs our-strength">
    <div class="left">
      <lz-badge title="我们的实力" title_en="OUR STRENGTH"/>
      <div class="content">
        <div class="item" v-for="item in list" :key="item.text">
          <img src="../../../assets/icons/strength/1.png"/>
          <span class="desc">{{item.text}}</span>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../../../assets/icons/strength/map.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ourStrength',
  data() {
    return {
      list: [
        {text: '全国200+直营服务网点', img: '1'},
        {text: '全国14家省级分公司', img: '2'},
        {text: '70000+全职城市服务力', img: '3'},
        {text: '400+TOP客户信赖', img: '4'},
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.our-strength{
  width: 100%;
  background: #fff;
  height: 376px;
  justify-content: space-between;
  .left{
    padding: 48px 0 0 130px;
    .content{
      margin-top: 56px;
      margin-left: 25px;
    }
    .item{
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      img{
        width: 20px;
        height: 20px;
      }
      .desc{
        font-size: 12px;
        font-weight: 500;
        color: #333;
        margin-left: 20px;
      }
    }
  }
  .right, .right img{
    width: 791px;
    height: 376px;
  }
}
</style>
