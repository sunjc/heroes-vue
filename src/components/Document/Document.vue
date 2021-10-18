<template>
  <div class="document-editor">
    <ckeditor :editor="editor" v-model="value" :config="editorConfig" @ready="onReady"></ckeditor>
  </div>
</template>

<script lang="ts" src="./Document.ts"></script>
<style lang="scss" src="./Document.scss"></style>