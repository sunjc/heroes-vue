<template>
  <div id="search-component">
    <label for="search-box">{{ t("message.heroSearch") }}</label>
    <n-input v-model:value.trim="name" id="search-box" @input="search()" class="search-box" clearable/>

    <ul class="search-result">
      <li v-for="hero in heroes" :key="hero.id">
        <router-link :to="{name: 'detail', params: {id: hero.id}}">{{ hero.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script src="./HeroSearch.ts"></script>
<style scoped lang="scss" src="./HeroSearch.scss"></style>