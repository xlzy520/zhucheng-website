<template>
  <div class="news-list">
    <PicAndBreadcrumb :data="data" />
    <NewsCard class="lz-row" />
  </div>
</template>

<script>
  import NewsCard from './components/NewsCard'
  import PicAndBreadcrumb from "@/components/PicAndBreadcrumb";
  import service from "@/api/service";
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
          img: '', content: '首页>新闻列表'
        },
        newsList: []
      }
    },
    methods: {
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
    }
  }
</script>

<style lang="less" scoped>

</style>
