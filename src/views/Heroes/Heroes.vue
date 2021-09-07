<template>
  <h2>{{ $t("message.myHeroes") }}</h2>

  <el-row :gutter="20" align="middle" v-if="$hasRole('ADMIN')">
    <el-col :span="3" align="right">
      <label for="new-hero">{{ $t("message.heroName") }}</label>
    </el-col>
    <el-col :span="9">
      <el-input id="new-hero" v-model.trim="hero.name"></el-input>
    </el-col>
    <el-col :span="6">
      <el-button type="primary" @click="addHero()">
        {{ $t("message.addHero") }}
      </el-button>
    </el-col>
  </el-row>

  <div class="heroes">
    <el-table :data="heroes" style="width: 100%" row-key="index" size="small" @sort-change="sortChanged"
              :default-sort="{prop: 'name', order: 'ascending'}"
              stripe border highlight-current-row>
      <el-table-column type="index" :label="$t('message.no')" align="center" width="35"></el-table-column>
      <el-table-column prop="name" :label="$t('message.name')" header-align="center" sortable="custom"
                       :sort-orders="['ascending', 'descending']">
        <template #default="scope">
          <router-link :to="{name: 'detail', params: {id: scope.row.id}}">
            {{ scope.row.name }}
          </router-link>
        </template>
      </el-table-column>
      <el-table-column prop="createdDate" :label="$t('message.createdDate')" :formatter="formatter" align="center"
                       width="80"></el-table-column>
      <el-table-column :label="$t('message.delete')" align="center" width="60" v-if="$hasRole('ADMIN')">
        <template #default="scope">
          <el-button type="danger" icon="el-icon-delete" size="small" @click="deleteHero(scope.row.id)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :current-page="pageable.page" :total="totalItems" :page-size="pageable.size"
                @current-change="pageChanged" @size-change="sizeChanged"></pagination>
  </div>
</template>

<script lang="ts" src="./Heroes.ts"></script>
<style scoped lang="scss" src="./Heroes.scss"></style>
