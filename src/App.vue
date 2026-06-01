<script setup>

import renderOptions from "./render-options.ts"
import viewOptions from "./view-options.ts"
import modelOptions from "./model-options.ts"

</script>

<template>
  <div class="vjs-list-manager">
    <SurfaceComponent :renderOptions="renderOptions" :viewOptions="viewOptions" :modelOptions="modelOptions" url="/dataset.json">
      <ControlsComponent/>
    </SurfaceComponent>
  </div>
</template>

