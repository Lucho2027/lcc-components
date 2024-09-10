<script setup lang="ts">
import {LccAccordion, LccAccordionPanel, LccTabs, LccTab} from 'lcc-vue'
</script>

# Accordion Component

## Without any props

<LccTabs :type="'lifted'">
  <LccTab name="Preview">
   <LccAccordion>
        <LccAccordionPanel title="Panel 1">
          <p>Panel 1 Content</p>
        </LccAccordionPanel>
        <LccAccordionPanel title="Panel 2">
          <p>Panel 2 Content</p>
        </LccAccordionPanel>
    </LccAccordion>
  </LccTab>
  <LccTab name="Code">

```vue
 <LccAccordion>
        <LccAccordionPanel title="Panel 1">
          <p>Panel 1 Content</p>
        </LccAccordionPanel>
        <LccAccordionPanel title="Panel 2">
          <p>Panel 2 Content</p>
        </LccAccordionPanel>
</LccAccordion>
```

  </LccTab>
</LccTabs>

## With props

<LccTabs :type="'lifted'">
  <LccTab name="Preview">
   <LccAccordion multiple-open join>
        <LccAccordionPanel title="Panel 1">
          <p>Panel 1 Content</p>
        </LccAccordionPanel>
        <LccAccordionPanel title="Panel 2">
          <p>Panel 2 Content</p>
        </LccAccordionPanel>
    </LccAccordion>
  </LccTab>
  <LccTab name="Code">

```vue-vue

 <LccAccordion multiple-open join>
        <LccAccordionPanel title="Panel 1">
          <p>Panel 1 Content</p>
        </LccAccordionPanel>
        <LccAccordionPanel title="Panel 2">
          <p>Panel 2 Content</p>
        </LccAccordionPanel>
</LccAccordion>

```
  </LccTab>
</LccTabs>