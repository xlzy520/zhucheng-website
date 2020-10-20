<template>
  <div class="contact-us-form-card flex-column lz-row">
    <div class="contact-us-form">
      <lz-badge title="联系我们" title_en="CONTACT US" />
      <div class="content">
        <div class="left flex-column">
          <el-input placeholder="您的称呼" v-model="formData.name"/>
          <el-input placeholder="您的联系方式" v-model="formData.phone"/>
          <el-input placeholder="您在哪里" v-model="formData.address"/>
        </div>
        <div class="right">
          <el-input type="textarea" rows="4" placeholder="您的需求" v-model="formData.requirement"/>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="submit" @click="submit" v-loading="loading">提交</div>
    </div>
  </div>
</template>

<script>
  import service from "@/api/service";
export default {
  name: 'ContactUsForm',
  data() {
    return {
      formData: {
        name: '',
        phone: '',
        address: '',
        requirement: ''
      },
      loading: false
    }
  },
  methods: {
    check(){
      let allTrue = true
      for (const item in this.formData) {
        if (!this.formData[item]) {
          this.$message.warning('请检查必填项')
          allTrue = false
          break;
        }
      }
      return allTrue
    },
    submit() {
      let isTrue = this.check();
      if (isTrue) {
        this.loading = true
        service.addFeedback(this.formData).then(res => {
          this.$message.success('提交成功')
          this.clear()
        }).finally(() => {
          this.loading = false
        })
      }

    },
    clear(){
      this.formData = {
        name: '',
        phone: '',
        address: '',
        requirement: ''
      }
    }
  },
}
</script>

<style lang="less" scoped>
.contact-us-form-card{
  margin-top: 50px;
  padding: 125px 175px 95px;
  background-image: url("~assets/image/contact_us_form_bg.png");
  .contact-us-form{
    display: flex;
  }
  /deep/ .lz-badge {
    .lz-badge-header, .lz-badge-footer{
      color: #F7FAFC;
    }
  }
  /deep/.left{
    .el-input, input{
      color: #fff;
      width: 304px;
      height: 40px;
      margin-bottom: 6px;
      background-color: inherit;

    }
  }
  /deep/.right{
    margin-left: 14px;
    .el-textarea, textarea{
      color: #fff;
      width: 667px;
      height: 132px;
      background-color: inherit;
    }

  }
  .content{
    margin-left: 137px;
    display: flex;
  }
  /deep/.footer{
    padding-top: 30px;
    text-align: center;
    .submit{
      display: inline-block;
      background: #5aa572;
      font-size: 18px;
      font-weight: 500;
      color: #F7FAFC;
      padding: 14px 93px;
      cursor: pointer;
      &.el-loading-parent--relative{
        pointer-events: none;
        cursor: not-allowed;
      }
    }
    .el-loading-mask{
      /*background-color: rgba(227, 229, 228, 0.5);*/
    }
    .el-loading-spinner .path{
      stroke: #5AA572;
    }
  }
}
</style>
