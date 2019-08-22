<template>
  <div class="login_container">
    <div class="login_top">
      <div class="login_top_title">
        <img src="../../assets/img/logo_mini2.png" alt />
        <h1 class="text-bank ml-3">银行</h1>
      </div>
    </div>
    <div class="login_middle">
      <img
        src="../../assets/img/login.png"
        alt
        class="ab-center"
        style="left:35%;width:47%;height:55%;"
      />
      <div class="login_info">
        <el-form
          class="demo-ruleForm"
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          @keyup.enter.native="userLogin"
        >
          <h1 class="text-center text-white">登 录</h1>
          <el-form-item prop="user" class="mt-4">
            <el-input
              type="text"
              v-model="ruleForm.user"
              autocomplete="off"
              placeholder="请输入账号"
              prefix-icon="el-icon-user-solid"
            ></el-input>
          </el-form-item>
          <el-form-item prop="pass" class="mt-4">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
              placeholder="请输入密码"
              prefix-icon="el-icon-lock"
            ></el-input>
          </el-form-item>
          <el-button style="width:100%" type="primary" @click.native.prevent="userLogin">登录</el-button>
        </el-form>
      </div>
    </div>
    <div class="login_footer">
      <p class="text-center">
        Copyright©2016-2019&nbsp;&nbsp;|&nbsp;&nbsp;江苏多飞网络科技有限公司版权所有&nbsp;&nbsp;|&nbsp;&nbsp;苏ICP备16054762号-1&nbsp;&nbsp;|&nbsp;&nbsp;联系我们:&nbsp;&nbsp;400
        -928-5918
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    //用户名验证
    var validateUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      } else {
        callback();
      }
    };
    //密码名验证
    var validatePass = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };

    return {
      ruleForm: {
        user: "",
        pass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        user: [{ validator: validateUser, trigger: "blur" }]
      }
    };
  },
  methods: {
    userLogin() {
      if (this.ruleForm.user == "admin" && this.ruleForm.pass == "123") {
        this.$router.push({ name: "Home" });
      } else if (!this.ruleForm.user && !this.ruleForm.pass) {
        this.$message.error("账号密码不能为空");
      } else {
        this.$message.error("账号或密码错误");
      }
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
  background-color: #009882;
  .login_info {
    width: 20%;
    position: absolute;
    top: 45%;
    right: 15%;
    transform: translateY(-50%);
    z-index: 10;
  }
}
.login_top {
  height: 150px;
  .login_top_title {
    line-height: 150px;
    margin-left: 10%;
    display: flex;
    align-items: center;
  }
}
.login_footer {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
