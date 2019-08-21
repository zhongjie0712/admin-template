<template>
  <div class="login_container">
    <div class="login_top">
      <div class="login_top_title x-flex ai-center">
        <img src="../../assets/img/logo_mini2.png" alt />
        <h1 class="text-bank ml-3">中国农业银行湖南分行</h1>
      </div>
    </div>
    <div class="login_middle">
      <img
        src="../../assets/img/login.png"
        alt
        class="ab-center"
        style="left:35%;width:47%;height:55%;"
      />
      <el-form class="ab-center" style="top:45%;left:80%">
        <h1 class="text-center text-white">登 录</h1>
        <el-input class="mt-4" v-model="input" placeholder="请输入账号" prefix-icon="el-icon-user-solid"></el-input>
        <el-input class="mt-4" v-model="input" placeholder="请输入密码" prefix-icon="el-icon-lock"></el-input>
        <el-button
          class="mt-4"
          style="width:100%"
          type="primary"
          @click.native.prevent="userLogin"
        >登录</el-button>
      </el-form>
    </div>
    <div class="login_footer">333</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  },
  methods: {
    userLogin() {
      alert("登录");
    }
  }
};
</script>
<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: row-reverse;
}
.login_middle {
  height: calc(100vh - 300px);
  background-color: rgb(53, 181, 151);
}
.login_top {
  height: 150px;
  .login_top_title {
    line-height: 150px;
    margin-left: 10%;
  }
}
.login_footer {
  height: 150px;
}
</style>
