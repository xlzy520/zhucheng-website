<template>
  <div class="solution">
    <PicAndBreadcrumb :data="data" />
    <NewsCard />
    <ContactUsForm />
  </div>
</template>

<script>
  import NewsCard from './components/SolutionContent'
  import ContactUsForm from './components/ContactUsForm'
  import PicAndBreadcrumb from "@/components/PicAndBreadcrumb";

  export default {
    name: 'index',
    components: {
      NewsCard,
      PicAndBreadcrumb,
      ContactUsForm
    },
    data() {
      return {
        data: {
          title: '解决方案', slogan: ['精益求精    合作共赢'],
          img: 'assets/image/contact_us_bg.png', content: '首页>解决方案'
        },
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
