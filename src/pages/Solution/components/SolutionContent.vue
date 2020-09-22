<template>
  <div class="news-card">
    <div class="news-tabs">
      <div class="header">
        <div :class="['news-tab', isActive(index)]"
             @click="handleTab(index)"
             v-for="(tab,index) in tabs" :key="tab.title">
          <span>{{tab.name}}</span>
          <span class="border-bottom"></span>
        </div>
      </div>
      <div class="solution-desc">
        <div class="title">{{currentTabInfo.title}}</div>
        <div class="desc">{{currentTabInfo.desc}}</div>
      </div>
      <div class="footer">

      </div>
    </div>
    <div class="news-content">
      <LzBadge title="服务内容" title_en="SERVICE CONTENT"/>
      <div class="service-content">
        <div class="service-item" v-for="card in currentTabInfo.serviceContent" :key="card.name">
          <div class="service-item-img">
            <img src="https://i0.hdslb.com/bfs/album/cfe1320211a15030b704023c76380d1ca826187b.jpg@1036w_1e_1c.jpg" />
<!--            <img :src="card.img" />-->
          </div>
          <div class="service-item-title">{{card.name}}</div>
        </div>
      </div>
      <div class="news-item" v-if="false" v-for="news in newsList" :key="news.title">
        <div class="left">
          <img :src="news.img" alt="">
        </div>
        <div class="right flex-column">
          <div class="right-header">
            <div class="title">{{news.title}}</div>
            <div class="date">{{news.date}}</div>
          </div>
          <div class="content">{{news.content}}</div>
          <div class="btn">
            <a :href="'/#/news/'+'a'" class="more">了解更多>></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactUsCard',
  components: {
  },
  data() {
    return {
      tabs: [
        {
          name: '即时配送', title: '即时物流', desc: '即时物流是完全按照用户突然提出的物流要求进行物流活动的方式，是一种灵活性很高的应急物流方式。相对于传统物流，即时物流核心特点在于即时性，即满足用户提出的极速、准时的配送要求。因此，传统物流可以采取固定时间配送和揽收，即时物流则需要第一时间配送订单，即时物流的平台要保证足够的运力来匹配订单。随着互联网购物的兴起，催生了市场对于更加“快速”、更加“准时”的物流服务，为客户解决最后一公里的物流运输问题。',
          serviceContent: [
            {name: '同城跑腿', img: '1'},
            {name: '平台配送', img: '1'},
            {name: '商超配送', img: '1'},
            {name: '连锁店配送', img: '1'},
            {name: '社交电商配送', img: '1'},
            {name: '跨境电商配送', img: '1'},
            {name: '快递联盟配送', img: '1'},
            {name: '平台电商配送', img: '1'},
          ]
        },
        {
          name: '即时配送', title: '即时物流', desc: '即时物流是完全按照用户突然提出的物流要求进行物流活动的方式，是一种灵活性很高的应急物流方式。相对于传统物流，即时物流核心特点在于即时性，即满足用户提出的极速、准时的配送要求。因此，传统物流可以采取固定时间配送和揽收，即时物流则需要第一时间配送订单，即时物流的平台要保证足够的运力来匹配订单。随着互联网购物的兴起，催生了市场对于更加“快速”、更加“准时”的物流服务，为客户解决最后一公里的物流运输问题。',
          serviceContent: [
            {name: '同城跑腿', img: '1'},
            {name: '平台配送', img: '1'},
            {name: '商超配送', img: '1'},
            {name: '连锁店配送', img: '1'},
            {name: '社交电商配送', img: '1'},
            {name: '跨境电商配送', img: '1'},
            {name: '快递联盟配送', img: '1'},
            {name: '平台电商配送', img: '1'},
          ]
        },
        {
          name: '即时配送', title: '即时物流', desc: '即时物流是完全按照用户突然提出的物流要求进行物流活动的方式，是一种灵活性很高的应急物流方式。相对于传统物流，即时物流核心特点在于即时性，即满足用户提出的极速、准时的配送要求。因此，传统物流可以采取固定时间配送和揽收，即时物流则需要第一时间配送订单，即时物流的平台要保证足够的运力来匹配订单。随着互联网购物的兴起，催生了市场对于更加“快速”、更加“准时”的物流服务，为客户解决最后一公里的物流运输问题。',
          serviceContent: [
            {name: '同城跑腿', img: '1'},
            {name: '平台配送', img: '1'},
            {name: '商超配送', img: '1'},
            {name: '连锁店配送', img: '1'},
            {name: '社交电商配送', img: '1'},
            {name: '跨境电商配送', img: '1'},
            {name: '快递联盟配送', img: '1'},
            {name: '平台电商配送', img: '1'},
          ]
        },
        {
          name: '即时配送', title: '即时物流', desc: '即时物流是完全按照用户突然提出的物流要求进行物流活动的方式，是一种灵活性很高的应急物流方式。相对于传统物流，即时物流核心特点在于即时性，即满足用户提出的极速、准时的配送要求。因此，传统物流可以采取固定时间配送和揽收，即时物流则需要第一时间配送订单，即时物流的平台要保证足够的运力来匹配订单。随着互联网购物的兴起，催生了市场对于更加“快速”、更加“准时”的物流服务，为客户解决最后一公里的物流运输问题。',
          serviceContent: [
            {name: '同城跑腿', img: '1'},
            {name: '平台配送', img: '1'},
            {name: '商超配送', img: '1'},
            {name: '连锁店配送', img: '1'},
            {name: '社交电商配送', img: '1'},
            {name: '跨境电商配送', img: '1'},
            {name: '快递联盟配送', img: '1'},
            {name: '平台电商配送', img: '1'},
          ]
        },
        {
          name: '即时配送', title: '即时物流', desc: '即时物流是完全按照用户突然提出的物流要求进行物流活动的方式，是一种灵活性很高的应急物流方式。相对于传统物流，即时物流核心特点在于即时性，即满足用户提出的极速、准时的配送要求。因此，传统物流可以采取固定时间配送和揽收，即时物流则需要第一时间配送订单，即时物流的平台要保证足够的运力来匹配订单。随着互联网购物的兴起，催生了市场对于更加“快速”、更加“准时”的物流服务，为客户解决最后一公里的物流运输问题。',
          serviceContent: [
            {name: '同城跑腿', img: '1'},
            {name: '平台配送', img: '1'},
            {name: '商超配送', img: '1'},
            {name: '连锁店配送', img: '1'},
            {name: '社交电商配送', img: '1'},
            {name: '跨境电商配送', img: '1'},
            {name: '快递联盟配送', img: '1'},
            {name: '平台电商配送', img: '1'},
          ]
        },
      ],
      currentTabInfo: {
        name: '', title: '', desc: '', serviceContent: []
      },
      pageNo: 1,
      activeTab: 0,
      total: 100,
      list: [
        {
          title: '竹成集团（宁波）总公司', address: '浙江省宁波市江北区前洋E商小镇1幢1号楼512',
          phone: '0574-888888888', email: 'XXXXXX@zc-corp.cn', url: '1'
        },
        {title: '竹成集团（杭州）分公司', address: '浙江省杭州市XXXQ区XXX路XXX号', phone: '0574-888888888',
          email: 'XXXXXX@zc-corp.cn', url: '2' },
        {title: '竹成集团（上海）分公司', address: '上海市XXXQ区XXX路XXX号', phone: '0574-888888888',
          email: 'XXXXXX@zc-corp.cn', url: '3'},
      ],
      newsList: [
        { title: '北京9月回单卡客户打卡卡打卡阿打算阿打算 ',
          content: '\n' +
            '                                浙江省宁波市江北区前洋E商小镇1号楼512客服经拉风拉设计费拉拉阿萨德阿萨德\n' +
            '法定阿四发生发生法定发生发生发生 阿发阿萨德sadad阿斯蒂芬阿萨德发生大想，\n' +
            '核发开户的看法哈客户。\n' +
            '                            ',
          img: 'https://i0.hdslb.com/bfs/album/cfe1320211a15030b704023c76380d1ca826187b.jpg@1036w_1e_1c.jpg',
          date: '2020-09-04' },
        { title: '2', content: '1231231',
          img: 'https://i0.hdslb.com/bfs/album/cfe1320211a15030b704023c76380d1ca826187b.jpg@1036w_1e_1c.jpg', date: 'dasdas' },
        { title: '3', content: '1231231',
          img: 'https://i0.hdslb.com/bfs/album/cfe1320211a15030b704023c76380d1ca826187b.jpg@1036w_1e_1c.jpg', date: 'dasdas' },
      ]
    }
  },
  methods: {
    handleTab(tab) {
      this.activeTab = tab
      this.currentTabInfo = this.tabs[tab]
    },
    isActive(tab){
      return tab === this.activeTab ? 'active': ''
    },
    getData(){
      this.handleTab(0)
    },
    changeCurrent(num){
      this.pageNo = num
      this.getData()
      console.log(num);
    }
  },
  mounted() {
    this.getData()
  },
}
</script>

<style lang="less" scoped>
  @import "@/styles/var.less";
  .news-card{
    padding: 0 100px;

    .news-tabs{
      position: relative;
      z-index: 99999;
      /*padding: 45px 75px 57px 75px;*/
      padding-top: 45px;
      box-sizing: border-box;
      background: #FFFFFF;
      border-radius: 10px;
      margin: auto;
      margin-top: -122px;
      margin-bottom: 134px;
      .header{
        display: flex;
        justify-content: space-between;
        padding: 0 268px;
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
        .news-item{
          display: flex;
          margin-bottom: 65px;
        }
      }
    }
    .solution-desc{
      padding: 40px 82px 75px 50px;
      .title{
        font-size: 20px;
        font-weight: bold;
        color: #333333;
        margin-bottom: 33px;
      }
      .desc{
        font-size: 14px;
        font-weight: 500;
        color: #333333;
        line-height: 30px;

      }
    }
    /deep/ .lz-badge{
      margin-left: 75px;
    }
    .service-content{
      display: flex;
      flex-wrap: wrap;
      margin-top: 65px;
      margin-left: 109px;
      .service-item{
        display: flex;
        flex-direction: column;
        margin-right: 245px;
        margin-bottom: 74px;
        &:nth-child(4n){
          margin-right: 0;
        }
        &-img, img{
          width: 200px;
          height: 200px;
          margin-bottom: 20px;
        }
        &-title{
          text-align: center;
          font-size: 22px;
          font-weight: bold;
          color: #333333;
        }

      }
    }
}
</style>
