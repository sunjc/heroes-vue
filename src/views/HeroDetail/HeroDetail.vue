<template>
  <div v-if="hero">
    <h2>{{ hero.name }} {{ $t("message.details") }} </h2>
    <el-form :model="hero" label-position="right" label-width="100px">
      <el-form-item :label="$t('message.id')">
        {{ hero.id }}
      </el-form-item>
      <el-form-item :label="$t('message.heroName')">
        <el-input v-model="hero.name"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="goBack()">{{ $t("message.back") }}</el-button>
        <el-button type="primary" v-if="$hasRole('ADMIN')" @click="save()">{{ $t("message.save") }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" src="./HeroDetail.ts"></script>