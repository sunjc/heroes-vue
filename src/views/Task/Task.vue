<template>
  <div class="container">
    <gantt class="gantt" :locale="ganttLocale" :scales="scales" :tasks="tasks" :links="links"></gantt>
  </div>
</template>

<script lang="ts" src="./Task.ts"></script>
<style lang="scss" src="./Task.scss"></style>