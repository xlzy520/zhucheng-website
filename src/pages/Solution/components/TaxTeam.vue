<template>
  <div class="tax-team">
    <LzBadge title="税务团队" title_en="TAX TEAM"/>
    <div class="tax-team-content">
      <div class="tax-team-item" v-for="(card,index) in list" :key="card.id">
        <div class="tax-team-img">
          <img :src="card.imgurl" />
        </div>
        <div class="tax-team-item-name">{{card.name}}</div>
        <div class="tax-team-item-content">{{card.content}}</div>
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
          {id: 1, name: '李某某', imgurl: '', content: '税务实战经验丰富，曾服务多家香港上市跨国集团。精通跨国集团对外投资、转让定价、税务风控、进出口、保税区税务处理等。'},
          {id: 2, name: '李某某', imgurl: '', content: '税务实战经验丰富，曾服务多家香港上市跨国集团。精通跨国集团对外投资、转让定价、税务风控、进出口、保税区税务处理等。'},
          {id: 3, name: '李某某', imgurl: '', content: '税务实战经验丰富，曾服务多家香港上市跨国集团。精通跨国集团对外投资、转让定价、税务风控、进出口、保税区税务处理等。'},
          {id: 4, name: '李某某', imgurl: '', content: '税务实战经验丰富，曾服务多家香港上市跨国集团。精通跨国集团对外投资、转让定价、税务风控、进出口、保税区税务处理等。'},
          {id: 5, name: '李某某', imgurl: '', content: '税务实战经验丰富，曾服务多家香港上市跨国集团。精通跨国集团对外投资、转让定价、税务风控、进出口、保税区税务处理等。'},
        ],
      }
    }
  }
</script>

<style lang="less" scoped>
  .tax-team{
    margin-top: 105px;
  }
  .tax-team-content{
    display: flex;
    margin-top: 38px;
    margin-left: 75px;
    .tax-team-item{
      padding: 40px 33px 60px;
      width: 280px;
      height: 393px;
      background: #FFFFFF;
      box-shadow: 0px 0px 26px 2px rgba(65, 65, 65, 0.1);
      opacity: 0.9;
      border-radius: 10px;
      margin-right: 62px;
      box-sizing: border-box;
      text-align: center;
    }
    .tax-team-img{
      margin-bottom: 15px;
      img{
        background: #878787;
        width: 132px;
        height: 132px;
        border-radius: 10px;
      }
    }
    .tax-team-item-name{
      font-size: 34px;
      color: #343434;
      margin-bottom: 20px;

    }
    .tax-team-item-content{
      text-align: left;
      font-size: 14px;
      color: #343434;
      line-height: 24px;
    }

  }

</style>
