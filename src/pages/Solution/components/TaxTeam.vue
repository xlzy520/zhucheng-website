<template>
  <div class="tax-team">
    <LzBadge title="税务团队" title_en="TAX TEAM"/>
    <div class="tax-team-content">
      <div class="tax-team-item" v-for="(member,index) in teamList" :key="member.id">
        <div class="tax-team-img">
          <img :src="member.imgurl" />
        </div>
        <div class="tax-team-item-name">{{member.imgname}}</div>
        <div class="tax-team-item-content">{{member.remark}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ServiceAdvances',
    props: {
      teamList: {
        type: Array,
        default: ()=>([])
      },
    },
    data() {
      return {
        list: [],
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
