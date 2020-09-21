<template>
  <div class="lz-badge">
    <div class="lz-badge-header">
      <div class="lz-badge-icon"></div>
      <div>{{title}}</div>
    </div>
    <div class="lz-badge-footer">{{title_en}}</div>
  </div>
</template>

<script>
  export default {
    name: 'LZ-Badge',
    props: {
      title: {
        type: String,
        default: '关于我们'
      },
      title_en: {
        type: String,
        default: 'About Us'
      },
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  @import "@/styles/var.less";

  .lz-badge {
    &-icon {
      width: 15px;
      height: 3px;
      background: @primary-color;
      margin-right: 15px;
    }

    &-header {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #333333;
      margin-bottom: 8px;
    }

    &-footer {
      height: 10px;
      font-size: 12px;
      font-family: Arial;
      font-weight: 400;
      color: #999999;
      padding-left: 30px;
    }
  }
</style>
