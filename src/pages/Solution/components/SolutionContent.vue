<template>
  <div class="news-card">
    <div class="news-tabs">
      <div class="header">
        <div :class="['news-tab', isActive(index)]"
             @click="handleTab(index)"
             v-for="(tab,index) in tabs" :key="tab.title">
          <span>{{tab.name}}</span>
        </div>
      </div>
      <div class="solution-desc lz-row">
        <lz-badge title="服务简介" title_en="SERVICE INTRODUCTION" />
        <!--        <div class="title">{{currentTabInfo.title}}</div>-->
        <div class="desc">{{currentTabInfo.desc}}</div>
      </div>
      <div class="footer">

      </div>
    </div>
    <div class="lz-row">
      <LzBadge title="服务内容" black title_en="SERVICE CONTENT"/>
      <div class="service-content" :class="currentTabInfo.img">
        <div class="service-item" v-for="(card,index) in currentTabInfo.serviceContent" :key="card.name">
          <div class="service-item-img">
            <img :src="'assets/image/solution/serviceContent/'+currentTabInfo.img+'/'+(index+1)+'.png'" />
          </div>
          <div class="service-item-title">{{card.name}}</div>
        </div>
      </div>
    </div>
<!--    <ServiceAdvances class="lz-row" v-if="activeTab === 1" />-->
    <Solution v-if="activeTab === 4"/>
    <SolutionSWCH v-if="activeTab === 1"/>
    <TaxTeam class="lz-row" v-if="activeTab === 1" :teamList="teamList" />
  </div>
</template>

<script>
  import ServiceAdvances from "./ServiceAdvances";
  import service from "@/api/service";
  import TaxTeam from "@/pages/Solution/components/TaxTeam";
  import Solution from "@/pages/Solution/components/Solution";
  import SolutionSWCH from "@/pages/Solution/components/Solution-swch";
export default {
  name: 'ContactUsCard',
  components: {
    ServiceAdvances,
    Solution,
    TaxTeam,
    SolutionSWCH
  },
  data() {
    return {
      tabs: [
        {
          name: '产业园运营', title: '产业园区运营',
          desc: '集团依托于自身主营产业的基础，在全国各地范围内积极开展与地方政府的合作，通过产业园投资、共建、托管等多种形式，为地方经济的发展贡献力量。',
          img: 'cyyyy',
          serviceContent: [
            {name: '产业园区招商', },
            {name: '产业园区投资', },
            {name: '产业园区托管', },
            {name: '产业园区共建', },
          ]
        },
        {
          name: '税务筹划', title: '税务筹划',
          desc: '税收筹划是指纳税人为了实现企业价值最大化或者股东权益最大化，在法律法规允许并鼓励的范围内，通过对融资、投资、经营活动等的事先筹划和安排，对多种纳税方案进行最优化选择的一系列行为。税收筹划是企业合理合法的行为，是国家法律所鼓励的，更是企业财务管理的一项重要内容。',
          img: 'swch',
          serviceContent: [
            {name: '个人薪酬优化', },
            {name: '企业税务优化', },
            {name: '企业得税筹划', },
            {name: '股东分红所得税 ', },
          ]
        },
        {
          name: '人力资源服务', title: '人力资源服务',
          desc: '企业根据需要将人力资源管理工作或者职能外包出去，交由其他企业或组织进行管理，以降低人力成本，实现效益最大化。',
          img: 'rlzyps',
          serviceContent: [
            {name: '招聘外包', },
            {name: '薪酬福利外包', },
            {name: '人力项目外包', },
            {name: '商业保险', },
            {name: '灵活用工', },
          ]
        },
        {
          name: '即时物流', title: '即时物流',
          desc: '随着互联网生活服务的兴起，催生了市场对于更加“快速”、更加“准时”的物流服务需求。即时物流服务应运而生，为客户解决最后一公里的物流运输问题。',
          img: 'jswl',
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
          name: '竹成资本', title: '竹成资本',
          desc: '集团秉承产融结合的经营理念，以产业为基础、以资本为纽带，实现可持续发展。',
          img: 'zczb',
          serviceContent: [
            {name: '物流产业基金', },
            {name: '竹成天使基金', },
            {name: '竹成创投基金', },
          ]
        },
      ],
      currentTabInfo: {
        name: '', title: '', desc: '', serviceContent: []
      },
      pageNo: 1,
      activeTab: 0,
      total: 100,
      newsList: [],
      teamList: []
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
        this.teamList = res.list || []
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
    /*padding: 0 100px;*/

    .news-tabs{
      position: relative;
      z-index: 100;
      /*padding-top: 45px;*/
      box-sizing: border-box;
      /*background: #FFFFFF;*/
      margin: auto;
      /*margin-top: -122px;*/
      /*margin-bottom: 134px;*/
      .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 268px;
        height: 116px;
        line-height: 116px;
        background: #fff;
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
            padding: 0 48px;
          }
          .border-bottom{
            display: none;
          }
          &:hover{
            color: #5AA572;
          }
          &.active{
            color: #fff;
            background: #5AA572;
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
        margin-top: 46px;
      }
    }
    .service-content{
      display: flex;
      flex-wrap: wrap;
      margin-top: 65px;
      &.zczb{
        flex-wrap: nowrap;
        justify-content: space-around;
        .service-item{
          margin-right: 0;
        }
      }
      &.rlzyps{
        .service-item{
          margin-right: 136px;
          &-img, img{
            width: 171px;
            height: 171px;
          }
          &:nth-child(4n){
            margin-right: 136px;
          }
          &:nth-child(5n){
            margin-right: 0;
          }
        }
      }
      .service-item{
        display: flex;
        flex-direction: column;
        margin-right: 200px;
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
  @media (max-width: 1919px) {
    .news-card .service-content{
      .service-item{
        margin-right: 100px;
        &:nth-child(4n){
          margin-right: 0;
        }
      }
    }
  }

</style>
