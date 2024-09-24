<script setup lang="ts">
import { reactive } from 'vue'
import LccAlert from './LccAlert.vue'
import {states} from '../../globals/states'


const state = reactive({
  dismissible: false,
  longText: false
})
</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant v-for="type in [...states, undefined]" :key="type" :title="`This is an alert for ${type}`">
      <LccAlert :type="type" :dismissible="state.dismissible">
        This is an {{ type }}
      <template v-if="state.longText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </template>
      </LccAlert>
    </Variant>

    <template #controls>
      <HstCheckbox v-model="state.dismissible" title="Dismiss"/>
      <HstCheckbox v-model="state.longText" title="Long Text"/>

    </template>
  </Story>
</template>
<style scoped></style>
