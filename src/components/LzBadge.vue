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
      font-size: 24px;
      font-family: PingFang SC;
      font-weight: bold;
      color: #343434;
      margin-bottom: 11px;
    }

    &-footer {
      height: 13px;
      font-size: 16px;
      font-family: Arial;
      font-weight: 400;
      color: #9A9A9A;
      padding-left: 30px;
    }
  }
</style>
