import { provide, inject } from 'vue'
import { defu } from 'defu'
import type { App } from 'vue'

export type Config = {
  shamefullyRegisterAllComponents?: boolean
  button: {

  }
}

export const defaults: Config = {
  button: {
    
  }
}

export const configKey = 'lccVueProvideInjectKey'
export function setConfig(config: Config, app?: App) {
  if (app) {
    app.provide(configKey, defu(config, defaults))
  } else {
    provide(configKey, defu(config, defaults))
  }
}

export function useConfig() {
  return inject(configKey, defaults)
}
