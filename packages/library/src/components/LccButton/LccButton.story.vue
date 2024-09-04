<script setup lang="ts">
import { reactive } from 'vue'
import LccButton from './LccButton.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <LccButton></LccButton>
    </Variant>

    <template #controls></template>
  </Story>
</template>
