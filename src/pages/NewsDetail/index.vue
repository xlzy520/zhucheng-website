<template>
  <div class="news-list">
    <PicAndBreadcrumb :data="data" />
    <NewsContent />
  </div>
</template>

<script>
  import NewsContent from './components/NewsContent'
  import PicAndBreadcrumb from "@/components/PicAndBreadcrumb";

  export default {
    name: 'index',
    components: {
      NewsContent,
      PicAndBreadcrumb
    },
    data() {
      return {
        data: {
          title: '联系我们', slogan: ['我们将看得更高更远'],
          img: 'assets/image/contact_us_bg.png', content: '首页>新闻列表>详情'
        },
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
