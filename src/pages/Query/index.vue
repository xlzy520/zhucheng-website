<template>
  <div class="query" :style="style">
<!--    <PicAndBreadcrumb :data="data"/>-->
    <div class="header flex-column">
      <div class="desc">{{desc}}</div>
    </div>
    <div class="content">
      <div class="search df">
        <el-input placeholder="集团机构查询请输入工商注册全称 ；集团员工身份查询请输入姓名+工号"
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
          <div class="result-header">
            <img src="/assets/image/zc-logo.png" alt="">

<!--            <div class="result-header-logo"></div>-->
            <div class="result-header-right">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>
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
          <div class="result-header">
            <img src="/assets/image/zc-logo.png" alt="">

            <!--            <div class="result-header-logo"></div>-->
            <div class="result-header-right">
              <div class="circle"></div>
              <div class="circle"></div>
              <div class="circle"></div>
            </div>
          </div>
          <div class="result-table-header">人员信息</div>
          <div class="df">
            <div class="left">
              <img :src="staffInfo.imgurl"/>
            </div>
            <div class="right flex-column">
              <span>员工姓名：{{staffInfo.name}}</span>
              <span>工号：{{staffInfo.num}}</span>
              <span>所在机构：{{staffInfo.area}}</span>
            </div>
          </div>
        </div>
      </div>
      <div v-show="!hasResult && hasQuery" class="empty">
        未能查询到您需要的结果，请重新输入
      </div>
    </div>
  </div>
</template>

<script>
  import service from "@/api/service";
  import PicAndBreadcrumb from "@/components/PicAndBreadcrumb";

  export default {
    name: 'index',
    components: {
      PicAndBreadcrumb
    },
    computed: {
      style() {
        return {
          background: `url(${this.data.img})`,
          backgroundSize: window.innerWidth+'px',
          height: 1320*(window.innerWidth / 1920) +'px'
        }

      }
    },
    data() {
      return {
        data: {
          title: '解决方案', slogan: ['精益求精    合作共赢'],
          img: 'assets/image/query_bg.png', content: '首页>解决方案',
          useStyle: true
        },
        desc: '集团机构信息验证   集团员工身份查询',
        keyword: '',
        list: [
          {name: '服务商', value: 'companyName'},
          {name: '营业地址', value: 'address'},
          {name: '企业信用代码', value: 'num'},
          {name: '法定代表人', value: 'legalRepresentative'},
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
        queryType: '',
        hasQuery: false
      }
    },
    methods: {
      isEmployee() {
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
        const myService = queryData.num ? service.getEmployeeList : service.getCompanyList
        this.type = queryData.num ? 'staff' : 'company'
        const data = queryData.num ? queryData : {companyName: this.keyword}
        myService({
          pageNo: 1,
          pageSize: 10,
          orderByClause: 'id desc',
          ...data
        }).then(res => {
          this.hasQuery = true
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

  .query {
    text-align: center;
    margin-top: 60px;
    margin: auto;
    max-height: 1320px;
    background: #F7FAFC;

    .header {
      width: 100%;
      margin: auto;
      text-align: center;
      position: relative;
      top: 50%;
      .logo {
        height: 410px;
        margin: auto;
        &.children-img{
          position: relative;
          bottom: 400px;
        }
      }

      .desc {
        font-size: 24px;
        font-weight: 500;
        color: #fff;
        line-height: 32px;
        margin-top: 36px;
        margin-bottom: 50px;

      }
    }

    .content {
      position: relative;
      top: 48%;
      width: 55.6%;
      padding: 0 22%;
      margin: auto;

      /deep/ .search {
        /*border: 1px solid #D9D9D9;*/
        display: flex;
        margin-bottom: 17px;

        input {
          height: 60px;
          line-height: 60px;
          background: transparent;
          color: #fff;
        }

        .el-loading-parent--relative {
          pointer-events: none;
          cursor: not-allowed;
        }

        .el-loading-spinner .path {
          stroke: #5AA572;
        }

        .search-btn {
          background: #5AA672;
          font-size: 18px;
          color: #fff;
          line-height: 48px;
          margin-top: 6px;
          margin-right: 10px;
        }
      }

      .result {
        margin-top: 58px;

        &-header{
          padding: 5px 30px;
          height: 51px;
          line-height: 51px;
          background: #5AA572;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &-right{
            display: flex;
            align-items: center;

          }
          .circle{
            width: 16px;
            height: 16px;
            background: rgba(18, 99, 44, .5);
            border-radius: 50%;
            margin-left: 30px;
          }
        }

        &-table {
          width: 498px;
          background: #fff;
          margin: auto;
          font-weight: 500;
          line-height: 32px;
          color: #333333;
          box-sizing: border-box;

          &-header {
            padding: 20px 50px;
            display: flex;
            font-size: 16px;
            border-bottom: 1px solid #efefef;
            padding-bottom: 22px;
            margin-bottom: 22px;
          }

          &-row {
            font-size: 14px;
            margin-bottom: 20px;
          }

          &-header, &-row {
            display: flex;

            div:nth-child(1) {
              flex: 0 0 200px;
              min-width: 0;
              display: flex;
              align-items: center;
            }

            div:nth-child(2) {
              flex: 1 1 200px;
              text-align: left;
            }

          }

          &-content {
            padding: 10px 50px;

          }

          &.staff {
            width: 370px;
            font-size: 18px;

            .left {
              width: 120px;
              height: 120px;
            }

            .right {
              font-size: 14px;
              margin-left: 20px;
              padding-top: 11px;

              span {
                margin-bottom: 30px;
                text-align: left;
                line-height: 14px;

                &:last-child {
                  margin-bottom: 0;
                }
              }
            }
          }
        }


      }

      .empty {
        color: #ff0001;
        font-size: 16px;
        line-height: 32px;
        text-align: left;
      }
    }

    .btn {
      cursor: pointer;
      width: 104px;
      height: 48px;
      background: #5AA672;

      span {
        width: 34px;
        height: 17px;
        font-size: 18px;
        font-weight: 500;
        color: #FFFEFE;
        line-height: 32px;
      }
    }
  }
  @media (max-width: 1600px) {
    .query{
      .header{
        top: 45%;
      }
      .content{
        top: 43%;
        .result-header{
          height: 38px;
          line-height: 38px;
        }
        .result-table-header{
          padding: 10px 50px;
          margin-bottom: 11px;
        }
        .result-table-row{
          margin-bottom: 10px;
        }
      }
    }
  }
  @media (min-width: 2159px) {
    .query{
      .header{
        top: 55%;
      }
      .content{
        top: 56%;
        .result-table-row{
          margin-bottom: 5px;
        }
        .result-table.staff{
          width: 498px;
        }
        .result-table-header{
          padding: 10px 50px;
          margin-bottom: 0;
          /*text-align: center;*/
        }
        .df{
          padding: 20px 50px;
          justify-content: space-around;
        }
      }
    }
  }
  @media (min-width: 2400px) {
    .query{
      max-height: 1600px;
      .header{
        top: 60%;
      }
      .content{
        top: 60%;
      }
    }
  }


</style>
