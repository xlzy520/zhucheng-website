<template>
  <div class="symain">
    <div class="syabout clearfix">
      <div class="syaboutpic fl">
        <a href="/aboutus">
          <img src="http://www.bridgehr.com/template/default/images/zhu01.jpg">
          <div class="maskfadeUp wow animated" data-wow-delay="0.5s"></div>
        </a>
      </div>

      <div class="syaboutwen fr">
        <div class="syabouttxt">
          <h2 class="wow fadeInUp animated" data-wow-delay="0.5s">引领数字商业 打造新人力</h2>
          <span class="wow fadeInUp animated" data-wow-delay="1s"></span>
          <p class="wow fadeInUp animated" data-wow-delay="1.5s">

          </p>
          <p>博尔捷企业集团创立于2003年，总部位于中国上海。目前，集团旗下拥有80多家分支机构，服务网络遍及260座大中城市，服务客户近万家企业，整体服务规模及实力均居行业前列，已成为中国科技型人力资源服务集团。</p>
          <p></p>
        </div>
      </div>

      <div class="clear"></div>
    </div>
    <div class="morebj"><a href="/aboutus" class="symore"></a></div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  .symain {
    padding: 0px 60px;

    .syabout {
      margin-top: -50px;
      position: relative;
      z-index: 99999;
      background-color: #fafafa;
    }
    .syaboutpic {
      width: 60%;
      position: relative;
      overflow: hidden;
    }
    .syaboutwen {
      position: relative;
      width: 40%;
    }
    .syabouttxt {
      padding: 10%;
      h2 {
        font-size: 28px;
        letter-spacing: 1px;
      }
      span {
        display: block;
        width: 30px;
        height: 4px;
        background-color: #b22f6f;
        margin: 10px 0px;
      }
      p {
        color: #666;
        margin-top: 8%;
        line-height: 1.8;
      }
    }
  }
</style>
