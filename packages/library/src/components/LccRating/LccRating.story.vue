<script setup lang="ts">
import { reactive, ref } from 'vue'
import LccRating from './LccRating.vue'
import {sizes, masks, Masks, Sizes} from  '../../globals'

const state = reactive({
  mask: 'star-2' as Masks,
  size: 'sm' as Sizes
})
const data1 = ref(0)

</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Variant Title">
      <LccRating  :mask="state.mask" :size="state.size" v-model="data1" ></LccRating>
    </Variant>

    <template #controls>
      <HstSelect v-model="state.mask" :options="masks" title="Mask" />
      <HstSelect v-model="state.size" :options="sizes" title="Size" />
    </template>
  </Story>
</template>
