//подключение vuex
import { createStore } from 'vuex'

// использование стора vuex
const store = createStore({
  state() {
      return {
        count: 0,
      }
  },
  mutations: {},
  actions: {},
})

//так надо подключить стор vuex
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  // Install the store instance as a plugin
});
