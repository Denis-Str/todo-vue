<template lang="pug">
.todo-item(:class="{ checked: todo.checked }")
  label.label
    .input-block
      input(
        type="checkbox"
        @change="checkTodoItem"
        :checked="todo.checked"
      ).input
    .title {{ todo.name }}
  .button
    router-link(
      tag="button"
      :to="`/view/${todo.name}`"
    ).view &#10148;
  .button
    button(
      type="button"
      @click="removeTodoItem"
    ).remove &#10008;
</template>

<script>
  import {mapMutations} from 'vuex';

  export default {
    props: {
      todo: {
        type: Object,
        default: {}
      }
    },
    methods: {
      ...mapMutations(['removeTodo', 'checkTodo']),
      removeTodoItem() {
        this.removeTodo(this.todo.id)
      },
      checkTodoItem(e) {
        const todoItem = {
          ...this.todo,
          checked: e.target.checked
        }
        this.checkTodo(todoItem)
      }
    }
  }
</script>

<style lang="scss" scope>
  .todo-item {
    display: flex;
    align-items: center;
    &:hover {
      .remove {
        visibility: visible;
      }
      .view {
        visibility: visible;
      }
  }
}
.view {
  visibility: hidden;
  color: green;
  border: 1px solid green;
  cursor: pointer;
}
.checked .title {
  text-decoration: line-through;
}
.label {
  display: flex;
  align-items: center;
  flex: 1;
}
.input-block {
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  padding: 15px 0;
  display: block;
  line-height: 1.2;
}
.button {
  width: 40px;
}
.remove {
  background: transparent;
  border: none;
  color: firebrick;
  cursor: pointer;
  font-size: 20px;
  visibility: hidden;
}
</style>
