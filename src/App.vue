<template>
  <el-config-provider :locale="locale">
    <el-container>
      <el-header height="130px">
        <el-row>
          <el-col :span="24">
            <h1>{{ $t("message.title") }}</h1>
          </el-col>
        </el-row>
        <el-row align="middle" :gutter="20">
          <el-col :span="12">
            <div id="nav">
              <router-link to="/login">{{ $t("message.login") }}</router-link>
              |
              <router-link to="/dashboard">{{ $t("message.dashboard") }}</router-link>
              |
              <router-link to="/heroes">{{ $t("message.heroes") }}</router-link>
              |
              <router-link to="/about">{{ $t("message.about") }}</router-link>
            </div>
          </el-col>
          <el-col :span="3">
            {{ currentDate }}
          </el-col>
          <el-col :span="5">
            <el-radio-group v-model="localeName" @change="switchLocale">
              <el-radio-button v-for="item in supportLocales" :key="item.code" :label="item.code">
                {{ item.label }}
              </el-radio-button>
            </el-radio-group>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-config-provider>
</template>

<script src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
