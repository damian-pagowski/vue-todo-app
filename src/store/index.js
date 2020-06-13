import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    removeTodo: (state, id) =>
      (state.todos = state.todos.filter((t) => t.id != id)),
    addTodo: (state, todo) => (state.todos = [...state.todos, todo]),
    setTodos: (state, todos) => (state.todos = todos),
  },
  getters: {},
  actions: {
    deleteTodo(state, id) {
      console.log(JSON.stringify(id));
      fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          this.commit("removeTodo", id);
          console.log("Deleted");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    postTodo(state, todo ) {
      console.log("TODO: " + JSON.stringify(todo));
      const { title, completed } = todo;
      fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, completed }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.commit("addTodo", data);
          console.log("Success:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    getAllTodos() {
      fetch("http://localhost:3000/todos")
        .then((response) => response.json())
        .then((data) => this.commit("setTodos", data))
        .catch((error) => console.log(error));
    },
  },
});

export default store;
