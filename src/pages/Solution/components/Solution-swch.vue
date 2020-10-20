<template>
  <div class="solution-swch lz-row">
    <LzBadge title="解决方案" title_en="SOLUTION"/>
    <div class="solution-swch-content">
      <div class="swch-lhyg solution-row">
        <div class="text-content">
          <div class="title">1.灵活用工解决方案</div>
          <div class="sub-title">灵活用工-个体工商户/委托代征</div>
          <div class="text">【方案原理】从“雇佣关系”转变为“业务承揽关系”</div>
        </div>
        <div class="img">
          <img src="assets/image/solution/swch/1.png" alt="">
        </div>
      </div>
      <div class="swch-lhyg solution-row">
        <div class="text-content">
          <div class="title">2.自然人代开业务方案</div>
          <div class="sub-title">应用场景</div>
          <div class="text ">
            自然人从事货物销售、建筑修缮劳务、运输服务、居间服务、技术服务等，
            几乎涵盖各行各业、企业 生产经营活动过程中的采购、生产、销售各环节。
          </div>
          <div class="sub-title">平台税源地自然人代开代征优势</div>
          <div class="text">

            自然人也是一种身份的纳税人（其他是一般纳税人、小规模纳税人），
            自然人从事货物销售、提供服务和劳务，难以取得发票。通过平台对
            接利用国家税收优惠政策，享受核定征收。平台税源地自然人代开个
            税按照个人经营所得税核定最低比例征收，不需要汇算清缴。 自然人
            提供手续最简，额度最高，时效最快（提供资料预约， 税款服务费打
            款后当日出票），成本最低，应用范围最广的个人完税服务。

          </div>
        </div>
        <div class="img">
          <img src="assets/image/solution/swch/2.png" alt="">
        </div>
      </div>
      <div class="swch-lhyg solution-row">
        <div class="text-content">
          <div class="title">3.供应链成本优化解决方案</div>
          <div class="sub-title">供应链成本优化原理</div>
          <div class="text">
            <p>【入驻】”无财政返还“转变为”享受园区财政奖励“</p>
            <p>【新增】业务链增加供应链成本中心”享受园区财政奖励“</p>
          </div>
        </div>
        <div class="text-content">
          <div class="title">4.企业股东分红成本优化解决方案</div>
          <div class="sub-title">股东分红成本优化原理</div>
          <div class="text">
            <p class="w76">
              了解筹划公司原股权架构，将企业组织架构做有效拆解，
              通过增资或者减资再增资方式达到股权稀释或降低分配级数。
            </p>
            <p class="w76">
              投资公司一般为合伙企业，根据需要可以设计分层架构，
              达到低税负成本，代办企业注册落地。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Solution-swch',
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
  .solution-swch{
    background: #fff;
    padding-top: 87px;
    padding-bottom: 108px;
    &-content{

    }
  }
  .w76{
    width: 76%;
  }
  .swch-lhyg{
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    .text-content{
      padding-top: 30px;
      width: 40%;
      .title{
        font-size: 20px;
        font-weight: bold;
        color: #599F6F;
        line-height: 24px;
      }
      .sub-title{
        font-size: 18px;
        font-weight: bold;
        color: #313333;
        line-height: 24px;
        margin-top: 35px;
      }
      .text{
        font-size: 16px;
        color: #313333;
        line-height: 24px;
        margin-top: 20px;
      }
    }
    .img{

    }

  }


</style>
