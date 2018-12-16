<template>
    <div class="login-box">
        <div class="bgImg"><img :src="beauty" alt="beauty" /></div>
        <div class="form">
            <Transition name='login'>
                <login v-if='!status'></login>
                <register v-else></register>
            </Transition>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Login from './login.vue';
import Register from './register.vue';
import beauty from '../../assets/beauty.jpg';

export default {
    name: 'form-box',
    components: {Login, Register},
    computed: mapState({
        status: state => state.login.status
    }),
    mounted() {
    }
}
</script>

<style lang="less">
.login-enter-active {
    animation: bounce-in ease-in .5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
