<template>
  <h2>{{ t("message.myHeroes") }}</h2>

  <n-form inline label-placement="left" :model="hero" v-if="$hasRole('ADMIN')">
    <n-form-item :label="t('message.heroName')" path="name" style="width: 410px;">
      <n-input id="new-hero" v-model:value.trim="hero.name"/>
    </n-form-item>
    <n-form-item>
      <!--<n-button type="primary" @click="addHero()">
         {{ t("message.addHero") }}
      </n-button>-->
      <button class="button" @click="addHero()">
        {{ t("message.addHero") }}
      </button>
    </n-form-item>
  </n-form>

  <div class="heroes">
    <n-data-table size="small" :loading="loading" :columns="columns" :data="heroes" :row-key="rowKey"
                  @update:sorter="sortChanged" :row-class-name="rowClass"/>
    <pagination :page="pageable.page" :page-size="pageable.size" :item-count="itemCount"
                @page-change="pageChanged" @size-change="sizeChanged"/>
  </div>
</template>

<script lang="ts" src="./Heroes.ts"></script>
<style scoped lang="scss" src="./Heroes.scss"></style>
