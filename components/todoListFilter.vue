<template lang="pug">
div
  button(
    v-for="filter in filters"
    type="button"
    :class="{active: currentFilter === filter}"
    @click="filterTodosComponent(filter)"
  ) {{ filter }}
</template>

<script>
  import { mapActions } from 'pinia'
  import { todosStore } from "~/store/todos";


  export default {
    data() {
      return {
        filters: ['all', 'active', 'completed'],
        currentFilter: 'all'
      }
  },
  methods: {
    ...mapActions(todosStore, ['filterTodos']),
    filterTodosComponent(filter) {
      this.currentFilter = filter;
      this.filterTodos(filter)
    }
  }
 }
</script>

<style lang="scss">button {
  margin-right: 20px;
  background: transparent;
  font-weight: 300;
  color: inherit;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 3px;
  outline: none;

  &.active {
    border-color: rgba(175, 47, 47, 0.2);
  }

  &:last-child {
    margin-right: 0;
  }
}
</style>

