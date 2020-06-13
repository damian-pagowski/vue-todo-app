<template>
  <div>
    <h1>Total: {{this.$store.state.todos.length}}</h1>
    <div v-bind:key="todo.id" v-for="todo in todos">
      <TodoItem v-bind:todo="todo" />
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
  name: "Todos",
  components: { TodoItem },
  methods: {},
  computed: {
    todos() {
      return this.$store.state.todos;
    }
  },
  created() {
    this.$store.dispatch("getAllTodos");
  }
};
</script>

<style  scoped>
</style>
