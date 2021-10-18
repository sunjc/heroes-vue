<template>
  <div class="editor">
    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" @ready="onReady"></ckeditor>
  </div>
</template>

<script lang="ts" src="./Document.ts"></script>