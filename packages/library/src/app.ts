import { createApp } from 'vue'
import App from './App.vue'
import { createLccVue } from './main'

const lccVue = createLccVue({
  shamefullyRegisterAllComponents: true,
  button: {
    loading: 'infinity'
  }
})

createApp(App).use(lccVue).mount('#app')
