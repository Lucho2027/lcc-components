<script setup lang="ts">
import { nanoid } from 'nanoid';
import { defineProps, inject, ref } from 'vue';

const props = defineProps<{
  title?: string
}>()

const id = nanoid();
const defaultData = ref({
  id: null,
  activeIds: [],
  multipleOpen: false
})

const accordion = inject('lccAccordionData', defaultData)

if(accordion.value.id === null){
  throw new Error('LccAccordionPanel must be used inside a LccAccordion')
}

function handleToggle(){
  if(accordion.value.activeIds.includes(id)){
    accordion.value.activeIds = accordion.value.activeIds.filter((activeId)=> activeId !== id)
  } else{
    if(!accordion.value.multipleOpen){
      accordion.value.activeIds =[]
    }
    accordion.value.activeIds.push(id)
  }
}


</script>

<template>
  <div class="collapse collapse-arrow join-item border-base-300 border"
      :class="{'collapse-open': accordion.activeIds.includes(id)}">
    <button 
    class="block font-bold text-left cursor-pointer collapse-title focus:shadow-primary focus:outline-none"
    @click="handleToggle"
    @keydown.Enter="handleToggle()"
    >
      <slot name="title">{{ props.title }}</slot>
    </button>
   <div class="collapse-content">
    <slot></slot>
   </div>
  </div>
</template>