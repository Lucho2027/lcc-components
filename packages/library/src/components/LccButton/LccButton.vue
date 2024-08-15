<script setup lang="ts">

</script>

<template>
  <div class="btn btn-primary">
    Hello LccButton
  </div>
</template>
<style scoped>
.btn{
  @apply inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto

  &-primary{
    bg-blue-500 hover:bg-blue-600
  }
}
</style>
