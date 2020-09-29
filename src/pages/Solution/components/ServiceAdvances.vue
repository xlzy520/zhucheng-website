<template>
  <div class="service-advances">
    <LzBadge title="服务优势" title_en="SERVICE ADVANTAGES"/>
    <div class="service-advances-content">
      <div class="advance-item" v-for="(card,index) in list" :key="card.name">
        <div class="advance-header">
          <div class="advance-index">{{index+1}}</div>
          <div class="advance-title">{{card.title}}</div>
        </div>
        <div class="advance-item-content">{{card.content}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceAdvances',
  data() {
    return {
      list: [
        {title: '不了解政策', content: '竹成集团整合汇编国家与地方税收政策，根据企业发展状况与需求，将政策信息定制化输送给中小企业，帮助企业第一时间掌握政策动态，解决中小企业“不懂政策”的难题。'},
        {title: '读不懂政策', content: '竹成集团将传统财税服务里为大中小企业提供各种灵活性，定制化的服务模式，并构建了多行业、多场景的税筹方案库，帮助企业快速精准地匹配涉税痛点，解决“未充分享受政策、节税方式不合规”的难题。'},
        {title: '落地实施难', content: '竹成集团通过大量自营园区、SaaS云管理的方式，有效提高了风险把控效率，完成了“前端咨询、中端服务落地、后端风险管控”的财税全流程服务构建，解决中小企业“落地能力差”的难题。'},
      ],
    }
  }
}
</script>

<style lang="less" scoped>
  .service-advances{

  }
  .service-advances-content{
    display: flex;
    margin-top: 44px;
    margin-left: 75px;
    .advance-item{
      width: 409px;
      height: 160px;
      padding: 20px;
      margin-right: 175px;
    }
    .advance-header{
      display: flex;
      align-items: center;
      margin-bottom: 23px;

      .advance-index{
        width: 62px;
        height: 62px;
        background: #5AA672;
        border-radius: 50%;
        font-size: 36px;
        font-weight: bold;
        color: #FFFFFF;
        text-align: center;
        line-height: 62px;
      }
      .advance-title{
        margin-left: 25px;
        font-size: 22px;
        font-weight: bold;
        color: #343434;
      }
    }
    .advance-item-content{
      width: 409px;
      font-size: 14px;
      font-weight: bold;
      color: #343434;
      line-height: 24px;
    }

  }

</style>
