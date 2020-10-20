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
    <news :news="news" />
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
        news: []
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
          res.list[0].imgurl = '/assets/image/index_bg.png'
          this.banners = res.list || []
        })
      },
      getNews(){
        service.getNewsList({
          pageNo: 1,
          pageSize: 10,
          orderByClause: 'id desc',
          type: 1
        }).then(res => {
          this.news = res.list || []
        })
      }
    },
    mounted() {
      this.getBanners();
      this.getNews();
    },
  }


</script>

<style lang="less" scoped>
  .last{
    margin-bottom: 110px;
  }

</style>
