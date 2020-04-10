const todos = {
  state: {
    todos: [],
    filter: 'all'
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo)
    },
    removeTodo(state, todoId) {
      state.todos = state.todos.filter(todo => todo.id !== todoId)
    },
    checkTodo(state, todo) {
      state.todos = state.todos.map(item => (item.id === todo.id ? todo : item))
    },
    filterTodos(state, filter) {
      state.filter = filter;
    },
    testMutations(state, payload) {
      console.log('testMutations', payload)
    }
  },
  actions: { // для подгрузки данных
    fetchItems(store) {
      store.commit('testMutations', 333) // вызов мутации
      store.dispatch('anoterAction', 777) // вызов action из другого action
      console.log(store)
    },
    anoterAction() {
      console.log('another action');
    }
  },
  getters: {// для получения значений
    todoId: (state) => (id) => {
      console.log(id);

      return state.todos.filter(item => item.id === id)
    }
  }
}
export default todos;