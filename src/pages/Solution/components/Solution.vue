<template>
  <div class="solution-process lz-row">
    <LzBadge title="解决方案" title_en="SOLUTION"/>
    <div class="solution-process-content">
      <div class="so-row">
        <div class="solution-process-item">
          <img src="assets/image/solution/process/1.png" />
          <div class="solution-process-item-text">
            在线提交 <br />《项目融资计划书》
          </div>
        </div>
        <svg class="right-center" xmlns="http://www.w3.org/2000/svg" version="1.1" width="250" height="30">
          <rect width="230" x="10" y="10" height="4" style="fill:#5AA572;stroke-width:1;" />
          <polygon points="230,0 230,24 250,12"
                   style="fill:#5AA572;"/>
        </svg>
        <div class="solution-process-item">
          <img src="assets/image/solution/process/1.png" />
          <div class="solution-process-item-text">
            评估 <br />《项目融资计划书》
          </div>
        </div>
        <svg class="right-center" xmlns="http://www.w3.org/2000/svg" version="1.1" width="250" height="30">
          <rect width="230" x="10" y="10" height="4" style="fill:#5AA572;stroke-width:1;" />
          <polygon points="230,0 230,24 250,12"
                   style="fill:#5AA572;"/>
        </svg>
        <div class="solution-process-item">
          <img src="assets/image/solution/process/1.png" />
          <div class="solution-process-item-text">
            投资经理接洽
          </div>
        </div>
        <svg class="right-center" xmlns="http://www.w3.org/2000/svg" version="1.1" width="250" height="30">
          <rect width="230" x="10" y="10" height="4" style="fill:#5AA572;stroke-width:1;" />
          <polygon points="230,0 230,24 250,12"
                   style="fill:#5AA572;"/>
        </svg>
        <div class="solution-process-item">
          <img src="assets/image/solution/process/1.png" />
          <div class="solution-process-item-text">
            签订 <br>《保密协议》 <br>《投资意向书》
          </div>
        </div>
      </div>
      <div class="so-row">

        <div class="df ys">
        <div class="solution-process-item">
          <img src="assets/image/solution/process/1.png" />
          <div class="solution-process-item-text">
            完成投资
          </div>
        </div>
        <svg class="left-center" xmlns="http://www.w3.org/2000/svg" version="1.1" width="250" height="30">
          <rect width="230" x="20" y="10" height="4" style="fill:#5AA572;stroke-width:1;" />
          <polygon points="20,0 20,24 0,12"
                   style="fill:#5AA572;"/>
        </svg>
        <div class="solution-process-item">
          <img src="assets/image/solution/process/1.png" />
          <div class="solution-process-item-text">
            签订 <br>《投资协议》
          </div>
        </div>
        <svg class="left-center" xmlns="http://www.w3.org/2000/svg" version="1.1" width="250" height="30">
          <rect width="230" x="20" y="10" height="4" style="fill:#5AA572;stroke-width:1;" />
          <polygon points="20,0 20,24 0,12"
                   style="fill:#5AA572;"/>
        </svg>
        <div class="solution-process-item">
          <img src="assets/image/solution/process/1.png" />
          <div class="solution-process-item-text">
            尽快调查
          </div>
        </div>
      </div>


        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="400" height="200">
          <rect width="4" x="326" y="10" height="150" style="fill:#5AA572;" />
          <rect width="310" x="20" y="160" height="4" style="fill:#5AA572;" />
          <polygon points="20,151 20,173 0,162"
                   style="fill:#5AA572;"/>
        </svg>
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
  .solution-process{
    margin-top: 105px;
  }
  .solution-process-content{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 38px;
    /*margin-left: 75px;*/
    .solution-process-item{
      width: 160px;
      img{
        width: 48px;
        height: 48px;
        display: flex;
        margin: auto;
        margin-bottom: 20px;
      }
      .solution-process-item-text{
        width: 180px;
        height: 60px;
        font-size: 20px;
        color: #333333;
        line-height: 30px;
        text-align: center;
      }
    }
    .solution-process-img{
      margin-bottom: 15px;
      img{
        background: #878787;
        width: 132px;
        height: 132px;
        border-radius: 10px;
      }
    }
    .solution-process-item-name{
      font-size: 34px;
      color: #343434;
      margin-bottom: 20px;

    }
    .solution-process-item-content{
      text-align: left;
      font-size: 14px;
      color: #343434;
      line-height: 24px;
      height: 124px;
      overflow: scroll;
    }

  }
  .right-center{

  }
  .so-row{
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
  }
  .ys{
    margin-top: 90px;
    align-items: baseline;
  }

</style>
