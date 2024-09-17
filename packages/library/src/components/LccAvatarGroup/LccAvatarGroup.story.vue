<script setup lang="ts">
import { reactive } from 'vue'
import LccAvatarGroup from './LccAvatarGroup.vue'
import LccAvatar from '../LccAvatar/LccAvatar.vue'
import { sizes, masks, Masks, Sizes} from '../../globals'

const state = reactive({
  size:'sm' as Sizes,
  mask:'circle' as Masks
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Lcc Avatar Group">
      <LccAvatarGroup :mask="state.mask" :size="state.size">
        <LccAvatar src="https://i.pravatar.cc/300?u=8"></LccAvatar>
        <LccAvatar placeholder="LR" class="bg-red-600"></LccAvatar>
        <LccAvatar src="https://i.pravatar.cc/300?u=3"></LccAvatar>
        <LccAvatar src="https://i.pravatar.cc/300?u=4"></LccAvatar>
        <LccAvatar placeholder="99+" class="bg-gray-500"></LccAvatar>
      </LccAvatarGroup>
    </Variant>

    <template #controls>
      <HstSelect v-model="state.size" :options="sizes" title="Size"></HstSelect>
      <HstSelect v-model="state.mask" :options="masks" title="Mask"></HstSelect>
    </template>
  </Story>
</template>
