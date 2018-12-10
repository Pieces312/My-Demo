<template>
    <div class="inner-box register">
        <div class="form-header">Sign Up</div>
        <form class="form-body">
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
                <button class="btn">Save</button>
            </div>
        </form>
        <div class="form-footer">
            <button class="btn" @click='change'>I already have an account.</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'register-box',
    data() {
        return {
            formData: {
                account: '',
                password: '',
                repassword: ''
            },
            telBool: false, // 判断手机号是否输入正确
            psdBool: false, // 判断密码是否输入正确
            reBool: false, // 判断密码是否输入正确
            telMsg: '',
            psdMsg: '',
            repsdMsg: ''
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
        },
        "formData.repassword" (val) {
          this.psdBool = this.formData.password ? false : true;
          console.log(this.formData.password === val);
          
          this.reBool = this.formData.password === val ? false : true;
          this.repsdMsg = this.formData.password === val ? "" : "两次密码输入不一致";
        }
    },
    methods: {
        // 切换到登录页面
        change() {
            this.$store.dispatch('changeLogin', false);
        }
    }
}
</script>