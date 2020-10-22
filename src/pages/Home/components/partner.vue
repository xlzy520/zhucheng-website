<template>
  <div class="partner lz-row">
    <div class="header">
      <lz-badge title="合作伙伴" title_en="COOPERATIVE PARTNER"/>
    </div>
    <div class="content">
      <div v-for="item in 20" :key="item.id"  class="who-using">
        <img :src="'/assets/image/partner/'+item+'.png'" width="251" height="77" />
      </div>
    </div>

  </div>
</template>

<script>
  import LzBadge from "@/components/LzBadge";

  export default {
    name: 'partner',
    components: {
      LzBadge,
    },
    data() {
      return {
        list: [

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
  .partner {
    padding: 10px 260px 0;
    color: #fff;
    margin-top: 40px;
    margin-bottom: 30px;
    display: flex;
    flex-wrap: wrap;
    .header {

    }
    .who-using{
      display: flex;
      width: 251px;
      height: 77px;
      margin: 0 25px 20px 0;
      justify-content: center;
      align-items: center;
    }

    .content {
      display: flex;
      flex-wrap: wrap;
      margin-top: 30px;
      justify-content: space-between;

      .card-icon {

      }
    }
  }
  @media (max-width: 1919px) {
    .partner {
      padding: 10px 130px 50px;
    }
  }
  @media (max-width: 960px) {
    .partner {
      .content{
        justify-content: space-around;
      }
      .who-using{
        margin-right: 0;
      }
    }
  }
</style>
