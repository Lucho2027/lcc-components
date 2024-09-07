<script setup lang="ts">
import { reactive } from 'vue'
import LccBrowserMockup from './LccBrowserMockup.vue'

const state = reactive({
  url: 'https://luiscodecraft.com'
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <LccBrowserMockup :url="state.url">
        Hi! Thanks for checking out my awesome components
      </LccBrowserMockup>
    </Variant>

    <template #controls></template>
  </Story>
</template>
