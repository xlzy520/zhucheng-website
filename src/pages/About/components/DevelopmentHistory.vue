<template>
  <div class="DevelopmentHistory">
    <div class="header lz-row">
      <lz-badge title="发展历程" title_en="DEVELOPMENT HISTORY" />
    </div>
    <div class="content">
      <div class="left">
        <div class="year-item">
          <div>小小梦想开始起航</div>
          <div class="circle-num">2013</div>
        </div>
        <div class="year-item mt-215" >
          <div>进入城市新经济之服务外包行业</div>
          <div class="circle-num">2015</div>
        </div>
        <div class="year-item mt-215">
          <div style="width: 439px">
            受益于中国城市新经济/新服务业的快速增长，加速布局全国分支机构，并着力发展城市灵活用工新业态
          </div>
          <div class="circle-num">2017</div>
        </div>
        <div class="year-item mt-210">
          <div style="width: 508px">
            产值破50亿人民币，正式组建竹成集团，成立竹成商学院
          </div>
          <div class="circle-num">2019</div>
        </div>

      </div>
      <div class="center">
        <img src="/assets/image/line.png" alt="">
      </div>
      <div class="right">
        <div class="year-item mt-150">
          <div style="width: 376px">聚焦发展泛物流行业服务外包业务</div>
          <div class="circle-num">2014</div>
        </div>
        <div class="year-item mt-195">
          <div style="width: 387px;">
            加速布局北京、上海、广东、深圳、浙江、江苏、安徽、福建、辽宁、吉林、湖北、河南、陕西、黑龙江、四川、山西、河北市场
          </div>
          <div class="circle-num">2016</div>
        </div>
        <div class="year-item mt-195">
          <div style="width: 426px">
            布局产业园新赛道：产业园运营、税务筹划、人力资源服务、即时物流、产业投资
          </div>
          <div class="circle-num">2018</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DevelopmentHistory',
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
  .circle-num{
    width: 88px;
    height: 88px;
    line-height: 88px;
    text-align: center;
    background: #5AA572;
    border-radius: 50%;
    color: #fff;
    font-size: 26px;
    font-family: Arial;
    font-weight: bold;
  }
  .DevelopmentHistory{
    height: 1390px;
    background-image: url("/assets/image/development-history.png");
    .header{
      padding-top: 90px;
    }
    /deep/ .lz-badge{
      .lz-badge-header{
        color: #fff;
      }
      .lz-badge-footer{
        color: #fff;
      }
    }
    .content{
      display: flex;
      justify-content: center;
      /*justify-content: space-between;*/
      padding-top: 50px;
    }
    .year-item{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      /*margin-right: 93px;*/
      color: #fff;
      font-size: 22px;
      /*font-weight: 500;*/
      >div:first-child{
        max-width: 500px;
        line-height: 1.5;
      }

    }
    .left{
      .circle-num{
        margin-left: 32px;
        /*margin-right: 32px;*/
      }
      .year-item{
        margin-right: 93px;
      }
    }
    .right{
      .year-item{
        flex-direction: row-reverse;
        margin-left: 93px;
      }
      .circle-num{
        margin-right: 32px;
      }
    }
  }
  .center{
    width: 120px;
    margin-top: 35px;
  }
  .mt-215{
    margin-top: 215px;
  }
  .mt-210{
    margin-top: 210px;
  }
  .mt-150{
    margin-top: 150px;
  }
  .mt-205{
    margin-top: 205px;
  }
  .mt-195{
    margin-top: 195px;
  }
  @media (max-width: 1600px) {
    .DevelopmentHistory{
      .content{
        /*padding-left: 138px;*/
      }
      .left{
        .year-item{
          margin-right: 60px;
        }
      }
      .right{
        .year-item{
          margin-left: 60px;
        }
      }
      .year-item{
        >div:first-child{
          max-width: 420px;
        }
      }
    }
  }
  @media (max-width: 1400px) {
    .mt-195{
      margin-top: 215px;
    }
    .DevelopmentHistory{
      .content{
        /*padding-left: 138px;*/
      }
      .left{
        .year-item{
          margin-right: 60px;
        }
      }
      .right{
        .year-item{
          margin-left: 60px;
        }
      }
      .year-item{
        >div:first-child{
          font-size: 18px;
          max-width: 360px!important;
        }
      }
    }
  }
  @media (max-width: 1200px) {
    .mt-195{
      margin-top: 240px;
    }
    .mt-210{
      margin-top: 230px;
    }
    .mt-215{
      margin-top: 225px;
    }
    .DevelopmentHistory{
      height: 790px;
      .content{
        transform: scale(0.6) translateY(-350px);
      }
      .left{
        .year-item{
          margin-right: 260px;
          margin-bottom: -10px;
          margin-left: -160px;
        }
      }
      .right{
        .year-item{
          margin-bottom: -30px;
          margin-right: -160px;
          /*margin-left: 60px;*/
        }
      }
      .center{
        position: absolute;
        /*left: 150px;*/
      }
      .year-item{
        >div:first-child{
          /*max-width: 240px!important;*/
        }
      }
    }
  }

  @media (max-width: 875px) {
    .DevelopmentHistory{
      height: 690px;
      .content{
        transform: scale(0.4) translateY(-650px);
      }
      .left{
        .year-item{
          margin-right: 160px;
          margin-bottom: -10px;
        }
      }
      .right{
        .year-item{
          margin-bottom: -30px;
          /*margin-left: 60px;*/
        }
      }
      .center{
        position: absolute;
        /*left: 150px;*/
      }
      .year-item{
        >div:first-child{
          /*max-width: 240px!important;*/
        }
      }
    }
  }

  @media (max-width: 705px) {
    .DevelopmentHistory{
      height: 690px;
      .content{
        transform: scale(0.3) translateY(-650px);
      }
      .left{
        .year-item{
          margin-right: 160px;
          margin-bottom: -10px;
        }
      }
      .right{
        .year-item{
          margin-bottom: -30px;
          /*margin-left: 60px;*/
        }
      }
      .center{
        position: absolute;
        /*left: 150px;*/
      }
      .year-item{
        >div:first-child{
          /*max-width: 240px!important;*/
        }
      }
    }
  }

</style>
