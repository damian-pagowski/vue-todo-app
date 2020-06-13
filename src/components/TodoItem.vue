<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <div>
      <input type="checkbox" v-on:change="markComplete" v-bind:checked="todo.completed" />
      <p>{{todo.title}}</p>
    </div>
    <button @click="deleteTodo">x</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    },
    deleteTodo() {
      this.$store.dispatch("deleteTodo", this.todo.id);
      this.$store.commit("decrement");
    }
  }
};
</script>

<style  scoped>
.todo-item input {
  margin: auto 10px;
}
.todo-item button {
  background: red;
  color: white;
  border-radius: 50%;
  padding: 5px 10px;
  margin: auto 10px;
}

.todo-item div {
  display: flex;
}
.todo-item {
  display: flex;
  align-content: center;
  justify-content: space-between;
  background: #f4f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}
.is-complete {
  text-decoration: line-through;
}
.del {
  background: red;
  color: #fff;
  border: none;
  padding: 5px 9px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
