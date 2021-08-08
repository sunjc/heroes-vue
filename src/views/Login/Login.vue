<template>
  <el-form :model="user" :rules="rules" ref="loginForm" class="login-form">
    <el-form-item prop="username">
      <el-input v-model="user.username" placeholder="Username" prefix-icon="el-icon-user"></el-input>
    </el-form-item>
    <el-form-item prop="password">
      <el-input type="password" v-model="user.password" @keydown.enter="login" placeholder="Password"
                autocomplete="off" prefix-icon="el-icon-lock" show-password></el-input>
    </el-form-item>
    <el-form-item>
      (Username: admin, Password: admin)
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="login-form-button" @click="login">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<script src="./Login.ts"></script>
<style scoped lang="scss" src="./Login.scss"></style>