<template>
    <div class="inner-box">
        <div class="form-header">Login</div>
        <!-- 登录表单 -->
        <form class="form-body">
            <div class="row-input" :class='{"mistakeClasses": telBool}'>
                <input v-model='formData.account' @blur='hanldBlur("account")' type="text" placeholder="手机号">
                <span>{{telMsg}}</span>
            </div>
            <div class="row-input" :class='{"mistakeClasses": psdBool}'>
                <input v-model='formData.password' @blur='hanldBlur("password")' type="password" placeholder="密码">
                <span>{{psdMsg}}</span>
            </div>
            <div class="btn-row">
                <button class="btn" @click='login'>Login</button>
            </div>
        </form>
        <!-- 切换注册界面 -->
        <div class="form-footer">
            <button class="btn" @click='change'>Don't have account?</button>
        </div>
    </div>
</template>

<script>
import Dialog from '@/components/loading';

export default {
    name: 'login-box',
    data() {
        return {
            // 表单数据
            formData: {
                account: '',
                password: ''
            },
            telBool: false, // 判断手机号是否输入正确
            psdBool: false, // 判断密码是否输入正确
            telMsg: '手机号不能为空',
            psdMsg: '密码不能为空'
        }
    },
    watch: {
        "formData.account" (val) {
            let reg = /^[1][3,5,7,8,9][0-9]{9}$/;
            let isTrue = reg.test(val);
            this.telMsg = !isTrue ? '输入手机号不正确' : '';
            
            this.telBool = !isTrue
        },
        "formData.password" (val) {
            let reg = /^[A-Za-z0-9]{8,21}$/;
            let isTrue = reg.test(val);
            this.psdMsg = !isTrue ? '输入密码不正确' : '';

            this.psdBool = !isTrue
        }
    },
    methods: {
        // 切换到注册页面
        change() {
            this.$store.dispatch('changeLogin', true);
        },
        // 输入框失焦触发的事件
        hanldBlur(value) {
            let val = this.formData[value];

            if(value === 'account') {
                this.telBool = !val ? true : false;
                this.telMsg = !val ? '手机号不能为空' : '';
            } else {
                this.psdBool = !val ? true : false;
                this.psdMsg = !val ? '密码不能为空' : '';
            }
        },
        // 登录事件
        login() {
            let {account, password} = this.formData;

            // 再次判断输入框内的值
            if(!account || !password) {
                alert("请输入你的登录信息")
                this.telBool = !account ? true : false;
                this.psdBool = !password ? true : false;
                return;
            }

            console.log(this.formData);
            
        }
    }
}
</script>