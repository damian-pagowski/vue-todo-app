<template>
  <div class="todo-item" v-bind:class="{'is-complete':todo.completed}">
    <div>
      <input type="checkbox" v-on:change="markComplete" v-bind:checked="todo.completed" />
      <p>{{todo.title}}</p>
    </div>
    <button @click="$emit('del-todo', todo.id)">x</button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style  scoped>
.todo-item input {
  /* display: block; */
  margin: auto 10px;
  /* height: 100%; */
}
.todo-item button {
  background: red;
  color: white;
  border-radius: 50%;
  /* border: 1px solid gray; */
  padding: 5px 10px;
  margin: auto 10px;
  /* height: 100%; */
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
