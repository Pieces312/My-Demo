<template>
    <div class="inner-box">
        <div class="form-header">Login</div>
        <!-- 登录表单 -->
        <form class="form-body">
            <div class="row-input" :class='{"mistakeClasses": telBool}'>
                <input v-model='formData.account' type="text" placeholder="手机号">
                <span>{{telMsg}}</span>
            </div>
            <div class="row-input" :class='{"mistakeClasses": psdBool}'>
                <input v-model='formData.password' type="password" placeholder="密码">
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
            this.telMsg = !isTrue ? '手机号格式错误' : '';
            
            this.telBool = !isTrue
        },
        "formData.password" (val) {
            let reg = /^[A-Za-z0-9]{8,21}$/;
            let isTrue = reg.test(val);
            this.psdMsg = !isTrue ? '密码格式错误' : '';

            this.psdBool = !isTrue
        }
    },
    methods: {
        // 切换到注册页面
        change() {
            this.$store.dispatch('changeLogin', true);
        },
        // 登录事件
        login() {
            let {account, password} = this.formData;

            if(!account || !password) {
                this.telBool = !account ? true : false;
                this.psdBool = !password ? true : false;
                return;
            }

            // 再次判断输入框内的值
            if(this.telBool || this.psdBool) {
                Dialog.init({
                    type: 'warn',
                    message: "您的登录信息有误"
                })
                return;
            }

            this.$store.dispatch('login', this.formData).then(res => {
                let self = this;
                localStorage.setItem('userInfo', JSON.stringify(res.data));

                Dialog.init({
                    type: 'success',
                    message: res.msg,
                    callback: function() {
                        self.$router.push('home')
                    }
                })
            }).catch(error => {
                Dialog.init({
                    type: 'error',
                    message: error.msg
                })
            })
        }
    }
}
</script>