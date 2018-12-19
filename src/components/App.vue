<template>
  <div class="App">
    {{ emptyTodoAssigneesLength }}
  </div>
</template>

<script>
import Todo from '@/models/Todo'
import store from '../store'

export default {
  store,

  data () {
    return {
      emptyTodoAssigneesLength: null
    }
  },

  created () {
    // Here we are stubbing the initial data. In the real world, this
    // should be the response from the API Backend.
    const initialData = [
      {
        id: 1,
        title: 'Create awesome application!',
        done: false,
        assignees: []
      }
    ]
    this.$store.dispatch('entities/todos/create', { data: initialData })
  },

  mounted () {
    // Should set emptyTodoAssigneesLength to 0
    // Instead => Cannot read property 'length' of undefined
    this.emptyTodoAssigneesLength = Todo.query().withAllRecursive().find(1).assignees.length
  }
}
</script>
