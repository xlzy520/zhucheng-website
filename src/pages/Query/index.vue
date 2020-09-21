<template>
  <div class="query">
    <div class="header flex-column">
      <img src="" alt="" class="logo">
      <div class="desc">{{desc}}</div>
    </div>
    <div class="content">
      <div class="search df">
        <el-input placeholder="服务公司直接输入公司名称，员工请输入姓名+工号（李某某 008）"
                  v-model="keyword">
          <div slot="suffix" class="search-btn">
            <div class="btn" @click="query">
              <span>搜索</span>
            </div>

          </div>
        </el-input>
      </div>
      <div class="result">
        <el-table :data="list" v-show="list.length">
          <el-table-column prop="id"></el-table-column>
        </el-table>
        <div v-show="!list.length" class="empty">
          未能查询到您需要的结果，请重新输入
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import service from "@/api/service";
export default {
  name: 'index',
  data() {
    return {
      desc: '服务公司  竹成员工，一键验真假',
      keyword: '',
      list: [],
      loading: false
    }
  },
  methods: {
    query() {
      this.loading = true
      service.getList({key: this.keyword}).then(res => {
        this.list = res || []
      }).finally(() => {
        this.loading = false
      })
    }
  },
}
</script>

<style lang="less" scoped>
  @import "@/styles/var.less";
  .query{
    text-align: center;
    margin-top: 60px;
    padding: 100px;
    margin: auto;
    background: #F7FAFC;
    .header{
      .logo{
        width: 300px;
        height: 410px;
        margin: auto;
      }
      .desc{
        font-size: 24px;
        font-weight: 500;
        color: #9A9A9A;
        line-height: 32px;
        margin-top: 36px;
        margin-bottom: 50px;

      }
    }
    .content{
      width: 1068px;
      margin: auto;
      /deep/ .search{
        /*border: 1px solid #D9D9D9;*/
        display: flex;
        margin-bottom: 17px;
        input{
          height: 60px;
          line-height: 60px;
        }
        .search-btn{
          background: #5AA672;
          font-size: 18px;
          color: #fff;
          line-height: 48px;
          margin-top: 6px;
          margin-right: 10px;
        }
      }
      .result{

      }
      .empty{
        color: #ff0001;
        font-size: 16px;
        line-height: 32px;
        text-align: left;
      }
    }
    .btn{
      cursor: pointer;
      width: 104px;
      height: 48px;
      background: #5AA672;
      span{
        width: 34px;
        height: 17px;
        font-size: 18px;
        font-family: PingFang SC;
        font-weight: 500;
        color: #FFFEFE;
        line-height: 32px;
      }
    }
  }
</style>
