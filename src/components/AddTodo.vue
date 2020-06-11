<template>
  <div>
    <form @submit="addTodo">
      <input type="text" v-model="title" name="title" placeholder="Add todo" />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
// import { v4 as uuidv4 } from 'uuid';
export default {
  name: "AddTodo",
  data() {
    return { title: "" };
  },
  methods : {
    addTodo(e){
      e.preventDefault()
      const newTodo = {
        // id: uuidv4(),
        title: this.title,
        completed: false
      }
      // send to parent
      this.$emit('add-todo', newTodo)
      // clear
      this.title = null;
    }
  }
};
</script>

<style  scoped>
form {
  display: flex;
  margin: 16px 0;
  height: 2.3rem;
}

input[type="text"] {
  flex: 10;
  padding: 5px;
}

input[type="submit"] {
  flex: 2;
}
.btn {
  padding: 5px 10px;
  border-radius: 5px;
  border: 1 px solid gray;
  background: lightseagreen;
  color: white;
}

.btn:hover {
  transform: translate(5px, 5px);
  background: white;
  color: lightseagreen;
}
</style>
