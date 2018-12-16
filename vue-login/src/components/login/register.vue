<template>
    <div class="inner-box register" :loading='showLoading'>
        <div class="form-header">注册</div>
        <form class="form-body" id='formData'>
            <div class="row-input" :class='{"mistakeClasses": telBool}'>
                <input v-model='formData.account' type="text" placeholder="手机号">
                <span>{{telMsg}}</span>
            </div>
            <div class="row-input" :class='{"mistakeClasses": psdBool}'>
                <input v-model='formData.password' type="password" placeholder="密码">
                <span>{{psdMsg}}</span>
            </div>
            <div class="row-input" :class='{"mistakeClasses": reBool}'>
                <input v-model='formData.repassword' type="password" placeholder="再次确认">
                <span>{{repsdMsg}}</span>
            </div>
            <div class="btn-row">
                <button class="btn" @click='signUpAccount'>保存</button>
            </div>
        </form>
        <div class="form-footer">
            <button class="btn" @click='change'>已有账号，去登陆</button>
        </div>
    </div>
</template>

<script>
import {Ajax} from '@/api/index.js';
import Dialog from '@/components/loading';

export default {
    name: 'register-box',
    data() {
        return {
            formData: {
                account: '',
                password: '',
                repassword: ''
            },
            showLoading: false,
            telBool: false, // 判断手机号是否输入正确
            psdBool: false, // 判断密码是否输入正确
            reBool: false, // 判断两次密码输入是否一致
            telMsg: '手机号不能为空', // 手机号错误提示信息
            psdMsg: '密码不能为空', // 密码错误提示信息
            repsdMsg: '两次密码输入不一致', // 两次密码错误提示信息
        }
    },
    watch: {
        // 判断手机号
        "formData.account" (val) {
            let reg = /^[1][3,5,7,8,9][0-9]{9}$/;
            let isTrue = reg.test(val);
            this.telMsg = !isTrue ? '输入手机号不正确' : '';
            
            this.telBool = !isTrue
        },
        // 判断密码
        "formData.password" (val) {
            let reg = /^[A-Za-z0-9]{8,21}$/;
            let isTrue = reg.test(val);
            this.psdMsg = !isTrue ? '输入密码不正确' : '';

            this.psdBool = !isTrue
        },
        // 判断两次密码是否一样
        "formData.repassword" (val) {
          this.psdBool = this.formData.password ? false : true;
          
          this.reBool = this.formData.password === val ? false : true;
          this.repsdMsg = this.formData.password === val ? "" : "两次密码输入不一致";
        }
    },
    methods: {
        // 切换到登录页面
        change() {
            this.$store.dispatch('changeLogin', false);
        },
        // 注册账号按钮
        signUpAccount() {
            let {account, password, repassword} = this.formData;

            // 再次判断输入框内的值
            if(!account || !password || !repassword) {
                Dialog.init({
                    type: 'warn',
                    message: "请输入你的注册信息"
                })
                this.telBool = !account ? true : false;
                this.psdBool = !password ? true : false;
                this.reBool = !repassword ? true : false;
                return;
            }
            this.showLoading = true;
            
            this.$store.dispatch("signUpUserInfo", this.formData).then(res => {
                let self = this;
                this.showLoading = false;
                this.telBool = false;
                this.psdBool = false;

                Dialog.init({
                    type: 'success',
                    message: res.msg,
                    callback: function() {
                        self.$store.dispatch('changeLogin', false);
                    }
                })
                
            }).catch(error => {
                this.showLoading = false;
                
                Dialog.init({
                    type: 'error',
                    message: error.msg
                })
            })
        }
    }
}
</script>