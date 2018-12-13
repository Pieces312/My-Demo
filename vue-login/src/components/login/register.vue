<template>
    <div class="inner-box register" :loading='showLoading'>
        <div class="form-header">Sign Up</div>
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
                <button class="btn" @click='signUpAccount'>Save</button>
            </div>
        </form>
        <div class="form-footer">
            <button class="btn" @click='change'>I already have an account.</button>
        </div>
    </div>
</template>

<script>
import { setBase64 } from '@/utils/tools.js'
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
            this.telMsg = !isTrue ? '手机号格式错误' : '';
            
            this.telBool = !isTrue
        },
        // 判断密码
        "formData.password" (val) {
            let reg = /^[A-Za-z0-9]{8,21}$/;
            let isTrue = reg.test(val);
            this.psdMsg = !isTrue ? '密码格式错误' : '';

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
                this.telBool = !account ? true : false;
                this.psdBool = !password ? true : false;
                this.reBool = !repassword ? true : false;
                return;
            }
            
            // 再次判断输入框内的值
            if(this.telBool || this.psdBool || this.reBool) {
                Dialog.init({
                    type: 'warn',
                    message: "注册信息有误"
                })
                return;
            }
            this.showLoading = true;

            this.formData.password = setBase64(password)
            this.formData.repassword = setBase64(repassword)
            
            this.$store.dispatch("signUpUserInfo", this.formData).then(res => {
                let self = this;
                this.showLoading = false;

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