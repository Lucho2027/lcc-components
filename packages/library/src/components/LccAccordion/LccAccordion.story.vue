<script setup lang="ts">
import { reactive } from 'vue'
import LccAccordion from './LccAccordion.vue'
import LccAccordionPanel from '../LccAccordionPanel/LccAccordionPanel.vue';


</script>
<template>
  <Story :layout="{ type: 'grid', width: '100%' }">
    <Variant title="Only One Open at a time">
      <LccAccordion>
        <LccAccordionPanel title="Panel 1">
          <p>Panel 1 Content</p>
        </LccAccordionPanel>
        <LccAccordionPanel title="Panel 2">
          <p>Panel 2 Content</p>
        </LccAccordionPanel>
      </LccAccordion>
    </Variant>

    <Variant title="Multiple Open at One Time">
      <LccAccordion multiple-open>
        <LccAccordionPanel title="Panel 1">
          <p>Panel 1 Content</p>
        </LccAccordionPanel>
        <LccAccordionPanel title="Panel 2">
          <p>Panel 2 Content</p>
        </LccAccordionPanel>
      </LccAccordion>
    </Variant>

    <template #controls></template>
  </Story>
</template>
