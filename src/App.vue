<template>
  <div id="app">
    <!-- router view section -->
    <router-view></router-view>

    <!-- Footer -->
    <van-tabbar route>
      <van-tabbar-item to="/home" icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item :to="isLogin ? '/user' : '/user/login'" icon="user-o"
        >User</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'APP',
  data() {
    return {
      isLogin: false
    }
  }
}
</script>

<style lang="less" scoped></style>
