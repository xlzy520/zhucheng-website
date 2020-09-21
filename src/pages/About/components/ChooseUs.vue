<template>
  <div class="choose-us">
    <div class="header">
      <lz-badge title="选择我们" title_en="CHOOSE US" />
    </div>
    <div class="content">
      <image-card v-for="item in imgs" :url="item.url" :key="item.url" :title="item.title" :desc="item.desc"/>
    </div>
  </div>
</template>

<script>
  import ImageCard from "@/pages/About/components/ImageCard";
export default {
  name: 'ChooseUs',
  components: {
    ImageCard,
  },
  data() {
    return {
      imgs: [
        { url: '1', title: '转移风险', desc: '风险转移分为试用期风险转移和用工期间风险转移或劳动终止合同风险' },
        { url: '2', title: '节约用工成本', desc: '让企业把钱花到刀刃上，为企业降本增效' },
        { url: '3', title: '减少管理成本', desc: '为企业减少招聘费用，工资核算成本，综合节省HR管理成本'},
        { url: '4', title: '减少劳务纠纷', desc: '劳务派遣公司直接和员工签合同，用人单位可以有效的不存在劳务纠纷' },
        { url: '5', title: '优惠政策利用', desc: '当地就业人员根据政府的福利政策分别安置员工就业问题' },
        { url: '6', title: '减少突发事件风险', desc: '解决了企业在劳动合同终止方面产生的风险和成本' },
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.choose-us{
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
