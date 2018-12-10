<template>
    <div class="login-box">
        <div class="bgImg"><img src="@/assets/beauty.jpg" alt="beauty" /></div>
        <div class="form">
            <login></login>
        </div>
    </div>
</template>

<script>
import Login from './login.vue';

export default {
    name: 'form-box',
    components: {Login}
}
</script>

<style lang="less">
@import '~css/login.less';
</style>
