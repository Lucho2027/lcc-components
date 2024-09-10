<script setup lang="ts">
import { reactive } from 'vue'
import LccAvatar from './LccAvatar.vue'
import LccBadge from '../LccBadge/LccBadge.vue';
import {sizes, masks, Masks} from  '../../globals'

const state = reactive({
  mask: 'circle' as Masks  
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '25%' }">
    <Variant :title="`With image - ${s}`" v-for="s in sizes" :key="s">
      <LccAvatar :mask="state.mask" :size="s"  src="https://picsum.photos/300/300"/>
    </Variant>
    <Variant :title="`With Placeholder - ${s}`" v-for="s in sizes" :key="s">
      <LccAvatar :mask="state.mask" :size="s"  placeholder="LR" class="bg-red-500"/>
    </Variant>
    <Variant :title="`With Custom BG Color ${s}`" v-for="s in sizes" :key="s">
      <LccAvatar 
      :mask="state.mask" 
      :size="s"  
      placeholder="LR" 
      :class="{
        xs:'bg-red-500',
        sm:'bg-blue-500',
        md:'bg-green-500',
        lg:'bg-yellow-500'
      }[s]"/>
    </Variant>
   
    <Variant :title="`With Empty Badge - ${s}`" v-for="s in sizes" :key="s">
      <div class="relative inline-block">
        <LccBadge class="absolute bottom-1 right-1 z-10" color="error" :size="s"></LccBadge>
        <LccAvatar 
            :mask="state.mask" 
            :size="s"
            src="https://picsum.photos/300/300"
        />
    </div>
    </Variant>
    <Variant :title="`With Badge - ${s}`" v-for="s in sizes" :key="s">
      <div class="relative inline-block">
        <LccBadge class="absolute bottom-0 right-0 z-10 text-white" color="error" :size="s">99+</LccBadge>
        <LccAvatar 
            :mask="state.mask" 
            :size="s"
            src="https://picsum.photos/300/300"
        />
    </div>
    </Variant>
    <Variant :title="`With Placeholder Backup when image does not load - ${s}`" v-for="s in sizes" :key="s">
        <LccAvatar 
            :mask="state.mask" 
            :size="s"
            class="bg-blue-500"
            src=""
            placeholder="LR"
        />
    </Variant>
    
    <template #controls>
      <HstSelect v-model="state.mask" :options="masks" title="Mask" />
    </template>
  </Story>
</template>
