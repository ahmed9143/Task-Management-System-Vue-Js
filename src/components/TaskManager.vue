<template>
  <div :class="['task-manager-wrapper', { 'sidebar-open': isSidebarOpen }]">
    <Sidebar :isOpen="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
    <div class="task-manager-content">
      <div class="task-manager">
        <div class="task-form-wrapper">
          <TaskForm />
        </div>
        <div class="task-list-wrapper">
          <TaskList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskForm from '../components/TaskForm.vue';
import TaskList from '../components/TaskList.vue';
import Sidebar from './Sidebar.vue';

export default {
  components: {
    Sidebar,
    TaskForm,
    TaskList,
  },
  data() {
    return {
      isSidebarOpen: true, // You can set the initial state here
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style scoped>
/* Wrapper for centering and handling sidebar */
.task-manager-wrapper {
  display: flex;
  justify-content: center; /* Center the task manager horizontally */
  padding: 20px;
  background-color: #f8f9fa;
  transition: margin-left 0.3s ease;
}

.task-manager-content {
  flex: 1;
  display: flex;
  justify-content: center; /* Ensure task-manager stays centered */
  max-width: 1200px; /* Set max width to avoid stretching on large screens */
  width: 100%;
}

.task-manager-wrapper.sidebar-open {
  margin-left: 250px; /* Adjust this to match your sidebar width */
}

/* Task Manager Styles */
.task-manager {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.task-form-wrapper,
.task-list-wrapper {
  margin-left: 30px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.task-form-wrapper:hover,
.task-list-wrapper:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Responsive Design */
@media (min-width: 768px) {
  .task-manager {
    flex-direction: row;
    justify-content: space-between;
  }

  .task-form-wrapper,
  .task-list-wrapper {
    flex: 1;
    margin-right: 10px;
  }

  .task-form-wrapper:last-child {
    margin-right: 0;
  }
}
</style>
