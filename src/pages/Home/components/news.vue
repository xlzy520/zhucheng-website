<template>
  <div class="news lz-row">
    <div class="header">
      <lz-badge title="新闻资讯" title_en="NEWS AND INFORMATION" />
    </div>
    <div class="content flex-column-xs">
      <div class="content-item" v-for="(cardItem, index) in splitNews">
        <div class="content-header">
          <div class="title">{{index?'市场新闻': '市场资讯'}}</div>
          <a class="more" :href="'/#/news?tab='+(index+1)">了解更多>></a>
        </div>
        <div class="news-list">
          <div class="news-list-item" v-for="item in  cardItem" :key="item.url" @click="viewDetail(item)">
            <div class="news-title ellipsis" :title="item.title">{{item.title}}</div>
            <div class="news-date">{{parseTimeFilter(item.addTime)}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dayjs from 'dayjs'
export default {
  name: 'news',
  props: {
    news: {
      type: Array,
      default: ()=>([])
    },
    news1: {
      type: Array,
      default: ()=>([])
    },
  },
  computed: {
    splitNews() {
      return [this.news, this.news1]

    }
  },
  data() {
    return {

    }
  },
  methods: {
    viewDetail(item) {
      this.$router.push('/news/'+ item.id)
    },
    parseTimeFilter(val){
      return dayjs(val * 1000).format('YYYY-MM-DD')
    }
  },
}
</script>

<style lang="less" scoped>
  @import "@/styles/var.less";
  .news{
    margin-top: 150px;
    padding: 0 260px 92px;
  }
  .header{
  }
  .content{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    .content-header{
      display: flex;
      justify-content: space-between;
      margin-bottom: 26px;
      a{
        color: @primary-color;
        width: 88px;
        height: 16px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        line-height: 15px;
        cursor: pointer;
      }
      .title{
        width: 75px;
        height: 18px;
        font-size: 18px;
        font-weight: 500;
        color: #343434;
      }
    }
    .news-list{
      &-item{
        display: flex;
        margin-bottom: 17px;
        font-family: PingFang-SC-Medium;
        cursor: pointer;
        &:hover{
          div{
            color: #5AA672;
            text-decoration: underline;
          }
        }
      }
    }
  }
  .content-item{
    margin-left: 35px;
    margin-top: 20px;
  }
  .news-title{
    margin-right: 31px;
    width: 349px;
    font-size: 16px;
    font-weight: 500;
    color: #343434;
  }
  .news-date{
    width: 110px;
    font-size: 16px;
    font-weight: 500;
    color: #9A9A9A;

  }
</style>
