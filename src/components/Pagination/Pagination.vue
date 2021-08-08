<template>
  <el-pagination
      :current-page="currentPage"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :total="total"
      @current-change="currentChanged"
      @size-change="sizeChanged"
      layout="total, sizes, prev, pager, next"
      align="right"/>
</template>

<script lang="ts" src="./Pagination.ts"></script>