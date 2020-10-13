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
          <div class="syabouttxt" v-if="type === 'index'">
            <p>
              竹成集团始创于2013年，总部坐落于“书藏古今•港通天下”的浙江宁波。
              在创始团队的引领下，全体竹成人秉承“让商业更简单、让幸福更简单”的愿景初心，
              以汇滴成海的智慧与脚踏实地的勤奋，努力实现“打造即时物流供应链第一品牌”的愿景。
            </p>
            <p>
              2019年，集团各版块年产值突破50亿元人民币，全国现有管理团队400余人。
              集团旗下：即时配送公司33家、控股供应链子公司5家、城市配送站点975个，
              业务范围涵盖：即时物流、人力资源服务、产业园运营、税务筹划、竹成资本...
            </p>

          </div>
          <div class="syabouttxt" v-if="type === 'about'">
            <p>
              竹成集团始创于2013年，总部坐落于“书藏古今•港通天下”的浙江宁波。在创始团队的引领下，全体竹成人秉承“让商业更简单、让幸福更简单”的愿景初心，以汇滴成海的智慧与脚踏实地的勤奋，努力实现“打造即时物流供应链第一品牌”的愿景。            </p>
            <p>
               2019年，集团各版块年产值突破50亿元人民币，全国现有管理团队400余人。集团旗下：即时配送公司33家、控股供应链子公司5家、城市配送站点975个，业务范围涵盖： 即时物流、人力资源服务、产业园运营、税务筹划、竹成资本。            </p>
            <p>
              竹成集团是企业幸福力文化的倡导者和践行者，坚信人才是企业的核心竞争力、创造幸福于人的机制才是企业发展的核动力。我们不断学习全球卓越企业的先进文化，融入竹成自身的DNA中，打造了竹成独特的幸福力文化。竹成在行业内首创了员工幸福力体系： 四六工作制、候鸟办公计划、祖业计划、创业支持计划、免费医疗计划、幸福假期计划、婚房/婚车福利计划。
            </p>
          </div>
          <div class="footer" v-if="hasBtn">
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
    props: {
      hasBtn: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: 'index'
      },
    },
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
    padding: 0 200px;
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
        height: 453px;
      }
    }
    .syaboutwen {
      position: relative;
      width: auto;
      padding: 15px 0 15px 42px;
      box-sizing: border-box;
      .title{
        font-size: 20px;
        height: 20px;
        line-height: 15px;
        font-weight: bold;
        color: #333;
        margin-bottom: 33px;
      }
    }
    .syabouttxt {
      width: 742px;
      font-size: 14px;
      color: #333333;
      line-height: 40px;
      letter-spacing: 1.5px;
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
  @media (max-width: 1919px) {
    .symain {
      padding: 0 100px;
      .syabouttxt{
        width: 557px;
      }
    }
  }
</style>
