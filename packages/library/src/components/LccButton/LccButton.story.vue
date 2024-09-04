<script setup lang="ts">
import { reactive } from 'vue'
import LccButton from './LccButton.vue'
import { colorsBrand, colorsState } from '../../globals'

const state = reactive({
  disabled: false
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <Variant
      v-for="c in [...colorsBrand, ...colorsState, 'ghost' as const, 'link' as const]"
      :title="c.toUpperCase()"
      :key="c"
    >
      <LccButton :color="c" :disabled="state.disabled">Click Me!</LccButton>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="state.disabled" title="Disabled" />
    </template>
  </Story>
</template>
