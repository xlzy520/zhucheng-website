<template>
  <div class="contact-us-card">
    <link-card v-for="item in list" :key="item.title" :item="item" class="lz-row-m"></link-card>
  </div>
</template>

<script>
  import linkCard from "./linkCard";
export default {
  name: 'ContactUsCard',
  components: {
    linkCard,
  },
  data() {
    return {
      list: [
        {
          title: '宁波竹成信息科技（集团）有限公司',
          address: '宁波市江北区洪塘街道长兴路与慈孝大道交叉口北400米路西前洋E商小镇1号楼512室',
          phone: '15957864887(李先生）',
          email: 'zcyunying@zc-corp.cn',
          url: '1'
        },
        // {title: '竹成集团（杭州）分公司',
        //   address: '浙江省杭州市XXXQ区XXX路XXX号',
        //   phone: '0574-888888888',
        //   email: 'XXXXXX@zc-corp.cn', url: '2' },
        {
          title: '宁波竹成信息科技（集团）有限公司-上海分公司',
          address: '上海市闵行区吴中路1439号莱茵虹景中心A座1002',
          phone: '15036086531(左先生）',
          email: 'zcyunying@zc-corp.cn',
          url: '2'
        },
      ],
    }
  }
}
</script>

<style lang="less" scoped>

</style>
