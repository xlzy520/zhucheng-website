<template>
  <div class="culture lz-row">
    <div class="header">
      <lz-badge title="企业文化" title_en="CORPORATE CULTURE" />
    </div>
    <div class="content">
      <image-card v-for="item in imgs" :url="item.url" :key="item.url" :title="item.title" :desc="item.desc"/>
    </div>
  </div>
</template>

<script>
  import ImageCard from "@/pages/About/components/ImageCardCenter";
export default {
  name: 'ChooseUs',
  components: {
    ImageCard,
  },
  data() {
    return {
      imgs: [
        { url: '1', title: '使命', desc: '让商业更简单，让幸福更简单' },
        { url: '2', title: '愿景', desc: '成为城市服务外包第一品牌' },
        { url: '3', title: '价值观', desc: '心存正念，善思笃行，潜长共生，诚者竹成'},
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.culture{
  padding: 10px 0 111px 260px;
  color: #fff;
  margin-top: 100px;
  .header{

  }
  .content{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 30px;
    .card-icon{
      width: 39px;
      height: 62px;
      margin-bottom: 25px;
    }
    /deep/ .img-card{
      max-width: 419px;
      width: 30%;
      margin-right: 0;
    }
  }
  /*@media (max-width: 768px) {*/
  /*  .content{*/
  /*    justify-content: center;*/
  /*    /deep/ .img-card{*/
  /*      width: auto;*/
  /*    }*/
  /*  }*/
  /*}*/
}

</style>
