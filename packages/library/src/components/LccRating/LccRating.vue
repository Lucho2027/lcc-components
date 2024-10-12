<script setup lang="ts">
import { computed, defineProps, ref } from 'vue';
import type { Sizes, Masks  } from '../../globals';



const props = withDefaults(defineProps<{
  size?: Sizes
  mask?: Masks
}>(), {
  size: 'sm',
  mask: 'star'
})

const sizeClass = computed(()=>{
  return {
    xs: 'rating-xs',
    sm: 'rating-sm',
    md:'rating-md',
    lg: 'rating-lg',
  }[props.size]
})

const maskClass = computed(() =>{
  return {
   squircle: 'mask-squircle',
  heart: 'mask-heart',
  hexagon: 'mask-hexagon',
  'hexagon-2': 'mask-hexagon-2',
  decagon: 'mask-decagon',
  pentagon: 'mask-pentagon',
  diamond: 'mask-diamond',
  circle: 'mask-circle',
  square: 'mask-square',
  parallelogram: 'mask-parallelogram',
  'parallelogram-2': 'mask-parallelogram-2',
  'parallelogram-3': 'mask-parallelogram-3',
  'parallelogram-4': 'mask-parallelogram-4',
  star: 'mask-star',
  'star-2': 'mask-star-2',
  triangle: 'mask-triangle',
  'triangle-2': 'mask-triangle-2',
  'triangle-3': 'mask-triangle-3',
  'triangle-4' : 'mask-triangle-4'
  }[props.mask]
})

const rating = defineModel<number>({ default: 0 })


</script>

<template>
 <div class="rating" :class="[sizeClass]">
  <input v-if="rating === 0" type="radio" class="hidden" checked />
  <input v-for="r in 5" :key="r" type="radio" class="mask" :class="[maskClass]" v-model="rating" :value="r"/>
 
</div>
</template>