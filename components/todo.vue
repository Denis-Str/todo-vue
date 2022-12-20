<template lang="pug">
div.todo
  todo-input
  todo-list(
    v-if="show"
    :todos="filteredTodos"
  )
  //pre {{ count }}
</template>

<script>
import { mapState } from 'pinia';
import { todosStore } from "~/store/todos";
import { rootStore } from "~/store/defineStore";

import todoInput from '~/components/todoInput';
import todoList from "~/components/todoList.vue";


export default {
  components: {
    todoList,
    todoInput
  },

  computed: {
    ...mapState(todosStore, {
      todos: store => store.todos,
      filter: store => store.filter,
    }),
    ...mapState(rootStore, {
      count: store => store.count,
    }),
    show() {
      return this.todos.length > 0;
    },

    filteredTodos() {
      switch(this.filter) {
        case 'all' :
          return this.todos;
        case 'active' :
          return this.todos.filter(item => item.checked === false)
        case 'completed' :
          return this.todos.filter(item => item.checked)
      }
    }
  },
}
</script>

<style lang="scss">
  .todo {
    margin-top: 100px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
</style>
