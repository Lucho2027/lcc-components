<script setup lang="ts">
import { reactive } from 'vue'
import LccButton from './LccButton.vue'
import { colorsBrand, colorsState, loadingType, sizes } from '../../globals'
import type {  LoadingType, Sizes } from '../../globals'

const state = reactive({
  disabled: false,
  active:false,
  circle:false,
  square: false,
  wide:false,
  loading: false,
  loadingType: 'spinner' as LoadingType,
  outline: false,
  glass: false,
  size: 'md' as Sizes
})

</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <Variant
      v-for="c in [...colorsBrand, ...colorsState, 'ghost' as const, 'link' as const]"
      :title="c.toUpperCase()"
      :key="c"
    >
      <LccButton 
      :color="c" 
      :disabled="state.disabled" 
      :active="state.active"
      :circle="state.circle"
      :square="state.square"
      :wide ="state.wide"
      :loading="state.loading"
      :loading-type="state.loadingType"
      :outline="state.outline"
      :glass="state.glass"
      :size="state.size"
      >
       Click Me!
      </LccButton>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="state.disabled" title="Disabled" />
      <HstCheckbox v-model="state.active" title="Active" />
      <HstCheckbox v-model="state.circle" title="Circle" />
      <HstCheckbox v-model="state.square" title="Square" />
      <HstCheckbox v-model="state.wide" title="Wide" />
      <HstCheckbox v-model="state.loading" title="Loading" />
      <HstSelect v-if="state.loading" v-model="state.loadingType" :options="loadingType" title="Color" />
      <HstCheckbox v-model="state.outline" title="Outline" />
      <HstCheckbox v-model="state.glass" title="Glass" />
      <HstSelect  v-model="state.size" :options="sizes" title="Size" />
    </template>
  </Story>
</template>
