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
      <div class="service-content" :class="activeTab === 4? 'low': ''">
        <div class="service-item" v-for="(card,index) in currentTabInfo.serviceContent" :key="card.name">
          <div class="service-item-img">
            <img :src="'assets/image/solution/serviceContent/'+currentTabInfo.img+'/'+(index+1)+'.png'" />
          </div>
          <div class="service-item-title">{{card.name}}</div>
        </div>
      </div>
    </div>
    <ServiceAdvances v-if="activeTab === 3" />
    <TaxTeam v-if="activeTab === 3" />
  </div>
</template>

<script>
  import ServiceAdvances from "./ServiceAdvances";
  import service from "@/api/service";
  import TaxTeam from "@/pages/Solution/components/TaxTeam";
export default {
  name: 'ContactUsCard',
  components: {
    ServiceAdvances,
    TaxTeam
  },
  data() {
    return {
      tabs: [
        {
          name: '即时配送', title: '即时物流', desc: '即时物流是完全按照用户突然提出的物流要求进行物流活动的方式，是一种灵活性很高的应急物流方式。相对于传统物流，即时物流核心特点在于即时性，即满足用户提出的极速、准时的配送要求。因此，传统物流可以采取固定时间配送和揽收，即时物流则需要第一时间配送订单，即时物流的平台要保证足够的运力来匹配订单。随着互联网购物的兴起，催生了市场对于更加“快速”、更加“准时”的物流服务，为客户解决最后一公里的物流运输问题。',
          img: 'jsps',
          serviceContent: [
            {name: '同城跑腿', },
            {name: '平台配送', },
            {name: '商超配送', },
            {name: '连锁店配送', },
            {name: '社交电商配送', },
            {name: '跨境电商配送', },
            {name: '快递联盟配送', },
            {name: '平台电商配送', },
          ]
        },
        {
          name: '人力资源服务', title: '人力资源服务', desc: '人力资源服务外包是一种现在比较流行的外包管理方式，是客户根据企业需求将一项或多项人事事务或职能外包出去，由专业的人事外包公司代理，以降低人力资源管理成本，提高人力资源管理效率。邦芒凭借庞大的全国直营服务网络、先进的信息技术、专业的服务、灵活的产品方案以及对国家人事政策和人才市场的深刻理解，为各个行业不同规模企业客户提供以下内容为主的人事代理业务。',
          img: 'rlzyps',
          serviceContent: [
            {name: '招聘外包', },
            {name: '薪酬外包', },
            {name: '商业保险', },
            {name: '灵活用工', },
          ]
        },
        {
          name: '产业园运营', title: '产业园区运营', desc: '集团依托于自身主营产业的基础，在全国各地范围内积极开展与地方政府的合作，通过产业园投资、共建、托管、创新资源等多种形式，不断激发项目的内生活力，产生裂变效力，通过对产业链上下游的深挖，扩展客户群体的外延，形成价值链条的完整闭环，为地方经济的发展贡献力量。',
          img: 'cyyyy',
          serviceContent: [
            {name: '产业园区招商', },
            {name: '产业园区投资', },
            {name: '产业园区托管', },
            {name: '产业园区共建', },
          ]
        },
        {
          name: '税务筹划', title: '税务筹划', desc: '税收筹划是指纳税人为了实现企业价值最大化或者股东权益最大化，在法律法规允许并鼓励的范围内，通过对融资、投资、经营活动等的事先筹划和安排，对多种纳税方案进行最优化选择的一系列行为。税收筹划是企业合理合法的行为，是国家法律所鼓励的，更是企业财务管理的一项重要内容。',
          img: 'swch',
          serviceContent: [
            {name: '工资个税筹划', },
            {name: '劳务个税筹划', },
            {name: '企业得税筹划', },
            {name: '股东分红所得税 ', },
          ]
        },
        {
          name: '竹成资本', title: '竹成资本', desc: '集团秉承产融结合的经营理念，以产业为基础、以资本为纽带，实现可持续发展。',
          img: 'zczb',
          serviceContent: [
            {name: '即时物流产业基金', },
            {name: '竹成天使创投基金', },
          ]
        },
      ],
      currentTabInfo: {
        name: '', title: '', desc: '', serviceContent: []
      },
      pageNo: 1,
      activeTab: 0,
      total: 100,
      newsList: []
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
    getTeam(){
      service.getImgs({
        pageNo: 1,
        pageSize: 100,
        orderByClause: 'id desc',
        imgType: 6
      }).then(res => {
        console.log(res);
      })
    },
    changeCurrent(num){
      this.pageNo = num
      this.getData()
      console.log(num);
    }
  },
  mounted() {
    this.getData()
    this.getTeam();
  },
}
</script>

<style lang="less" scoped>
  @import "@/styles/var.less";
  .news-card{
    padding: 0 100px;

    .news-tabs{
      position: relative;
      z-index: 100;
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
        min-height: 60px;
        color: #333333;
        line-height: 30px;
        letter-spacing: 1px;
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
      &.low{
        flex-wrap: nowrap;
        justify-content: center;
        margin-right: 110px;
      }
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
