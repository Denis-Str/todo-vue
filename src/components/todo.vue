<template lang="pug">
  div.todo
    todo-input
    todo-list(
      v-if="todos.length > 0"
      :todos="filteredTodos"
    )
    pre {{ todos }}
</template>

<script>
import todoInput from './todoInput';
import todoList from './todolist';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      // todos: [],
      // filter: 'all'
    }
  },
  
  components: {
    todoList,
    todoInput
  },

  mounted() {
    setTimeout(() => {
      console.log(this.todoId(3)) // передаем аргумент
    }, 5000);
    this.fetchItems()
  },

  methods: {
    ...mapActions(['fetchItems'])
  },

  computed: {
    ...mapState({
      todos: state => state.todos.todos,
      filter: state => state.todos.filter
    }),

    ...mapGetters(['todoId']),

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
  }
}
</script>

<style lang="scss">
  .todo {
    margin-top: 100px;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
</style>
