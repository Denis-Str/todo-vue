import { defineStore } from 'pinia'

export const todosStore = defineStore('todos', {
  state: () => ({
    todos: [],
    filter: 'all'
  }),
  getters: {
    todoId: (state) => (id) => state.todos.filter(item => item.id === id),
  },
  actions: {
    addTodo(todo) {
      this.todos.push(todo)
    },
    removeTodo(todoId) {
      this.todos = this.todos.filter(todo => todo.id !== todoId)
    },
    checkTodo(todo) {
      this.todos = this.todos.map(item => (item.id === todo.id ? todo : item))
    },
    filterTodos(filter) {
      this.filter = filter;
    },
  },
})
