<template>
  <div class="news-list">
    <PicAndBreadcrumb :data="data" />
    <NewsCard />
  </div>
</template>

<script>
  import NewsCard from './components/NewsCard'
  import PicAndBreadcrumb from "@/components/PicAndBreadcrumb";

  export default {
    name: 'index',
    components: {
      NewsCard,
      PicAndBreadcrumb
    },
    data() {
      return {
        data: {
          title: '联系我们', slogan: ['我们将看得更高更远'],
          img: 'assets/image/contact_us_bg.png', content: '首页>新闻列表'
        },
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
