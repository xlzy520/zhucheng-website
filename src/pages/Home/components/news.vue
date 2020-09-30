<template>
  <div class="news">
    <div class="header">
      <lz-badge title="新闻资讯" title_en="NEWS AND INFORMATION" />
    </div>
    <div class="content">
      <div class="content-item" v-for="cardItem in splitNews">
        <div class="content-header">
          <div class="title">市场新闻</div>
          <a class="more" href="/#/news">了解更多>></a>
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
  },
  computed: {
    splitNews() {
      let news = [[],[]]
      const length = this.news.length
      if (length<=5) {
        return [this.news]
      }
      for (let i = 0; i < length; i++) {
        if (i<=5) {
          news[0].push(this.news[i])
        } else {
          news[1].push(this.news[i])
        }
      }
      return news

    }
  },
  data() {
    return {
      leftNews: [
        {title: '北京9月开通电子社保卡申领 上线下均可使用', url: '2020-312309-04', date: '2020-09-04'},
        {title: '北京9月开通电子社保卡申领 上线下均可使用', url: '2023120-09-04', date: '2020-09-04'},
        {title: '北京9月开通电子社保卡申领 上线下均可使用', url: '2020-3121309-04', date: '2020-09-04'},
        {title: '北京9月开通电子社保卡申领 上线下均可使用', url: '202310-09-04', date: '2020-09-04'},
        {title: '北京9月开通电子社保卡申领 上线下均可使用', url: '2020-312209-04', date: '2020-09-04'},
      ],

      righttNews: [
        {title: '北京9月开通电子社保卡申领 上线下均可使用', url: '2020131-09-04', date: '2020-09-04'},
        {title: '北京9月开通电子社保卡申领 上线下均可使用', url: '2020312-09-04', date: '2020-09-04'},
        {title: '北京9月开通电子社保卡申领 上线下均可使用', url: '20203109-04', date: '2020-09-04'},
        {title: '北京9月开通电子社保卡申领 上线下均可使用', url: '2020-3109-04', date: '2020-09-04'},
        {title: '北京9月开通电子社保卡申领 上线下均可使用', url: '2020-313109-04', date: '2020-09-04'},
      ],
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

    margin-top: 100px;
    width: 100%;
  }
  .header{
    margin-left: 131px;
  }
  .content{
    margin-top: 50px;
    padding: 0 160px;
    display: flex;
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
    margin-right: 285px;
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
