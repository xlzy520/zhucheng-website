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
          img: '', content: '首页>新闻列表>详情'
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
      },
      getBg() {
        service.getImgs({
          pageNo: 1,
          pageSize: 100,
          orderByClause: 'id desc',
          imgType: 5
        }).then(res => {
          if (res.list && res.list.length) {
            this.data.img = res.list[0].imgurl
          }
        })
      }
    },
    created(){
      this.getBg()
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
