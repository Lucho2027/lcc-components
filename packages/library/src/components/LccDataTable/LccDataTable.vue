<script setup lang="ts">
import { Sizes } from '../../globals';
import { defineProps, computed, ref } from 'vue';
import { Icon } from '@iconify/vue'

const props = withDefaults(defineProps<{
  id?:string
  size:Sizes
  selectable: boolean
  striped: boolean
  columns:{
    key: string
    label: string
    sortable?:boolean
  }[]
}>(),{
  id:'id',
  size:'md',
  selectable: true
})

const data = defineModel<Record<string, any>[]>({required: true})
const selected = defineModel<Record<string, any>[]>('select')

const sortedBy = ref<{
  key: string
  order: 'asc' | 'desc'
  } | null>({
    key:'',
    order: 'asc'
  })

const sort = (c: string) =>{
  if(!sortedBy.value) return
  sortedBy.value.key = c
  data.value.sort((a,b) => {
    if(sortedBy.value){
      if(sortedBy.value.order === 'asc'){
        return a[sortedBy.value.key] > b[sortedBy.value.key] ? 1 : -1
      }else{
        return a[sortedBy.value.key] < b[sortedBy.value.key] ? 1 : -1
      }
    }
    return 0
  })
  sortedBy.value.order = sortedBy.value.order === 'asc' ? 'desc' : 'asc'
}

const sizeClass = computed(()=>{
  return {
    xs: 'table-xs',
    sm:'table-sm',
    md: 'table-md',
    lg:'table-lg'
  }[props.size]
})

const stripedClass= computed(()=> props.striped ? 'table-zebra' : '')
const classes = computed(() => [sizeClass.value, stripedClass.value])

const isSelectable = computed(()=> props.selectable && selected.value)

</script>
<template>
  <div class="overflow-x-auto">
  <table class="table" :class="classes">
    <!-- head -->
    <thead>
      <tr>
        <th v-if="isSelectable"></th>
        <th v-for="c in columns" :key="c.key">
          <component
              :is="c.sortable ? 'button' : 'div'"
              @click="$event => c.sortable ? sort(c.key) : (() => {})()"
              class="flex items-center"
            >
              {{ c.label }}
              <span v-if="sortedBy && sortedBy.key === c.key">
                <Icon icon="mdi:chevron-up" v-if="sortedBy.order === 'asc'" class="w-5 h-5" />
                <Icon icon="mdi:chevron-down" v-if="sortedBy.order === 'desc'" class="w-5 h-5" />
              </span>
              <span v-else class="inline-block w-5 h-5"></span>
            </component>
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->
      <tr
      v-for="item in data"
      :key="item[id]"
      :class="
      {'bg-base-100': selected && selected.map((s)=> s[id].includes(item[id]))}
      "
      >
        <th v-if="isSelectable">
          <input :value="item" class="checkbox" type="checkbox" v-model="selected"/>
        </th>
        <th v-for="c in columns" :key="c.key">
          <slot :name="`item-${c.key}`" :item="item" >{{  item[c.key] }}</slot>
        </th>
      </tr>
     
    </tbody>

  </table>
</div>
</template>