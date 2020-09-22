<template>
  <div class="about">
    <PicAndBreadcrumb :data="data"/>
    <el-row>
      <el-col :xs="24">
        <ContactUsCard />
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ContactUsCard from "./components/ContactUsCard";
  import PicAndBreadcrumb from "@/components/PicAndBreadcrumb";
  export default {
    components: {
      ContactUsCard,
      PicAndBreadcrumb
    },
    data() {
      return {
        data: {
          title: '联系我们', slogan: ['竹成集团    想你所想'],
          img: 'assets/image/contact_us_bg.png', content: '首页>联系我们'
        }
      };
    },

  }

</script>

<style lang="less" scoped>
  .about{

  }
</style>
