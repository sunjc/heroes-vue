<template>
  <n-config-provider :locale="nLocale" :date-locale="nDateLocale" :theme-overrides="themeOverrides">
    <n-message-provider>
      <message-content/>
      <n-layout>
        <n-layout-header>
          <n-grid :cols="4">
            <n-gi :span="4">
              <h1>{{ t("message.title") }}</h1>
            </n-gi>
            <n-gi :span="2">
              <div id="nav">
                <router-link to="/login">{{ t("message.login") }}</router-link>
                |
                <router-link to="/dashboard">{{ t("message.dashboard") }}</router-link>
                |
                <router-link to="/heroes">{{ t("message.heroes") }}</router-link>
                |
                <router-link to="/task">{{ t("message.gantt") }}</router-link>
                |
                <router-link to="/about">{{ t("message.about") }}</router-link>
              </div>
            </n-gi>
            <n-gi>
              {{ currentDate }}
              <n-radio-group v-model:value="locale" @change="switchLocale">
                <n-radio-button v-for="item in supportLocales" :key="item.name" :value="item.name">
                  {{ item.label }}
                </n-radio-button>
              </n-radio-group>
            </n-gi>
          </n-grid>
        </n-layout-header>
        <n-layout-content>
          <router-view></router-view>
        </n-layout-content>
      </n-layout>
    </n-message-provider>
  </n-config-provider>
</template>

<script src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
