import { defineNuxtModule, addComponent, installModule } from '@nuxt/kit'

// @ts-ignore
import * as LccVueComponents from 'lcc-vue/js'
import defu from 'defu'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-lcc-vue',
    configKey: 'lccVue'
  },
  // Default configuration options of the Nuxt module
  defaults: {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async setup(options, nuxt) {
    const nuxtOptions = nuxt.options as typeof nuxt.options & { tailwindcss: Record<string, any> }

    nuxtOptions.tailwindcss = nuxtOptions.tailwindcss || {}

    // @ts-ignore this works fine
    nuxtOptions.tailwindcss = defu(nuxtOptions.tailwindcss, {
      config: {
        content: [
          './node_modules/lcc-vue/src/{components,directives}/**/*.vue',
          './node_modules/nuxt-lcc-vue/node_modules/lcc-vue/src/{components,directives}/**/*.vue'
        ],
        plugins: []
      }
    })

    // this must come after the tailwind config is set
    // otherwise our config will not be used
    await installModule('@nuxtjs/tailwindcss')

    for (const key in LccVueComponents) {
      if (key.startsWith('Lcc')) {
        addComponent({
          name: key, // name of the component to be used in vue templates
          export: key,
          filePath: `lcc-vue`
        })
      }
    }
  }
})
