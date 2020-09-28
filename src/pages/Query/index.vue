<template>
  <div class="query">
    <div class="header flex-column">
      <img src="assets/image/query-bg.png" alt="" class="logo">
      <div class="desc">{{desc}}</div>
    </div>
    <div class="content">
      <div class="search df">
        <el-input placeholder="服务公司直接输入公司名称，员工请输入姓名+工号（李某某 008）"
                  v-model="keyword">
          <div slot="suffix" class="search-btn">
            <div class="btn" @click="query" v-loading="loading">
              <span>搜索</span>
            </div>

          </div>
        </el-input>
      </div>
      <div v-if="hasResult && type ==='company'" class="result">
        <div class="result-table">
          <div class="result-table-header">
            <div>信息项</div>
            <div>信息内容</div>
          </div>
          <div class="result-table-content">
            <div class="result-table-row" v-for="item in list" :key="item.name">
              <div>{{item.name}}</div>
              <div>{{companyInfo[item.value]}}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="hasResult && type ==='staff'" class="result">
        <div class="result-table staff">
          <div class="result-table-header">人员信息</div>
          <div class="df">
            <div class="left">
              <img :src="staffInfo.imgurl" />
            </div>
            <div class="right flex-column">
              <span>员工姓名：{{staffInfo.name}}</span>
              <span>工号：{{staffInfo.num}}</span>
              <span>所在机构：{{staffInfo.area}}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-show="!list.length" class="empty">
        未能查询到您需要的结果，请重新输入
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
      list: [
        { name: '洼地公司名称', value: 'companyName' },
        { name: '营业地址', value: 'address' },
        { name: '企业信用代码', value: 'num' },
        { name: '法定代表人', value: 'legalRepresentative' },
      ],
      loading: false,
      type: 'staff',
      staffInfo: {
        name: '廖某某',
        num: 'ZC888',
        area: '宁波总部',
        imgurl: ''
      },
      companyInfo: {},
      hasResult: false,
      queryType: ''
    }
  },
  methods: {
    isEmployee(){
      const key = this.keyword.replace(/\s+/, '')
      const match = key.match(/([\u4e00-\u9fa5]*)(\d*)/)
      const name = match[1]
      const num = match[2]
      return {
        name,
        num
      };
    },
    query() {
      if (!this.keyword) {
        this.$message.info('请输入查询内容')
        return;
      }
      this.loading = true
      const queryData = this.isEmployee()
      console.log(queryData);
      const myService = queryData.num ? service.getEmployeeList : service.getCompanyList
      this.type = queryData.num ? 'staff': 'company'
      const data = queryData.num ? queryData : { companyName: this.keyword }
      myService({
        pageNo:1,
        pageSize: 10,
        orderByClause: 'id desc',
        ...data
      }).then(res => {
        this.hasResult = res.list.length
        if (this.type === 'company') {
          this.companyInfo = res.list[0] || {}
        } else {
          this.staffInfo = res.list[0]
        }
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
        .el-loading-parent--relative{
          pointer-events: none;
          cursor: not-allowed;
        }
        .el-loading-spinner .path{
          stroke: #5AA572;
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
        margin-top: 58px;
        &-table{
          width: 498px;
          background: #fff;
          margin: auto;
          padding: 33px 50px 28px;
          font-weight: 500;
          line-height: 32px;
          color: #333333;
          box-sizing: border-box;
          &-header{
            display: flex;
            font-size: 16px;
            border-bottom: 1px solid #efefef;
            padding-bottom: 22px;
            margin-bottom: 22px;
          }
          &-row{
            font-size: 14px;
            margin-bottom: 20px;
          }
          &-header, &-row{
            display: flex;
            div:nth-child(1){
              flex: 0 0 200px;
              min-width: 0;
              display: flex;
              align-items: center;
            }
            div:nth-child(2){
              flex: 1 1 200px;
              text-align: left;
            }

          }
          &-content{

          }
          &.staff{
            width: 370px;
            font-size: 18px;
            .left{
              width: 120px;
              height: 120px;
            }
            .right{
              font-size: 14px;
              margin-left: 20px;
              padding-top: 11px;
              span{
                margin-bottom: 30px;
                text-align: left;
                line-height: 14px;
                &:last-child{
                  margin-bottom: 0;
                }
              }
            }
          }
        }


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
