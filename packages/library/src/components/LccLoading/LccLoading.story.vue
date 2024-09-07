<script setup lang="ts">
import { reactive } from 'vue'
import LccLoading from './LccLoading.vue'
import { loadingType } from '../../globals/loaders'
import type { ColorsBrand, ColorsState } from '../../globals/colors'
import { colorsBrand, colorsState } from '../../globals/colors'
import { sizes } from '../../globals/sizes'

const state = reactive({
  color: '' as ColorsBrand | ColorsState
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <template v-for="type in loadingType" :key="type">
      <template v-for="size in sizes" :key="size">
        <Variant :title="`${type} - ${size}`">
          <LccLoading :type="type" :size="size" :color="state.color" />
        </Variant>
      </template>
    </template>

    <template #controls>
      <HstSelect v-model="state.color" :options="[...colorsBrand, ...colorsState]" title="Color" />
    </template>
  </Story>
</template>
