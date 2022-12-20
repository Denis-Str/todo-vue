import { defineStore } from "pinia";

export const rootStore = defineStore('rootStore', {
  state: () => ({
    count: 0,
  }),
  actions: {
    newCount: (value) => this.count * value,
  },
})