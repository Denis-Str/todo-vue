import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "/Users/home/WebstormProjects/todo-vue/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}