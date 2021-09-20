<template>
  <div v-if="hero">
    <h2>{{ hero.name }} {{ t("message.details") }} </h2>
    <n-form :model="hero" label-placement="left" label-align="right" label-width="100">
      <n-form-item :label="t('message.id')">
        {{ hero.id }}
      </n-form-item>
      <n-form-item :label="t('message.heroName')" path="name">
        <n-input v-model:value.trim="hero.name"/>
      </n-form-item>
      <n-form-item>
        <n-space>
          <n-button @click="goBack()">
            {{ t("message.back") }}
          </n-button>
          <!--<n-button type="primary" v-if="$hasRole('ADMIN')" @click="save()">{{ t("message.save") }}</n-button>-->
          <button class="button" v-if="$hasRole('ADMIN')" @click="save()">
            {{ t("message.save") }}
          </button>
        </n-space>
      </n-form-item>
    </n-form>
  </div>
</template>

<script lang="ts" src="./HeroDetail.ts"></script>