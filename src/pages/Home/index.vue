<template>
	<div class="hello">
    <el-row>
      <el-col :xs="24">
        <Swiper :banners="banners" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24">
        <AboutUsCard />
      </el-col>
    </el-row>
    <our-service />
    <our-strength />
    <partner />
    <news :news="news" :news1="news1" />
	</div>
</template>

<script>
  import Swiper from '@/components/swiper'
  import AboutUsCard from '@/components/AboutUsCard'
  import ourService from "./components/ourService";
  import ourStrength from "./components/ourStrength";
  import news from "./components/news";
  import service from "@/api/service";
  import Partner from "@/pages/Home/components/partner";
	export default {
    components: {
      Partner,
      Swiper,
      AboutUsCard,
      ourService,
      ourStrength,
      news
    },
		data() {
			return {
			  banners: [],
        news: [],
        news1: [],
			}
		},
		methods: {
      getBanners(){
        service.getImgs({
          pageNo: 1,
          pageSize: 100,
          orderByClause: 'id desc',
          imgType: 1
        }).then(res => {
          this.banners = res.list || []
        })
      },
      getNews1(){
        service.getNewsList({
          pageNo: 1,
          pageSize: 5,
          orderByClause: 'id desc',
          type: 1
        }).then(res => {
          this.news = res.list || []
        })
      },
      getNews2(){
        service.getNewsList({
          pageNo: 1,
          pageSize: 5,
          orderByClause: 'id desc',
          type: 2
        }).then(res => {
          this.news1 = res.list || []
        })
      }

    },
    mounted() {
      this.getBanners();
      this.getNews1();
      this.getNews2();
    },
  }


</script>

<style lang="less" scoped>
  .last{
    margin-bottom: 110px;
  }

</style>
