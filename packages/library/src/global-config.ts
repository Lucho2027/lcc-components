import { provide, inject } from 'vue'
import { defu } from 'defu'
import type { App } from 'vue'
import type { LoadingType } from './globals/loaders'

export type Config = {
  shamefullyRegisterAllComponents?: boolean
  button: {
    loading: LoadingType
  }
}

export const defaults: Config = {
  button: {
    loading: 'spinner'
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
