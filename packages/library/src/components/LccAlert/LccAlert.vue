<script setup lang="ts">
import { computed, ref} from 'vue';
import { Icon } from '@iconify/vue';
import type { States } from '../../globals';


const dismissed =ref(false);
const transitionDuration = 500;
const transitionCssRule = `all ${transitionDuration}ms`

const props  = withDefaults(defineProps<{
  /** Affects the color and icon
   * @default undefined
   */
  type?:States
  /** When true, display an "x" button to dismiss the alert. When clicked the alert is hidden
   * @default false
   */
  dismissible?:boolean
}>(), {dismissible: false})

const emit = defineEmits<{
  /** Emitted when the alert is dismissed and completely transitioned out */
dismiss: [payload:void]
}>()

const classes = computed(() =>{
  return  {
    info: 'alert-info',
    success: 'alert-success',
    warning: 'alert-warning',
    error:'alert-error'
  }[props.type]
})

const handleDismiss = () =>{
  dismissed.value =true;
  setTimeout(()=>{
    emit('dismiss')
  }, transitionDuration)
}

const icon = computed(() => {
  if(!props.type) return 'mdi:information-variant-box-outline';
  return{
    info:'mdi:information-variant-box-outline',
    success:'mdi:success-circle-outline',
    warning:'mdi:warning-outline',
    error:'mdi:ban'
  }[props.type]
})
</script>
<template>
    <Transition>
      <div v-if="!dismissed" role="alert" class="alert" :class="classes">
        <Icon :icon="icon" width="1.5rem"/>
        <span><slot></slot></span>
        <button
         @click="handleDismiss"
         v-if="dismissible"
         class="text-lg close"
         data-dismiss="alert"
         aria-label="Close">
          <Icon icon="mdi:close-circle-outline" aria-hidden="true" width="1.5rem"/>
        </button>
      </div>
    </Transition>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: v-bind(transitionCssRule)
}
.v-enter-from,
.v-leave-to{
  opacity: 0;
  transform: translateX(100%);
}
</style>