<template>
  <div class="login-container">
    <div class="login-header">
      <h3>Login</h3>
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        label="Username"
        placeholder="username"
        :rules="[{ required: true, message: 'Please input Username' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="Password"
        placeholder="password"
        :rules="[{ required: true, message: 'Please input Password' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >Submit</van-button
        >
      </div>
    </van-form>
  </div>
</template>

<script>
import { onLogin } from '@/API/userAPI.js'
import { Toast } from 'vant'
export default {
  data() {
    return {
      isLogin: false,
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit(values) {
      console.log(values)
      const { data: res } = await onLogin(values.username, values.password)
      if (res.status === 0) {
        this.isLogin = true
        this.$parent.isLogin = true
        Toast.success('Successfully Login')
        this.$router.push('/user')
        localStorage.setItem('token', res.token)
      } else {
        this.isLogin = false
        this.$parent.isLogin = false
        Toast.fail('Login failed')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  text-align: center;
  .login-header {
    height: 28px;
    padding: 20px 0;
    border-bottom: 1px solid #d0d2d2;
    h3 {
      margin: 0;
    }
  }
}
</style>
