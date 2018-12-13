<template>
  <div class="main">
    <div class="tips">
      <i class="icon-success"></i>
      <p>恭喜，登录成功</p>
      <button class="btn" @click='signOut'>退出登录</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    signOut() {
      localStorage.removeItem('userInfo');
      this.$router.push('/');
    }
  }
}
</script>

