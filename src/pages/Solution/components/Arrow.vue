<template>
  <div :class="'arrow-'+type">
    <div class="direction" v-if="type === 'wai'"></div>
    <div class="rect"></div>
    <div class="arrow-main"></div>
  </div>
</template>

<script>
export default {
  name: 'Arrow',
  props: {
    type: {
      type: String,
      default: 'right' // 'right', 'left', 'wai'
    },
  },
  computed: {
    className() {
      return this.data

    }
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="less" scoped>
  .arrow-main{
    display:inline-block;
    width:0;
    height:0;
    border-top: 12px solid transparent;
    border-left: 20px solid #5aa672;
    border-bottom: 12px solid transparent;
  }
  .arrow-right, .arrow-left{
    display: flex;
    align-items: center;
  }
  .arrow-right{

  }
  .arrow-wai{
    .arrow-main{
      border-top: 12px solid transparent;
      border-right: 20px solid #5aa672;
      border-left: 20px solid transparent;
      border-bottom: 12px solid transparent;
      position: relative;
      left: -40px;
      bottom: 15px;
    }
    .rect{
      width: 200px;
      height: 4px;
      background: #5aa672;
    }
  }
  .direction{
    width: 4px;
    height: 160px;
    background: #5aa672;
    margin-left: 196px;
  }
  .rect{
    width: 200px;
    height: 4px;
    background: #5aa672;
  }
  @media (max-width: 1600px) {
    .rect{
      width: 160px;
    }
  }

  .arrow-left{
    flex-direction: row-reverse;
    margin-left: -20px;
    .arrow-main{
      border-top: 12px solid transparent;
      border-right: 20px solid #5aa672;
      border-left: 20px solid transparent;
      border-bottom: 12px solid transparent;
    }
  }

</style>
