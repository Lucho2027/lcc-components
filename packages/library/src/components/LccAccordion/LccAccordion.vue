<script setup lang="ts">
import { provide, watch, ref } from 'vue';
import { nanoid } from 'nanoid';

const props = defineProps<{
  multipleOpen?: boolean
}>()

const accordionData = ref({
  id: nanoid(),
  activeIds:[],
  multipleOpen: props.multipleOpen
})

watch(
  () => props.multipleOpen,
  () => {
    accordionData.value.multipleOpen = props.multipleOpen
    accordionData.value.activeIds=[accordionData.value.activeIds.at(0)].filter((n)=>n)
  }
)
provide('lccAccordionData', accordionData)
</script>

<template>
  <div class="join join-vertical w-full">
    <slot></slot>
  </div>
</template>