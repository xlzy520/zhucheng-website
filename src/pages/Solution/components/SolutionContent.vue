<template>
  <div class="news-card">
    <div class="news-tabs">
      <div class="header lz-row">
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
            // {name: '企业得税筹划', },
            // {name: '股东分红所得税 ', },
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
            {name: '竹成产业基金', },
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
      this.getTeam()
    },
    isActive(tab){
      return tab === this.activeTab ? 'active': ''
    },
    getTeam(){
      if (this.activeTab === 1) {
        service.getImgs({
          pageNo: 1,
          pageSize: 100,
          orderByClause: 'id desc',
          imgType: 6
        }).then(res => {
          this.teamList = res.list || []
        })
      }
    },
    changeCurrent(num){
      this.pageNo = num
      this.getData()
    }
  },
  mounted() {
    const activeTab = this.$route.query.tab || 0
    this.handleTab(Number(activeTab))
    this.getTeam();
  },
}
</script>

<style lang="less" scoped>
  @import "@/styles/var.less";
  .news-card{

    .news-tabs{
      position: relative;
      z-index: 100;
      box-sizing: border-box;
      margin: auto;
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
        font-size: 18px;
        font-weight: 500;
        min-height: 60px;
        color: #333333;
        line-height: 30px;
        letter-spacing: 1px;
        margin-top: 46px;
        text-indent: 40px;
      }
    }
}
  .service-content{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 65px;
    &.zczb{
      justify-content: space-around;
      .service-item{
      }
    }
    &.jswl{
      justify-content: space-around;
      .service-item{
        width: 22%;
        min-width: 200px;
        display: flex;
        align-items: center;
      }
    }
    &.swch{
      justify-content: space-around;
    }
    &.rlzyps{
      .service-item{
        &-img, img{
          width: 171px;
          height: 171px;
        }
      }
    }
    .service-item{
      display: flex;
      flex-direction: column;
      margin-bottom: 74px;
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

  @media (max-width: 1600px) {
    .header{
      height: 80px;
      line-height: 80px;
      .news-tab{
        span{
          padding: 0 24px;
        }
      }
    }
    .service-content{
      &.rlzyps{
        .service-item{
          margin-right: 60px;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .header{
      padding: 0 12px;
      line-height: 60px;
      height: 60px;
      .news-tab{
        font-size: 14px;
        span{
          padding: 0 20px;
        }
      }
    }
  }
  @media (max-width: 875px) {
    .header{
      padding: 0;
      height: 50px;
      line-height: 50px;
      .news-tab{
        font-size: 12px;
        span{
          padding: 0 15px;
        }
      }
    }
    .news-card .service-content{
      justify-content: center;
      .service-item{
        margin-right: 0px;
        width: 45%;
        align-items: center;
      }
    }
  }
  @media (max-width: 545px) {
    .header{
      padding: 0!important;
      line-height: 40px;
      height: 40px;
      .news-tab{
        font-size: 10px;
        span{
          padding: 0 5px;
        }
      }
    }
    .news-card .service-content{
      justify-content: center;
      .service-item{
        margin-right: 0px;
        width: 100%;
        align-items: center;
      }
    }
  }

</style>
