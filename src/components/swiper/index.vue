<template>
  <div class="banner">
    <Swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="banner in banners" :key="banner.imgurl">
        <div :style="getImageStyleText(banner.imgurl)" class="bannerbj"></div>
      </swiper-slide>
      <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </Swiper>
  </div>
</template>

<script>
  import service from "@/api/service";
  export default {
    name: 'swiper',
    props: {
      banners: {
        type: Array,
        required: true,
        default: ()=> ([
          {
            imgurl: './assets/image/banner.png',
          },
          {
            imgurl: 'http://www.bridgehr.com/template/default/images/banner05.jpg',
          },
          {
            imgurl: 'http://www.bridgehr.com/template/default/images/banner06.jpg',
          },
          {
            imgurl: 'http://www.bridgehr.com/template/default/images/banner04.jpg',
          },
        ])
      },
    },
    data() {
      return {
        swiperOption: {
          // spaceBetween: 30,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 250000,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet(index, className) {
              return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
            }
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      }
    },
    methods: {
      getImageStyleText(url) {
        return `background-image: url(${url})`
      },
    },
    mounted() {
    },
  }
</script>

<style lang="less" scoped>
  .swiper {
    width: 100%;
    height: calc(100vh + 60px);
    margin-left: auto;
    margin-right: auto;

    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      font-size: 14px;
      background-color: #fff;
    }
    .swiper-button-prev, .swiper-button-next{
      width: 60px;
      height: 60px;
      transition: all .4s ease;
      border-radius: 100%;
      background: rgba(178,47,111,0);
      margin-top: -40px;

      &:after{
        content: "";
        position: absolute;
        left: -10%;
        top: 0px;
        width: 100%;
        height: 100%;
        background-size: 15px auto;
        transition: all .4s ease;
      }

      &:hover{
        background: rgba(178,47,111,1);
        transform: scale(1.1);
      }
    }
    .swiper-button-prev{
      &::after{
        background: url(/assets/icons/bannerbtn_left.png) no-repeat center center;
      }
    }
    .swiper-button-next{
      &::after{
        content: "";
        background: url(/assets/icons/bannerbtn_right.png) no-repeat center center;
      }
    }
    .bannerbj {
      transition: all .4s ease;
      opacity: 0;
    }
    .bannerbj {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    /deep/ .swiper-pagination-bullet{
      background: none;
      opacity: 1;
      color: #fff;
      font-family: 'bebas';
      margin: 0;
      width: 40px;
      height: 40px;
      line-height: 40px;
      &:hover{
        background: #007aff;
        color: #fff;
      }
    }
    /deep/ .swiper-pagination-bullet-active {
      color: #b22f6f;
    }
    .swiper-slide-active .bannerbj {
      transform: scale(1.1, 1.1);
      opacity: 1;
      transition: transform 7000ms ease;
    }
  }
</style>
