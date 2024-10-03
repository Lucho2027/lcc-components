<script setup lang="ts">
import { reactive, ref } from 'vue'
import LccDataTable from './LccDataTable.vue'
import LccAvatar from '../LccAvatar/LccAvatar.vue'
import { faker } from '@faker-js/faker'
import { Sizes, sizes } from '../../globals'

const state = reactive({
  size: 'md' as Sizes,
  selectable: false,
  striped: false
})

interface  User {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  age: number
}

const data = ref<User[]>([])
const selected = ref<User[]>([])

const generateMockData = () =>{
  for(let i = 0; i < 120; ++i ){
    data.value.push({
      id: i +1,
      image: faker.image.avatar(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({min: 10, max:100 })
    })
  }
}
const columns = [
{ key: 'id', label: 'ID', sortable:true},
{ key: 'image', label: ''},
{ key: 'firstName', label: 'Frist Name', sortable:true},
{ key: 'lastName', label: 'Last Name', sortable:true},
{ key: 'age', label: 'Ages', sortable:true}]


generateMockData()
</script>
<template>
  <Story >
    <Variant title="Table">
      <LccDataTable
      v-model="data"
      v-model:select="selected"
      v-bind="state"
      :columns ="columns"
      >
      <template #item-image="{ item }">
        <LccAvatar
          :src="item.image"
          size="xs"
          :placeholder="`${item.firstName.charAt(0)}${item.firstName.charAt(1)}`"
          class="bg-gray-500"
        />
      </template>
      </LccDataTable>
    </Variant>

    <template #controls>
        <HstSelect v-model="state.size" title="Size" :options="sizes" />
        <HstCheckbox v-model="state.selectable" title="Selectable"/>
        <HstCheckbox v-model="state.striped" title="Striped"/>

    </template>
  </Story>
</template>
