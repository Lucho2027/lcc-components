<script setup lang="ts">
import {LccTabs, LccTab} from 'lcc-vue'

const types = ['Bordered', 'Boxed', 'Lifted'] as const

</script>

# Tabs

### Lifted

<LccTabs type="lifted">
    <LccTab name="Preview">
        <LccTabs type="lifted">
        <LccTab name="Tab 1">Tab 1 Content</LccTab>
        <LccTab name="Tab 2">Tab 2 Content</LccTab>
        <LccTab name="Tab 3">Tab 3 Content</LccTab>
    </LccTabs>
    </LccTab>
<LccTab name="Code">

```html
<LccTabs type="lifted">
  <LccTab name="Tab 1">Tab 1 Content</LccTab>
  <LccTab name="Tab 2">Tab 2 Content</LccTab>
  <LccTab name="Tab 3">Tab 3 Content</LccTab>
</LccTabs>
```

</LccTab>

</LccTabs>

### Bordered

<LccTabs type="lifted">
    <LccTab name="Preview">
        <LccTabs type="bordered">
        <LccTab name="Tab 1">Tab 1 Content</LccTab>
        <LccTab name="Tab 2">Tab 2 Content</LccTab>
        <LccTab name="Tab 3">Tab 3 Content</LccTab>
    </LccTabs>
    </LccTab>
<LccTab name="Code">

```html
<LccTabs type="bordered">
  <LccTab name="Tab 1">Tab 1 Content</LccTab>
  <LccTab name="Tab 2">Tab 2 Content</LccTab>
  <LccTab name="Tab 3">Tab 3 Content</LccTab>
</LccTabs>
```

</LccTab>

</LccTabs>

### Boxed

<LccTabs type="lifted">
    <LccTab name="Preview">
        <LccTabs type="boxed">
        <LccTab name="Tab 1">Tab 1 Content</LccTab>
        <LccTab name="Tab 2">Tab 2 Content</LccTab>
        <LccTab name="Tab 3">Tab 3 Content</LccTab>
    </LccTabs>
    </LccTab>
<LccTab name="Code">

```html
<LccTabs type="boxed">
  <LccTab name="Tab 1">Tab 1 Content</LccTab>
  <LccTab name="Tab 2">Tab 2 Content</LccTab>
  <LccTab name="Tab 3">Tab 3 Content</LccTab>
</LccTabs>
```

</LccTab>

</LccTabs>
