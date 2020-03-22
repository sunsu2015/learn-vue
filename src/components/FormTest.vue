<template>
  <div>
    <h3>{{title}}</h3>
    <el-form :model="ruleForm" :rules="rules" ref="loginForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="ruleForm.pwd"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">登录</el-button>
      </el-form-item>
    </el-form>

    <h3>KKB Form</h3>
    <k-form :model="ruleForm2" :rules="rules" ref="loginForm2">
      <div>
        <k-form-item label="用户名" prop="name">
          <k-input type="text" v-model="ruleForm2.name"></k-input>
        </k-form-item>
      </div>
      <k-form-item label="密码" prop="pwd">
        <div>
          <k-input type="password" v-model="ruleForm2.pwd"></k-input>
        </div>
      </k-form-item>
      <k-form-item>
        <el-button type="primary" @click="submitForm2()">登录</el-button>
      </k-form-item>
    </k-form>
    {{ruleForm2}}
  </div>
</template>

<script>
import KForm from "./Form";
import KFormItem from "./FormItem";
import KInput from "./Input";

export default {
  // props: ['title'],
  components: {
    KForm,
    KFormItem,
    KInput
  },
  props: {
    title: {
      type: String,
      default: "",
      required: true
    }
  },
  data() {
    return {
      ruleForm: {
        name: "",
        pwd: ""
      },
      ruleForm2: {
        name: "",
        pwd: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名" },
          { min: 6, max: 10, message: "请输入6~10位用户名" }
        ],
        pwd: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          alert("登录");
        } else {
          alert("登录失败");
        }
        this.$emit("eventTest", {
          a: 2
        });
        return false;
      });
    },
    submitForm2() {
      this.$refs.loginForm2.validate(valid => {
        if (valid) {
          alert("登录");
        } else {
          alert("登录失败");
        }
        return false;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>