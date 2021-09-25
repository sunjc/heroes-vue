<template>
  <el-form :model="user" :rules="rules" ref="loginForm" class="login-form">
    <el-form-item prop="username">
      <el-input id="username" v-model="user.username" :placeholder="t('message.username')" prefix-icon="el-icon-user"/>
    </el-form-item>
    <el-form-item prop="password">
      <el-input id="password" type="password" v-model="user.password" @keydown.enter="login"
                :placeholder="t('message.password')" autocomplete="off" prefix-icon="el-icon-lock" show-password/>
    </el-form-item>
    <el-form-item>
      ({{ t("message.username") }}/{{ t("message.password") }}: admin/admin, jason/jason)
    </el-form-item>
    <el-form-item>
      <el-button type="primary" class="login-form-button" @click="login">{{ t("message.login") }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script src="./Login.ts"></script>
<style scoped lang="scss" src="./Login.scss"></style>