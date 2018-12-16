<template>
  <div class="main">
    <div class="tips">
      <i class="icon-success"></i>
      <p>恭喜，登录成功</p>
      <button class="btn" @click='signOut'>退出登录</button>
    </div>
    <div class="loading" :style="{'transform': `scale(${showLoading ? 1 : 0})`}">加载中...</div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      showLoading: false
    }
  },
  methods: {
    signOut() {
      this.showLoading = true;
      setTimeout(() => {
        this.showLoading = false;
        localStorage.removeItem('userInfo');
        this.$router.replace('/');
      }, 2000)
    }
  }
}
</script>

