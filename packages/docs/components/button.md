<script setup lang="ts">
import {LccButton, LccTabs, LccTab} from 'lcc-vue';
import {colorsBrand, colorsState, sizes, loadingType} from "lcc-vue/globals"
</script>

# Button Component

## Without any props

<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="flex gap-8 place-content-center">
   <LccButton>Click Me!</LccButton>
  </LccTab>
  <LccTab name="Code">

```vue
<LccButton>Click Me!</LccButton>
```

  </LccTab>
</LccTabs>

## With Brand Colors

<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="flex gap-4 place-content-center">
   <LccButton v-for="c in [...colorsBrand, 'ghost', 'link' ]" :color="c" :key="c">{{ c }}</LccButton>
  </LccTab>
  <LccTab name="Code">

<template v-for="c in [...colorsBrand, 'ghost', 'link' ]" :color="c" :key="c" >

```vue-vue
<LccButton :color="{{c}}">{{c}}</LccButton>
```

</template>
  </LccTab>
</LccTabs>

## With State Colors

<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="flex gap-4 place-content-center">
   <LccButton v-for="c in colorsState" :color="c" :key="c">{{ c }}</LccButton>
  </LccTab>
  <LccTab name="Code">

<template v-for="c in [...colorsState ]" :color="c" :key="c" >

```vue-vue
<LccButton :color="{{c}}">{{c}}</LccButton>
```

</template>
  </LccTab>
</LccTabs>

## Outline buttons

<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="flex gap-4 place-content-center">
   <LccButton v-for="c in [...colorsBrand]" :color="c" :key="c" :outline="true">{{ c }}</LccButton>
  </LccTab>
  <LccTab name="Code">

<template v-for="c in [...colorsBrand]" :color="c" :key="c" >

```vue-vue
<LccButton :color="{{c}}" :outline="true">{{c}}</LccButton>
```

</template>
  </LccTab>
</LccTabs>

## Outline buttons with state colors

<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="flex gap-4 place-content-center">
   <LccButton v-for="c in colorsState" :color="c" :key="c" :outline=true>{{ c }}</LccButton>
  </LccTab>
  <LccTab name="Code">

<template v-for="c in [...colorsState ]" :color="c" :key="c">

```vue-vue
<LccButton :color="{{c}}" :outline="true">{{c}}</LccButton>
```

</template>
  </LccTab>
</LccTabs>

## Buttons sizes

<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="flex gap-4 place-content-center">
   <LccButton v-for="s in sizes" :size="s" :key="s">{{s}}</LccButton>
  </LccTab>
  <LccTab name="Code">

<template v-for="s in sizes" :size="s" :key="s">

```vue-vue
<LccButton :color="{{s}}">{{s}}</LccButton>
```

</template>
  </LccTab>
</LccTabs>


## Buttons with loading spinner

<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="flex gap-4 place-content-center">
   <LccButton loading="true" loading-type="spinner" ></LccButton>
  </LccTab>
  <LccTab name="Code">


```vue-vue
<LccButton loading="true" loading-type="spinner" ></LccButton>
```

  </LccTab>
</LccTabs>

## Buttons with loading spinner and text
<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="flex gap-4 place-content-center">
   <LccButton v-for="t in loadingType" :key="t" loading="true" :loading-type="t">{{t}}</LccButton>
  </LccTab>
  <LccTab name="Code">

<template v-for="t in loadingType" :key="t" loading="true" :loading-type="t">

```vue-vue
<LccButton loading="true" :loading-type="{{t}}">{{t}}</LccButton>
```

</template>
  </LccTab>
</LccTabs>

## Square button

<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="flex gap-4 place-content-center">
   <LccButton square="true" loading="true" ></LccButton>
  </LccTab>
  <LccTab name="Code">


```vue-vue
<LccButton loading="true" loading-type="spinner" >loading</LccButton>
```

  </LccTab>
</LccTabs>


## Circle button

<LccTabs :type="'lifted'">
  <LccTab name="Preview" class="flex gap-4 place-content-center">
   <LccButton circle="true" loading="true" ></LccButton>
  </LccTab>
  <LccTab name="Code">


```vue-vue
<LccButton circle="true" loading="true" ></LccButton>
```

  </LccTab>
</LccTabs>