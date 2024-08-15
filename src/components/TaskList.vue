<template>
  <div class="task-list">

    <Sidebar />


    <h2>Tasks</h2>
    <div v-if="tasks.length === 0" class="no-tasks">No tasks available</div>
    <div class="filters">
      <input v-model="searchQuery" placeholder="Search tasks..." />
      <select v-model="filterStatus">
        <option value="">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
      <select v-model="sortOption">
        <option value="dueDate">Due Date</option>
        <option value="priority">Priority</option>
      </select>
    </div>
    <ul>
      <li v-for="task in sortedTasks" :key="task.id" class="task-card">
        <div class="task-header">
          <input type="checkbox" v-model="task.completed" @change="updateTask(task)" />
          <span class="task-title">{{ task.title }}</span>
          <span :class="`priority ${task.priority.toLowerCase()}`">{{ task.priority }}</span>
        </div>
        <p>{{ task.description }}</p>
        <p class="due-date" :class="{'overdue': isOverdue(task.dueDate)}">
          Due Date: {{ formatDate(task.dueDate) }}
        </p>
        <div class="task-actions">
          <button @click="openEditModal(task)">Edit</button>
          <button @click="deleteTask(task.id)">Delete</button>
        </div>
      </li>
    </ul>
    <div v-if="showEditModal" class="edit-modal">
      <div class="modal-content">
        <h3>Edit Task</h3>
        <form @submit.prevent="submitEdit">
          <div class="form-group">
            <label for="edit-title">Title:</label>
            <input v-model="editTask.title" type="text" id="edit-title" required />
          </div>
          <div class="form-group">
            <label for="edit-description">Description:</label>
            <textarea v-model="editTask.description" id="edit-description" rows="4" required></textarea>
          </div>
          <button type="submit">Save Changes</button>
          <button type="button" @click="closeEditModal">Cancel</button>
        </form>
      </div>
    </div>
  </div>
  
</template>

<script>
import Sidebar from './Sidebar.vue';

export default {
  data() {
    components:{

      Sidebar

    };
    return {
      searchQuery: '',
      filterStatus: '',
      sortOption: 'dueDate',
      showEditModal: false,
      editTask: null
    };
  },
  computed: {
    tasks() {
      return this.$store.getters['tasks/allTasks'];
    },
    filteredTasks() {
      return this.tasks.filter(task => {
        const matchesQuery = task.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                             task.description.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesStatus = this.filterStatus === '' || (this.filterStatus === 'completed' && task.completed) ||
                              (this.filterStatus === 'pending' && !task.completed);
        return matchesQuery && matchesStatus;
      });
    },
    sortedTasks() {
      return [...this.filteredTasks].sort((a, b) => {
        if (this.sortOption === 'dueDate') {
          return new Date(a.dueDate) - new Date(b.dueDate);
        } else if (this.sortOption === 'priority') {
          return a.priority.localeCompare(b.priority);
        }
        return 0;
      });
    }
  },
  methods: {
    updateTask(task) {
      this.$store.dispatch('tasks/updateTask', task);
    },
    openEditModal(task) {
      this.editTask = { ...task };
      this.showEditModal = true;
    },
    closeEditModal() {
      this.showEditModal = false;
      this.editTask = null;
    },
    submitEdit() {
      this.$store.dispatch('tasks/updateTask', this.editTask);
      this.closeEditModal();
    },
    deleteTask(taskId) {
      this.$store.dispatch('tasks/deleteTask', taskId);
    },
    isOverdue(dueDate) {
      return new Date(dueDate) < new Date();
    },
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    }
  }
};
</script>






<style scoped>
.task-list {
  padding: 20px;
}

.filters {
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
}

.filters input,
.filters select {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.task-card {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  padding: 15px;
  transition: transform 0.2s, box-shadow 0.2s;
}

.task-card:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.task-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.task-title {
  font-weight: bold;
  font-size: 1.2em;
}

.priority {
  padding: 5px;
  border-radius: 4px;
  font-size: 0.9em;
}

.priority.high {
  background-color: #f44336;
  color: white;
}

.priority.medium {
  background-color: #ff9800;
  color: white;
}

.priority.low {
  background-color: #4caf50;
  color: white;
}

.due-date {
  font-size: 0.9em;
  color: #555;
}

.due-date.overdue {
  color: red;
}

.task-actions button {
  margin-right: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: #007bff;
  color: white;
}

.task-actions button:hover {
  background-color: #0056b3;
}

.no-tasks {
  text-align: center;
  color: #999;
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 500px;
  max-width: 90%;
  position: relative;
}

.modal-content h2 {
  margin-top: 0;
}

.modal .close {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.5em;
}

.modal .close:hover {
  color: red;
}



/* edit task */
.edit-modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  z-index: 1000;
}

.modal-content {
  padding: 20px;
}

h3 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: #555;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

input[type="text"]:focus,
textarea:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

button[type="submit"],
button[type="button"] {
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"] {
  background-color: #007bff;
  color: white;
  border: none;
  margin-right: 10px;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

button[type="button"] {
  background-color: #6c757d;
  color: white;
  border: none;
}

button[type="button"]:hover {
  background-color: #5a6268;
}




</style>
