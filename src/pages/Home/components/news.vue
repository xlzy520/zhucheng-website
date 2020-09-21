<template>
  <div class="news">
    <div class="header">
      <lz-badge title="新闻资讯" title_en="NEWS AND INFORMATION" />
    </div>
    <div class="content">
      <div class="left">
        <div class="content-header">
          <div class="title">市场新闻</div>
          <a class="more">了解更多>></a>
        </div>
        <div class="news-list">
          <div class="news-list-item" v-for="item in leftNews" :key="item.url">
            <div class="news-title">{{item.title}}</div>
            <div class="news-date">{{item.date}}</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="content-header">
          <div class="title">市场新闻</div>
          <a class="more">了解更多>></a>
        </div>
        <div class="news-list">
          <div class="news-list-item" v-for="item in righttNews" :key="item.url">
            <div class="news-title">{{item.title}}</div>
            <div class="news-date">{{item.date}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'news',
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
  }
}
</script>

<style lang="less" scoped>
  @import "@/styles/var.less";
  .news{
    font-family: PingFang SC;
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
    justify-content: space-between;
    .content-header{
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      a{
        color: @primary-color;
        width: 66px;
        height: 12px;
        font-size: 12px;
        font-family: Microsoft YaHei;
        line-height: 11px;
      }
      .title{
        width: 56px;
        height: 14px;
        font-size: 14px;
        font-weight: 500;
        color: #333;
        line-height: 1px;
      }
    }
    .news-list{
      &-item{
        display: flex;
        margin-bottom: 17px;
        font-family: PingFang-SC-Medium;
      }
    }
  }
  .news-title{
    width: 262px;
    height: 12px;
    font-size: 12px;
    font-weight: 500;
    color: #333;
    line-height: 1px;
    margin-right: 31px;

  }
  .news-date{
    width: 83px;
    height: 10px;
    font-size: 12px;
    font-weight: 500;
    color: #999;
    line-height: 1px;
  }
</style>
