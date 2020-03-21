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
    </div>
</template>

<script>
    export default {
        // props: ['title'],
        props: {
            title: {
                type: String,
                default: '',
                required: true
            }
        },
        data() {
            return {
                ruleForm: {
                    name: '',
                    pwd: ''
                },
                rules: {
                    name: [
                        {required: true, message: '请输入用户名'},
                        {min: 6, max: 10, message: '请输入6~10位用户名'}
                    ],
                    pwd: [
                        {required: true, message: '请输入密码'}
                    ]
                }
            }
        },
        methods: {
            submitForm() {
                this.$refs.loginForm.validate(valid => {
                    if (valid) {
                        alert('登录');
                    } else {
                        alert('登录失败');
                    }
                    this.$emit('eventTest', {
                        a: 2
                    });
                    return false;
                })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>