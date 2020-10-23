<template>
  <div class="tax-team">
    <LzBadge title="税筹团队" title_en="TAX TEAM"/>
    <div class="tax-team-content">
      <div class="tax-team-item" v-for="(member,index) in teamList" :key="member.id">
        <div class="tax-team-img">
          <img :src="member.imgurl" />
        </div>
        <div class="tax-team-item-name">{{member.imgname}}</div>
<!--        <div class="tax-team-item-name"></div>-->
        <div class="tax-team-item-content">{{member.ext1}}</div>
        <div class="desc-detail">{{member.remark}}</div>
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
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 38px;
    /*margin-left: 75px;*/
    .tax-team-item{
      padding: 40px 33px 60px;
      min-width: 200px;
      width: 20%;
      cursor: pointer;
      background: #FFFFFF;
      box-shadow: 0px 0px 26px 2px rgba(65, 65, 65, 0.1);
      opacity: 0.9;
      height: 320px;
      border-radius: 10px;
      margin-bottom: 30px;
      box-sizing: border-box;
      text-align: center;
      .tax-team-item-content{
        font-size: 15px;
        font-family: Adobe Heiti Std;
        color: #333333;
        line-height: 15px;
        text-align: center;

      }
      .desc-detail{
        display: none;
      }
      &:hover{
        background: #5AA672;
        color: #fff;
        .tax-team-item-name{
          /*color: #fff;*/
        }
        .desc-detail{
          display: block;
        }
        .tax-team-img, .tax-team-item-content{
          display: none;
        }
      }
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
      margin-bottom: 20px;

    }
    .tax-team-item-content{
      text-align: left;
      font-size: 14px;
      color: #343434;
      line-height: 24px;
      overflow: scroll;
    }

  }
  @media (max-width: 1400px) {
    .tax-team-content{
      .tax-team-item{
        padding: 40px 0;
      }
    }
  }
  @media (max-width: 875px) {
    .tax-team-content{
      margin-left: 0;
      .tax-team-item{
        width: 100%;
        height: 300px;
        margin-right: 0;
      }
    }
  }

</style>
