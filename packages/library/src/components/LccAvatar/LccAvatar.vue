<script setup lang="ts">
import { vMask } from '../../directives/vMask/VMask';
import type { Masks, Sizes } from '../../globals';
import {computed, inject, ref} from 'vue';

const props = withDefaults(defineProps<{
  mask?: Masks
  size?: Sizes
  src?: string
  placeholder?:string
}>(),{
  mask: 'squircle',
  size:'md'
})
const errorLoadingImage = ref(false)

//Size 
const defaultSize = computed(() => props.size);
const _size = inject('LccAvatarSize', defaultSize);

const sizeClasses = computed(() => {
  return {
    xs: 'w-8 h-8',
    sm: 'w-12 h-12',
    md: 'w-16, h-16',
    lg: 'w-24, h-24'
  }[_size.value]
});
const textSizeClasses = computed(() => {
  return {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg'
  }[_size.value]
});

// Mask 
const defaultMask = computed(()=> props.mask);
const _mask = inject('LccAvatarMask', defaultMask);

//Placeholeder
const placeholderClass = computed(() =>{
  return props.placeholder ? 'placeholder' : ''
})

// computed arr of all classes
const classes = computed(() =>{
  return [placeholderClass.value, sizeClasses.value, textSizeClasses.value]
})

</script>
<template>
  <div class="avatar" :class="classes" v-mask="_mask">
   <div v-if="(!src && placeholder) || (errorLoadingImage && placeholder)">
    {{ placeholder }}
   </div>
   <img v-else :src="src" @error="errorLoadingImage = true"/>
  </div>
</template>