<template>
  <div class="task-form">
    <h2>New Task</h2>
    <form @submit.prevent="submitTask">
      <div class="form-group">
        <label for="title">Title:</label>
        <input v-model="title" type="text" id="title" required />
      </div>
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea v-model="description" id="description" rows="4" required></textarea>
      </div>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: ''
    };
  },
  methods: {
    submitTask() {
      const newTask = {
        title: this.title,
        description: this.description,
        dueDate: new Date().toISOString().split('T')[0], // Default due date to today
        priority: 'Medium', // Default priority
        completed: false,
        id: Date.now() // Unique ID based on timestamp
      };
      this.$store.dispatch('tasks/addTask', newTask);
      this.title = '';
      this.description = '';
      this.$router.push('/tasks');
    }
  }
};
</script>





<style scoped>
.task-form.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 500px;
  margin: auto;
}

.form-group {
  margin-bottom: 15px;
}

input,
textarea,
select {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

textarea {
  resize: vertical;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.btn-submit {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #45a049;
}

.btn-reset {
  background-color: #f44336;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-reset:hover {
  background-color: #e53935;
}
</style>
