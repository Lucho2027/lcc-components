<script setup lang="ts">
import { reactive } from 'vue'
import LccAvatarGroup from './LccAvatarGroup.vue'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <LccAvatarGroup></LccAvatarGroup>
    </Variant>

    <template #controls></template>
  </Story>
</template>
