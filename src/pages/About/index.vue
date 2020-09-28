<template>
	<div class="about">
    <PicAndBreadcrumb :data="data"/>

    <div class="about-bg" v-if="false">
      <div class="bg-desc">
        <div class="title">走进竹成</div>
        <div class="slogan">你们的信任</div>
        <div class="slogan">都是我们前进的最大动力</div>
        <div class="lz"></div>
      </div>
      <div class="about-breadcrumb">
        <img src="assets/icons/address.png" class="icon" />
        <span class="content">首页>关于我们</span>
      </div>
      <img src="assets/image/about.png" alt="">
    </div>
    <el-row>
      <el-col :xs="24">
        <AboutUsCard />
      </el-col>
    </el-row>
    <el-row style="margin-top: 150px">
      <el-col :xs="24">
        <our-strength />
      </el-col>
    </el-row>
    <el-row>
      <el-col :xs="24">
        <choose-us />
      </el-col>
    </el-row>

	</div>
</template>

<script>
  import ourStrength from "@/pages/Home/components/ourStrength";
  import AboutUsCard from "@/components/AboutUsCard";
  import ChooseUs from "@/pages/About/components/ChooseUs";
  import service from "@/api/service";
  import PicAndBreadcrumb from "@/components/PicAndBreadcrumb";
	export default {
    components: {
      ourStrength,
      AboutUsCard,
      ChooseUs,
      PicAndBreadcrumb
    },
		data() {
			return {
			  bgUrl: '',
        data: {
          title: '走进竹成', slogan: ['你们的信任', '都是我们前进的最大动力'],
          img: 'assets/image/contact_us_bg.png', content: '首页>关于我们'
        },
			};
		},
    methods: {
      getBg() {
        service.getSchemeImgList({
          pageNo: 1,
          pageSize: 100,
          orderByClause: 'id desc',
          imgType: 2
        }).then(res => {
          if (res.list && res.list.length) {
            this.data.img = res.list[0].imgurl
          }
        })
      }
    },
    created(){
      this.getBg()
    }
	}

</script>

<style lang="less" scoped>
  .about{
    .about-bg{
      font-family: Microsoft YaHei;
      color: #fff;
      img{
        width: 100%;
      }
    }
    .bg-desc{
      position: absolute;
      display: flex;
      flex-direction: column;
      left: 175px;
      bottom: 218px;
      .title{
        font-size: 24px;
        margin-bottom: 38px;
      }
      .slogan{
        font-size: 36px;
        margin-bottom: 25px;
      }
      .lz{
        margin-top: 25px;
        width: 44px;
        height: 1px;
        background: #fff;
      }
    }
    .about-breadcrumb{
      position: absolute;
      right: 176px;
      bottom: 219px;
      display: flex;
      font-size: 16px;
      .icon{
        width: 14px;
        height: 18px;
        margin-right: 10px;
      }
    }
  }
</style>
