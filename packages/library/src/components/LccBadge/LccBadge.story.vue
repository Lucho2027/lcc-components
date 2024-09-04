<script setup lang="ts">
import { reactive } from 'vue'
import LccBadge from './LccBadge.vue'
import { sizes, colorsBrand, colorsState } from '@/globals'

const state = reactive({})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <Variant v-for="size in sizes" :key="size" :title="size">
      <LccBadge :size="size">24</LccBadge>
    </Variant>
    <Variant
      v-for="color in [...colorsBrand, ...colorsState, undefined, 'ghost' as const]"
      :key="color"
      :title="color"
    >
      <LccBadge :color="color" size="lg">24</LccBadge>
    </Variant>
    <Variant title="Empty Primary">
      <LccBadge v-for="size in sizes" :key="size" color="primary" :size="size"></LccBadge>
    </Variant>

    <Variant title="Empty Secondary">
      <LccBadge v-for="size in sizes" :key="size" color="secondary" :size="size"></LccBadge>
    </Variant>

    <Variant
      v-for="color in [...colorsBrand, ...colorsState, undefined, 'ghost' as const]"
      :key="color"
      :title="`Outline ${color}`"
    >
      <LccBadge :color="color" outline size="lg">24</LccBadge>
    </Variant>

    <template #controls></template>
  </Story>
</template>
