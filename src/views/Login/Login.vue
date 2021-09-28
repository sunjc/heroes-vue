<template>
  <n-form :model="user" :rules="rules" ref="loginForm" label-placement="left" class="login-form">
    <n-form-item path="username">
      <n-input id="username" v-model:value="user.username" :placeholder="t('message.username')">
        <template #prefix>
          <n-icon>
            <person/>
          </n-icon>
        </template>
      </n-input>
    </n-form-item>
    <n-form-item path="password">
      <n-input id="password" type="password" v-model:value="user.password" @keydown.enter="login"
               :placeholder="t('message.password')" show-password-on="mousedown">
        <template #prefix>
          <n-icon>
            <lock-closed-outline/>
          </n-icon>
        </template>
      </n-input>
    </n-form-item>
    <n-form-item>
      ({{ t("message.username") }}/{{ t("message.password") }}: admin/admin, jason/jason)
    </n-form-item>
    <n-form-item>
      <!--<n-button type="primary" class="login-form-button" @click="login">{{ t("message.login") }}</n-button>-->
      <button type="button" class="button login-form-button" @click="login">
        {{ t("message.login") }}
      </button>
    </n-form-item>
  </n-form>
</template>

<script src="./Login.ts"></script>
<style scoped lang="scss" src="./Login.scss"></style>