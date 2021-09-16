<template>
  <n-pagination
      :page="page"
      :page-size="pageSize"
      :item-count="itemCount"
      :page-sizes="pageSizes"
      @update:page="pageChanged"
      @update:page-size="sizeChanged"
      show-size-picker/>
</template>

<script lang="ts" src="./Pagination.ts"></script>
<style scoped lang="scss" src="./Pagination.scss"></style>