<script setup>
const props = defineProps(['data'])
</script>
<template>
  <div
      data-vjs-source="true"
      data-vjs-target="true"
      class="vjs-lm-node">
    <div class="vjs-lm-node-header">
      <span class="vjs-lm-node-icon">{{ data.icon }}</span>
      <span class="vjs-lm-node-label">{{ data.label }}</span>
    </div>
    <div class="vjs-lm-node-type">
      {{ data.type }}
    </div>
  </div>
</template>
