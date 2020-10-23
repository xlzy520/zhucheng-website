<template>
  <div class="solution-process lz-row">
    <LzBadge title="解决方案" title_en="SOLUTION"/>
    <div class="solution-process-content">
      <div class="so-row">
        <div class="solution-process-item">
          <img src="assets/image/solution/process/1.png"/>
          <div class="solution-process-item-text">
            在线提交 <br/>《项目融资计划书》
          </div>
        </div>
        <Arrow type="right"></Arrow>
        <div class="solution-process-item">
          <img src="assets/image/solution/process/2.png"/>
          <div class="solution-process-item-text">
            评估 <br/>《项目融资计划书》
          </div>
        </div>
        <Arrow type="right"></Arrow>
        <div class="solution-process-item">
          <img src="assets/image/solution/process/3.png"/>
          <div class="solution-process-item-text">
            投资经理接洽
          </div>
        </div>
        <Arrow type="right"></Arrow>
        <div class="solution-process-item">
          <img src="assets/image/solution/process/4.png"/>
          <div class="solution-process-item-text">
            签订 <br>《保密协议》 <br>《投资意向书》
          </div>
        </div>
      </div>
      <div class="so-row">

        <div class="df ys">
          <div class="solution-process-item">
            <img src="assets/image/solution/process/5.png"/>
            <div class="solution-process-item-text">
              完成投资
            </div>
          </div>
          <Arrow type="left"/>
          <div class="solution-process-item">
            <img src="assets/image/solution/process/6.png"/>
            <div class="solution-process-item-text">签订 <br>《投资协议》</div>
          </div>
          <Arrow type="left"/>
          <div class="solution-process-item">
            <img src="assets/image/solution/process/7.png"/>
            <div class="solution-process-item-text">
              尽快调查
            </div>
          </div>
        </div>
        <Arrow type="wai"/>
      </div>

    </div>
  </div>
</template>

<script>
  import Arrow from "@/pages/Solution/components/Arrow";

  export default {
    name: 'ServiceAdvances',
    components: {
      Arrow,
    },
    props: {
      teamList: {
        type: Array,
        default: () => ([])
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
  .solution-process {
    margin-top: 105px;
  }
  .solution-process-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 38px;
    /*margin-left: 75px;*/
    .solution-process-item {
      width: 160px;
      img {
        width: 48px;
        height: 48px;
        display: flex;
        margin: auto;
        margin-bottom: 20px;
      }

      .solution-process-item-text {
        width: 180px;
        height: 60px;
        font-size: 20px;
        color: #333333;
        line-height: 30px;
        text-align: center;
      }
    }

    .solution-process-img {
      margin-bottom: 15px;

      img {
        background: #878787;
        width: 132px;
        height: 132px;
        border-radius: 10px;
      }
    }

    .solution-process-item-name {
      font-size: 34px;
      color: #343434;
      margin-bottom: 20px;

    }

    .solution-process-item-content {
      text-align: left;
      font-size: 14px;
      color: #343434;
      line-height: 24px;
      height: 124px;
      overflow: scroll;
    }

  }

  .right-center {

  }

  .so-row {
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
  }

  .ys {
    margin-top: 90px;
    align-items: baseline;
  }
  @media (max-width: 1400px) {
    .solution-process-content{
      transform: scale(0.8) translateX(-20px);
    }
  }
  @media (max-width: 1200px) {
    .solution-process-content{
      transform: scale(0.6) translateX(-60px);
    }
  }
  @media (max-width: 875px) {
    .solution-process-content{
      transform: scale(0.5) translateX(-120px);
      margin: -90px 0;
    }
    .tax-team-content{
      margin-left: 0;
      .tax-team-item{
        width: 100%;
        height: 300px;
        margin-right: 0;
      }
    }
  }
  @media (max-width: 745px) {
    .solution-process-content{
      transform: scale(0.4) translateX(-270px);
    }
  }
  @media (max-width: 600px) {
    .solution-process-content{
      transform: scale(0.3) translateX(-240px);
    }
  }
  @media (max-width: 500px) {
    .solution-process-content{
      transform: scale(0.3) translateX(-320px);
    }
  }
  @media (max-width: 400px) {
    .solution-process-content{
      transform: scale(0.3) translateX(-395px);
    }
  }

</style>
