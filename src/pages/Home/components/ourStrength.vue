<template>
  <div class="df flex-column-xs our-strength lz-row">
    <div class="left">
      <lz-badge title="业务版图" title_en="BUSINESS MAP" black/>
      <div class="content">
        <div class="content-extra">竹成人脚踏实地、日复一日，立足浙江，辐射全国</div>
        <div class="item" v-for="(item, index) in list" :key="item.text">
          <img :src="item.url"/>
          <span class="desc">{{item.text}}</span>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="right-desc animated fadeIn" v-show="hover">
        <div class="right-desc-item" v-for="item in descs" :key="item.title">
          <div class="title">{{item.title}}</div>
          <div class="address">
            <img class="icon" src="assets/icons/address.png" />
            <span>{{item.address}}</span>
          </div>
          <div class="phone">
            <img class="icon" src="assets/icons/phone.png" />
            <span>{{item.phone}}</span>
          </div>
        </div>
      </div>
      <img src="assets/icons/strength/map.png" alt="我们的实力">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ourStrength',
  data() {
    return {
      list: [
        {text: '全国395+直营服务网点', url: 'assets/icons/strength/1-green.png'},
        {text: '全国14家省级分公司', url: 'assets/icons/strength/2-green.png'},
        {text: '10万+全职城市服务力', url: 'assets/icons/strength/3-green.png'},
        {text: '400+TOP客户信赖', url: 'assets/icons/strength/4-green.png'},
      ],
      descs: [
        {
          title: '宁波竹成信息科技（集团）有限公司',
          address: '宁波市江北区洪塘街道长兴路与慈孝大道交叉口北400米路西前洋E商小镇1号楼512室',
          phone: '15036086531(左先生）'
        },
        // {title: '竹成集团（杭州）分公司', address: '浙江省杭州市XXXQ区XXX路XXX号', phone: '0574-888888888'},
        {
          title: '宁波竹成信息科技（集团）有限公司-上海分公司',
          address: '上海市闵行区吴中路1439号莱茵虹景中心A座1002',
          phone: '15036086531(左先生）'
        },
      ],
      hover: false
    }
  }
}
</script>

<style lang="less" scoped>
.our-strength{
  background: #fff;
  padding: 10px 0;
  .left{
    padding: 48px 0 0 0;
    /*width: calc(100% - 791px);*/
    .content{
      margin-top: 29px;
      margin-left: 25px;
    }
    .content-extra{
      font-size: 18px;
      font-weight: bold;
      color: #343434;
      margin-bottom: 27px;
    }
    .item{
      display: flex;
      align-items: center;
      margin-bottom: 43px;
      cursor: pointer;
      .desc{
        margin-left: 25px;
        font-size: 16px;
        font-weight: 500;
        color: #343434;
      }
    }
  }
  .right{
    margin-left: 246px;
    display: flex;
    align-items: center;
  }
  .right-desc{
    height: 472px;
    position: absolute;
    background: rgba(90, 165, 114, .92);
    opacity: 0.92;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    padding: 56px 0 51px 151px;
    box-sizing: border-box;
    z-index: 333;
    animation-duration: 0.5s;
    &-item{
      margin-bottom: 36px;
    }
    .icon{
      width: 13px;
      height: 16px;
      margin-right: 15px;
    }
    .title{
      height: 17px;
      font-size: 18px;
      margin-bottom: 25px;
    }
    .address{
      margin-bottom: 17px;
      height: 16px;
    }
    .phone{
      height: 13px;
      img{
        height: 17px;
      }
    }
  }
}
@media (max-width: 1600px) {
.our-strength{
  .right{
    margin-left: 120px;
  }
  .right-desc{
    padding-left: 80px;
  }
}
}
/*@media (max-width: 768px) {*/
/*  .our-strength{*/
/*    flex-wrap: wrap;*/
/*    .right{*/
/*      margin-left: 0;*/
/*    }*/
/*  }*/
/*}*/
</style>
