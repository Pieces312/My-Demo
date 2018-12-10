<template>
    <div class="inner-box">
        <div class="form-header">Login</div>
        <form class="form-body">
            <div class="row-input">
                <input v-model='formData.acount' type="text" placeholder="手机号/邮箱">
                <i class="icon-close"></i>
            </div>
            <div class="row-input">
                <input v-model='formData.password' type="password" placeholder="密码">
                <i class="icon-close"></i>
            </div>
            <div class="btn-row">
                <button class="btn">Login</button>
            </div>
        </form>
        <div class="form-footer">
            <button class="btn">Don't have account?</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'login-box',
    data() {
        return {
            formData: {
                acount: '',
                password: ''
            }
        }
    },
    mounted() {
        
    },
    methods: {
        inputValue(e, val) {
            console.log(e);
        }
    }
}
</script>