<template>
  <div class="our-services lz-row">
    <div class="header">
      <lz-badge title="集团业务" title_en="GROUP BUSINESS" />
    </div>
    <div class="content">
      <OurServicesCard v-for="(item,index) in list" :key="item.id" :title="item.title"
                       :desc="item.desc" :img="item.img" @click.native="handleClick(index)" />
    </div>

  </div>
</template>

<script>
  import LzBadge from "@/components/LzBadge";
  import OurServicesCard from "./Card";
export default {
  name: 'ourService',
  components: {
    LzBadge,
    OurServicesCard
  },
  data() {
    return {
      list: [
        {title: '产业园运营', desc: '产业园招商、产业园投资、产业园区托管...', img: '3'},
        {title: '税务筹划', desc: '通过多种纳税方案对企业进行量优化的选择...', img: '4'},
        {title: '人力资源服务', desc: '招聘外包、薪酬外包、商业保险、灵活用工...', img: '2'},

        {title: '即时物流', desc: '同城跑腿、平台配送、商超配送、连锁餐饮配送...', img: '1'},
        {title: '竹成资本', desc: '即时物流产业资金、竹成天使创投资金...', img: '5'},
      ]
    }
  },
  methods: {
    handleClick(index) {
      this.$router.push('/solution?tab='+index)
    }
  },
}
</script>

<style lang="less" scoped>
.our-services{
  padding: 10px 260px 111px;
  color: #fff;
  margin-top: 100px;
  background-image: url("~assets/image/ourService_bg.png");
  .header{

  }
  .content{
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: space-between;
  }
  @media (max-width: 1441px) {
    .content{
      /*justify-content: space-between;*/
    }
  }
  @media (max-width: 768px) {
    .content{
      justify-content: center;
    }
  }
}
</style>
