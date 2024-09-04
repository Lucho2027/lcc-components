<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { ColorsBrand, ColorsState } from '../../globals';

const props = defineProps<{
  color: ColorsBrand | ColorsState | 'ghost' | 'link'
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
</script>

<template>
  <button class="btn" :class="colorClass"><slot></slot></button>
</template>