<template>
  <div class="article">
    <div class="article-container">
      <div class="title">{{article.title}}</div>
      <div class="time">
        发布时间: {{article.time}}
      </div>
      <div class="content" v-html="article.content"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsContent',
  data() {
    return {
      article: {
        title: '',
        time: '',
        content: ''
      }
    }
  },
  methods: {
    getData() {
      this.article = {
        title: '北京9月回单卡客户打卡卡打卡阿打算阿打算 ',
        time: '2020-09-04',
        content: '<p>\n' +
          '                                      浙江省宁波市江北区前洋E商小镇1号楼512客服经拉风拉设计费拉拉阿萨德阿萨德法定阿四发生发生法定发生发生发生 阿发阿萨德sadad阿斯\n' +
          '蒂芬阿萨德发生大想，核发开户的看法哈客户。</p><img src="https://i0.hdslb.com/bfs/album/cfe1320211a15030b704023c76380d1ca826187b.jpg@1036w_1e_1c.jpg">\n' +
          '\n' +
          '    <p>  浙江省宁波市江北区前洋E商小镇1号楼512客服经拉风拉设计费拉拉阿萨德阿萨德法定阿四发生发生法定发生发生发生 阿发阿萨德sadad阿斯\n' +
          '蒂芬阿萨德发生大想，核发开户的看法哈客户。\n' +
          '                            </p>'
      }
    }
  },
  mounted() {
    this.getData()
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
          display: flex;
          margin: auto;
        }
        p{
          text-indent: 20px;
        }
      }
    }

  }

</style>
