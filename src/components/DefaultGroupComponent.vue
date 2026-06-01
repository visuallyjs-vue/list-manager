<script setup>
const props = defineProps(['data'])
</script>
<template>
  <div class="vjs-lm-group" data-vjs-list="true">
    <div class="vjs-lm-group-header">
      <span class="vjs-lm-group-title">{{ data.label.toUpperCase() }}</span>
      <div class="vjs-lm-group-title-accent"/>
    </div>
    <div data-vjs-group-content="true" class="vjs-lm-group-content"/>
  </div>
</template>
