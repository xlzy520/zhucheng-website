<template>
  <div class="news-card">
    <div class="news-tabs">
      <div class="header">
        <div :class="['news-tab', isActive(1)]" @click="handleTab(1)">
          <span>行业新闻</span>
          <span class="border-bottom"></span>
        </div>
        <div :class="['news-tab', isActive(2)]" @click="handleTab(2)">
          <span>竹成动态</span>
          <span class="border-bottom"></span>
        </div>
      </div>
      <div class="news-content">
        <div class="news-item" v-for="news in newsList" :key="news.title">
          <div class="left">
            <img :src="news.imgurl" alt="">
          </div>
          <div class="right flex-column">
            <div class="right-header">
              <div class="title ellipsis" :title="news.title">{{news.title}}</div>
              <div class="date">{{parseTimeFilter(news.addTime)}}</div>
            </div>
            <div class="content">{{news.subtitle}}</div>
            <div class="btn">
              <a :href="'/#/news/'+news.id" class="more">了解更多>></a>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        <el-pagination @current-change="changeCurrent" background layout="prev, pager, next" :total="total"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import service from "@/api/service";
import dayjs from "dayjs";

export default {
  name: 'ContactUsCard',
  components: {
  },
  data() {
    return {
      pageNo: 1,
      activeTab: 1,
      total: 0,
      newsList: []
    }
  },
  methods: {
    handleTab(tab) {
      this.activeTab = tab
      this.pageNo = 1
      this.getNewsList()
    },
    isActive(tab){
      return tab === this.activeTab ? 'active': ''
    },
    getNewsList() {
      service.getNewsList({
        pageNo: this.pageNo,
        pageSize: 4,
        orderByClause: 'id desc',
        type: this.activeTab
      }).then(res => {
        this.newsList = res.list || []
        this.total = res.total
      })
    },
    changeCurrent(num){
      this.pageNo = num
      this.getNewsList()
      console.log(num);
    },
    parseTimeFilter(val){
      return dayjs(val * 1000).format('YYYY-MM-DD')
    }
  },
  mounted() {
    this.getNewsList()
  },
}
</script>

<style lang="less" scoped>
  @import "@/styles/var.less";
  .news-card{

    .news-tabs{
      position: relative;
      z-index: 100;
      padding: 42px 75px 57px 75px;
      box-sizing: border-box;
      background: #FFFFFF;
      border-radius: 10px;
      margin: auto;
      margin-top: -152px;
      margin-bottom: 134px;
      .header{
        display: flex;
        justify-content: space-between;
        width: 355px;
        margin: auto;
        .news-tab{
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 24px;
          font-weight: bold;
          color: #333;
          cursor: pointer;
          span{
            margin-bottom: 5px;
          }
          .border-bottom{
            display: none;
          }
          &:hover{
            color: #5AA572;
          }
          &.active{
            color: #5AA572;
            .border-bottom{
              display: block;
              width: 70px;
              height: 6px;
              background: #5AA572;
              border-radius: 3px;
            }
          }
        }
      }
      .news-content{
        margin-top: 95px;
        .news-item{
          display: flex;
          margin-bottom: 65px;
        }
      }
    }
    .left{
      width: 519px;
      height: 260px;
      margin-right: 68px;
    }
    .right{
      width: 743px;
      color: #333333;
      padding: 14px 0;
      .right-header{
        display: flex;
        justify-content: space-between;
      }
      .title{
        max-width: 400px;
        font-weight: bold;
        font-size: 22px;
        margin-bottom: 45px;
      }
      .date{
        font-size: 16px;
        font-weight: 500;
        color: #999999;
      }
      .content{
        font-size: 20px;
        height: 80px;
        line-height: 30px;
        margin-bottom: 43px;
      }
    }

    /deep/ .el-pagination{
      text-align: center;
      &.is-background .el-pager li:not(.disabled){

        &:hover{
          color: #5AA572;
        }
        &.active{
          background-color: #5AA572;
          color: #fff;
        }
      }
      .el-pager li.active{
        color: #5AA572;
      }
      &.is-background .el-pager li{
        border-radius: 8px;
        background-color: #fff;
        border: 1px solid #DDDDDD;
      }
    }


    .more{
      padding: 12px 20px;
      background: @primary-color;
      color: #fff;
      border-radius: 4px;
      font-size: 16px;
      font-weight: 400;
  }
}
</style>
