<template>
  <div v-if="hero">
    <h2>{{ hero.name }} Details </h2>
    <el-form :model="hero" label-position="right" label-width="100px">
      <el-form-item label="ID: ">
        {{ hero.id }}
      </el-form-item>
      <el-form-item label="Hero name: ">
        <el-input v-model="hero.name" placeholder="Hero name"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="goBack()">Go back</el-button>
        <el-button type="primary" @click="save()">Save</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" src="./HeroDetail.ts"></script>