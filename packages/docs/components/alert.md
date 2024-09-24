<script setup lang="ts">
import {LccAlert, LccTabs, LccTab} from 'lcc-vue';
import {states} from "lcc-vue/globals"
</script>

# Alert Component

## Without any props

<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="flex gap-4 place-content-center">
   <LccAlert>Alert Component</LccAlert>
  </LccTab>
  <LccTab name="Code">

```vue-vue
 <LccAlert>Alert Component</LccAlert>
```

  </LccTab>
</LccTabs>

## With State Colors

<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="grid gap-2 ">
   <LccAlert v-for="s in states" :type="s" :key="s">{{ s }}</LccAlert>
  </LccTab>
  <LccTab name="Code">

<template v-for="s in states" :type="s" :key="s" >

```vue-vue
<LccAlert :type="{{s}}">{{s}}</LccAlert>
```

</template>
  </LccTab>
</LccTabs>

## With Dismiss button

<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="grid gap-2 ">
   <LccAlert :dismissible="true">With dismiss button</LccAlert>
  </LccTab>
  <LccTab name="Code">



```vue-vue
<LccAlert :dismissible="true">With dismiss button</LccAlert>
```

</LccTab>
</LccTabs>

## With Dismiss button and Long Text

<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="grid gap-2 ">
   <LccAlert :dismissible="true"> 
        With dismiss button
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </LccAlert>    
  </LccTab>
  <LccTab name="Code">



```vue-vue
<LccAlert :dismissible="true">
        With dismiss button
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</LccAlert>
```

</LccTab>
</LccTabs>