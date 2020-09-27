<template>
  <div class="article">
    <div class="article-container">
      <div class="title">{{article.title}}</div>
      <div class="time">
        发布时间: {{formatTime(article.addTime)}}
      </div>
      <div class="content" v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
  import dayjs from 'dayjs';
export default {
  name: 'NewsContent',
  props: {
    article: {
      type: Object,
      default: ()=>({
        title: '',
        time: '',
        content: ''
      })
    },
  },
  data() {
    return {

    }
  },
  methods: {
    formatTime(val){
      if (!val) {
        return '';
      }
      return dayjs(val * 1000).format('YYYY-MM-DD')
    },
  },
  mounted() {
  },
}
</script>

<style lang="less" scoped>
  .article{
    padding: 0 75px;
    .article-container{
      position: relative;
      z-index: 99999;
      padding: 42px 75px 57px 75px;
      box-sizing: border-box;
      width: 1720px;
      background: #FFFFFF;
      border-radius: 10px;
      margin: auto;
      margin-top: -152px;
      margin-bottom: 134px;
      .title{
        font-size: 24px;
        font-weight: bold;
        color: #333333;
        text-align: center;
        padding-top: 49px;
        padding-bottom: 20px;
      }
      .time{
        font-size: 16px;
        font-weight: 500;
        color: #999999;
        text-align: center;
        margin-bottom: 60px;
      }
      /deep/.content{
        width: 1338px;
        font-size: 20px;
        font-weight: bold;
        color: #333333;
        line-height: 30px;
        img{
          /*display: flex;*/
          /*margin: auto;*/
        }
        p{
          text-indent: 20px;
        }
      }
    }

  }

</style>
