<template>
  <div class="our-services">
    <div class="header">
      <lz-badge title="我们的服务" title_en="OUR SERVICES" />
    </div>
    <div class="content">
      <OurServicesCard v-for="item in list" :key="item.id" :title="item.title" :desc="item.desc"
      @click.native="handleClick(item)">
        <template slot="icon">
          <img class="card-icon" src="assets/icons/jisuwuliu.png" />
        </template>
      </OurServicesCard>
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
        {title: '即时物流', desc: '同城跑腿、平台配送、商超配送、连锁餐饮配送...'},
        {title: '人力资源服务', desc: '招聘外包、薪酬外包、商业保险、灵活用工...'},
        {title: '产业园运营', desc: '产业园招商、产业园投资、产业园区托管...'},
        {title: '税务筹划', desc: '通过多种纳税方案对企业进行量优化的选择...'},
        {title: '竹成资本', desc: '即时物流产业资金、竹成天使创投资金...'},
      ]
    }
  },
  methods: {
    handleClick(item) {
      console.log(item);
    }
  },
}
</script>

<style lang="less" scoped>
.our-services{
  padding: 10px 131px 111px;
  color: #fff;
  margin-top: 100px;
  .header{

  }
  .content{
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    .card-icon{
      width: 39px;
      height: 62px;
      margin-bottom: 25px;
    }
  }
}
</style>
