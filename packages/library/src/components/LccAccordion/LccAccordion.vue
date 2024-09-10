<script setup lang="ts">
import { provide, watch, ref, computed } from 'vue';
import { nanoid } from 'nanoid';

const props = defineProps<{
  multipleOpen?: boolean,
  join?: boolean
}>()

const accordionData = ref({
  id: nanoid(),
  activeIds:[],
  multipleOpen: props.multipleOpen,
  join: props.join
})

watch(
  () => props.join,
  () => props.multipleOpen,
  () => {
    accordionData.value.multipleOpen = props.multipleOpen
    accordionData.value.activeIds=[accordionData.value.activeIds.at(0)].filter((n)=>n)
  }
)

const computedSpace = computed(()  => {
  return props.join ?  '' : 'space-y-2'
});

provide('lccAccordionData', accordionData);

</script>

<template>
  <div class="w-full" :class="[{'join': props.join, 'join-vertical': props.join}, computedSpace]">
    <slot></slot>
  </div>
</template>