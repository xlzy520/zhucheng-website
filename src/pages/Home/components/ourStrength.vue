<template>
  <div class="df flex-column-xs our-strength">
    <div class="left">
      <lz-badge title="我们的实力" title_en="OUR STRENGTH"/>
      <div class="content" @mouseenter="hover = true" @mouseleave="hover = false">
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
            <img class="icon" src="@/assets/icons/address.png" />
            <span>{{item.address}}</span>
          </div>
          <div class="phone">
            <img class="icon" src="@/assets/icons/phone.png" />
            <span>{{item.phone}}</span>
          </div>
        </div>
      </div>
      <img src="../../../assets/icons/strength/map.png" alt="我们的实力">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ourStrength',
  data() {
    return {
      list: [
        {text: '全国200+直营服务网点', url: '../../../assets/icons/strength/1.png'},
        {text: '全国14家省级分公司', url: '../../../assets/icons/strength/2.png'},
        {text: '70000+全职城市服务力', url: '../../../assets/icons/strength/3.png'},
        {text: '400+TOP客户信赖', url: '../../../assets/icons/strength/4.png'},
      ],
      descs: [
        {title: '竹成集团（宁波）总公司', address: '浙江省宁波市江北区前洋E商小镇1幢1号楼512', phone: '0574-888888888'},
        {title: '竹成集团（杭州）分公司', address: '浙江省杭州市XXXQ区XXX路XXX号', phone: '0574-888888888'},
        {title: '竹成集团（上海）分公司', address: '上海市XXXQ区XXX路XXX号', phone: '0574-888888888'},
      ],
      hover: false
    }
  }
}
</script>

<style lang="less" scoped>
.our-strength{
  width: 100%;
  background: #fff;
  height: 376px;
  .left{
    padding: 48px 0 0 130px;
    width: calc(100% - 791px);
    .content{
      margin-top: 56px;
      margin-left: 25px;
    }
    .item{
      display: flex;
      align-items: center;
      margin-bottom: 25px;
      cursor: pointer;
      img{
        width: 20px;
        height: 20px;
      }
      .desc{
        font-size: 12px;
        font-weight: 500;
        color: #333;
        margin-left: 20px;
      }
    }
  }
  .right{

  }
  .right-desc{
    position: absolute;
    background: rgba(90, 165, 114, .92);
    opacity: 0.92;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    padding: 56px 0 51px 151px;
    box-sizing: border-box;
    z-index: 333;
    animation-duration: 0.5s;
    &-item{
      margin-bottom: 36px;
    }
    .icon{
      width: 10px;
      height: 12px;
      margin-right: 12px;
    }
    .title{
      height: 13px;
      font-size: 14px;
      margin-bottom: 19px;
    }
    .address{
      margin-bottom: 13px;
      height: 12px;
    }
    .phone{
      height: 10px;
    }
  }
  .right, .right img, .right-desc{
    width: 791px;
    height: 376px;
  }
}
</style>
