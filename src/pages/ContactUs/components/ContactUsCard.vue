<template>
  <div class="contact-us-card">
    <link-card v-for="item in list" :key="item.title" :item="item"></link-card>
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
          title: '竹成集团（宁波）总公司', address: '浙江省宁波市江北区前洋E商小镇1幢1号楼512',
          phone: '0574-888888888', email: 'XXXXXX@zc-corp.cn', url: '1'
        },
        {title: '竹成集团（杭州）分公司', address: '浙江省杭州市XXXQ区XXX路XXX号', phone: '0574-888888888',
          email: 'XXXXXX@zc-corp.cn', url: '2' },
        {title: '竹成集团（上海）分公司', address: '上海市XXXQ区XXX路XXX号', phone: '0574-888888888',
          email: 'XXXXXX@zc-corp.cn', url: '3'},
      ],
    }
  }
}
</script>

<style lang="less" scoped>

</style>
