<script setup lang="ts">
import { computed, defineProps } from 'vue';
import type { ColorsBrand, ColorsState, LoadingType, Sizes } from '../../globals';


const props = defineProps<{
  color?: ColorsBrand | ColorsState | 'ghost' | 'link',
  active?: Boolean,
  circle?: Boolean,
  square?: Boolean,
  wide?: Boolean,
  loading?: Boolean,
  loadingType?: LoadingType,
  outline?: Boolean,
  glass?:Boolean,
  size?: Sizes
}>()

const colorClass = computed(()=>{
  return {
    neutral:'btn-neutral',
    primary: 'btn-primary',
    secondary:'btn-secondary',
    accent:'btn-accent',
    ghost: 'btn-ghost',
    link: 'btn-link',
    info:'btn-info',
    warning:'btn-warning',
    success:'btn-success',
    error:'btn-error'
  }[props.color]
})
const activeClass = computed(() => {
  return props.active ? 'btn-active' : ''
})
const circleClass = computed(() => {
  return props.circle ? 'btn-circle' : ''
})
const squareClass = computed(() => {
  return props.square ? 'btn-square' : ''
})
const wideClass = computed(() => {
  return props.wide ? 'btn-wide' : ''
})
const loadingClass = computed(() => {
  return props.loading ? 'loading' : ''
})
const loadingTypeClass = computed(() => {
  return {
    spinner: 'loading-spinner',
    dots: 'loading-dots',
    ring: 'loading-ring',
    ball: 'loading-ball',
    bars: 'loading-bars',
    infinity: 'loading-infinity'
  }[props.loadingType]
})
const outlineClass = computed(() => {
  return props.outline ? 'btn-outline' : ''
})
const glassClass = computed(() => {
  return props.glass ? 'glass' : ''
})
const sizeClass = computed(()=>{
  return {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg'
  }[props.size]
})
</script>

<template>
  <button class="btn" 
  :class="[colorClass, activeClass, circleClass, squareClass, wideClass, outlineClass, glassClass,sizeClass]"
  >
  <span v-if="props.loading" :class="[loadingClass, loadingTypeClass]"></span>
  <slot></slot>
  </button>
</template>