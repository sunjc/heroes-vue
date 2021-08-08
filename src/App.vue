<template>
  <el-container>
    <el-header height="130px">
      <el-row>
        <el-col :span="24">
          <h1>Tour of Heroes</h1>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <div id="nav">
            <router-link to="/login">Login</router-link>
            |
            <router-link to="/dashboard">Dashboard</router-link>
            |
            <router-link to="/heroes">Heroes</router-link>
            |
            <router-link to="/about">About</router-link>
          </div>
        </el-col>
        <el-col :span="12">
          {{ currentDate.toLocaleDateString() }}
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>

</template>

<script src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
