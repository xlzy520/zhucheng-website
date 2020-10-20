<template>
  <div class="news-list">
    <PicAndBreadcrumb :data="data" />
    <NewsContent :article="article" class="lz-row" />
  </div>
</template>

<script>
  import NewsContent from './components/NewsContent'
  import PicAndBreadcrumb from "@/components/PicAndBreadcrumb";
  import service from "@/api/service";

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
        id: '',
        article: {}
      }
    },
    methods: {
      getNewsDetail() {
        service.getNewsDetail({id: this.id}).then(res => {
          this.article = res
          console.log(res);
        })
      }
    },
    mounted() {
      const id = this.$route.params.id;
      this.id = id;
      this.getNewsDetail();
      console.log(this.$route);
    },
  }
</script>

<style lang="less" scoped>

</style>
