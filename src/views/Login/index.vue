<!-- 登录页面 -->
<template>
  <div class="login-block">
    <div class="login">
      <h2>登录</h2>
      <el-form :model="loginForm" :rules="rules" ref="form" class="login-Form">
        <el-form-item prop="account">
          <el-input
            v-model="loginForm.account"
            placeholder="Account"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="Password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
      <div class="register flex">
        <span class="forget">Forget Password</span>
        <span class="reg">Sign up</span>
      </div>
    </div>
  </div>
</template>

<script>
import { verifyLoginAPI } from "@/api/login";
export default {
  components: {},
  data() {
    return {
      loginForm: {
        account: "",
        password: "",
      },
      rules: {
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 4, max: 4, message: "请输入正确的账号", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    submitForm() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          const res = await verifyLoginAPI(this.loginForm);
          localStorage.setItem("token", res.token);
          if (res.code == 200) {
            this.$message.success("登录成功");
            setTimeout(() => {
              this.$router.push("/");
            }, 500);
          }
        } else {
          this.$message.error("请输入正确的账号");
        }
      });
      // console.log(this.$refs);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  updated() {}, //生命周期 - 更新之后
};
</script>
<style lang='scss' scoped>
.login-block {
  height: 100%;
  background: url("@/assets/image/bgc.jpeg");
  background-size: cover;
  .login {
    position: absolute;
    width: 480px;
    min-height: 300px;
    padding: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgb(255, 255, 255, 0.4);
    border-radius: 20px;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);

    h2 {
      color: #9f3242;
      font-size: 24px;
      font-weight: 600;
    }
    .login-Form {
      padding: 30px;
      padding-bottom: 0;
      // ::v-deep .el-form-item {
      //   margin-bottom: 30px;
      // }
      ::v-deep .el-form-item__content {
        margin-left: 0 !important;
      }
      ::v-deep .el-button {
        font-weight: 550;
        width: 100%;
        background-color: #f99f9c;
      }
      ::v-deep .el-form-item__error {
        color: red;
      }
    }
    .register {
      color: #9f3242;
      padding: 0 30px;
      justify-content: space-between;
      span {
        cursor: pointer;
      }
    }
  }
}
</style>