<template>
  <h2>{{ t("message.topHeroes") }}</h2>
  <div class="heroes-menu">
    <router-link v-for="hero in heroes" :key="hero.id" :to="{name: 'detail', params: {id: hero.id}}">
      {{ hero.name }}
    </router-link>
  </div>
  <hero-search></hero-search>
</template>

<script lang="ts" src="./Dashboard.ts"></script>
<style scoped lang="scss" src="./Dashboard.scss"></style>