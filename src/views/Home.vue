
<template>
  <div>
    <!-- <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />-->
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import Todos from "../components/Todos.vue";
import AddTodo from "../components/AddTodo.vue";
// import Header from "../components/layout/Header";
export default {
  name: "Home",
  components: {
    Todos,
    // Header,
    AddTodo
  },
  // data() {
  //   return {
  //     todos: []
  //   };
  // }
  // methods: {
  //   deleteTodo(id) {
  //     fetch(`http://localhost:3000/todos/${id}`, {
  //       method: "DELETE"
  //     })
  //       .then(() => {
  //         this.todos = this.todos.filter(t => t.id != id);
  //         console.log("Deleted");
  //       })
  //       .catch(error => {
  //         console.error("Error:", error);
  //       });
  //   },
  //   addTodo(todo) {
  //     const { title, completed } = todo;
  //     fetch("http://localhost:3000/todos", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ title, completed })
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         this.todos = [...this.todos, data];
  //         console.log("Success:", data);
  //       })
  //       .catch(error => {
  //         console.error("Error:", error);
  //       });
  //   }
  // },
  // created() {
  //   fetch("http://localhost:3000/todos")
  //     .then(response => response.json())
  //     .then(data => (this.todos = data))
  //     .catch(error => console.log(error));
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  max-width: 720px;
  margin: 60px auto;
}
</style>
