<template>
  <div class="symain">
    <div class="syabout">
      <div class="card-header">
        <lz-badge title="关于我们" title_en="About Us" />
      </div>
      <div class="df flex-column-xs">
        <div class="syaboutpic">
          <a href="/about">
            <img src="http://www.bridgehr.com/template/default/images/zhu01.jpg">
            <div class="maskfadeUp wow animated" data-wow-delay="0.5s"></div>
          </a>
        </div>

        <div class="syaboutwen">
          <div class="title">
            宁波竹成信息科技（集团）有限公司
          </div>
          <div class="syabouttxt">
            <p>
              竹成集团始创于2013年，总部坐落于“书藏古今•港通天下”的浙江宁波。
              在创始团队的引领下，全体竹成人秉承“赋能于企、服务于人”的初心，
              以汇滴成海的智慧与脚踏实地的勤奋，努力实现“打造中国服务外包第一品牌”的愿景。
            </p>
            <p>
              2019年，集团各版块年产值突破50亿元人民币，全国现有管理团队300余人。
              集团旗下控股子公司5家、分公司14家、线下直营服务网点200余个、运营产业园区2个，
              业务范围涵盖： 即时物流、即配大数据、产业园运营、人力资源外包、竹成资本、即配供应链解决方案等6大类...
            </p>

          </div>
          <div class="footer">
            <a href="/#/about" class="more">了解更多>></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import LzBadge from './LzBadge'
  export default {
    name: 'Card',
    components: {
      LzBadge
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less">
  @import "@/styles/var.less";
  .symain {
    padding: 0 100px;


    .syabout {
      margin-top: -182px;
      position: relative;
      z-index: 999;
      background-color: #fff;
      padding: 0 56px 60px 56px;
    }
    .syaboutpic {
      height: 453px;
      position: relative;
      overflow: hidden;
      img{
        width: 785px;
      }
    }
    .syaboutwen {
      position: relative;
      width: auto;
      padding: 25px 0 15px 42px;
      box-sizing: border-box;
      .title{
        font-size: 15px;
        line-height: 15px;
        font-weight: bold;
        color: #333;
        margin-bottom: 25px;
      }
    }
    .syabouttxt {
      width: 742px;
      font-size: 11px;
      font-weight: 500;
      color: #333333;
      line-height: 40px;
      letter-spacing: 2.5px;
      p{
        margin: 0;
        text-indent: 20px;
        line-height: 36px;
      }
    }
    .card-header{
      display: flex;
      align-items: center;
      height: 122px;
    }
    .footer{
      margin-top: 90px;
      .more{
        padding: 10px 15px;
        background: @primary-color;
        color: #fff;
        border-radius: 3px;
        font-size: 12px;
      }
    }
  }
</style>
