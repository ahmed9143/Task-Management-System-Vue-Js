<template>
  <div class="task-summary">
    <h3>Task Summary</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" :class="task.status">
        <span class="task-name">{{ task.name }}</span>
        <span class="status">{{ task.status }}</span>
        <span class="deadline">{{ formatDeadline(task.deadline) }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskSummary',
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  methods: {
    formatDeadline(deadline) {
      const date = new Date(deadline);
      return date.toLocaleDateString();
    }
  }
};
</script>

<style scoped>
.task-summary {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease-in-out;
}

.task-summary:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.task-summary h3 {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #343a40;
}

.task-summary ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.task-summary li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e9ecef;
  transition: background-color 0.2s ease-in-out;
}

.task-summary li:hover {
  background-color: #f1f3f5;
}

.task-summary li:last-child {
  border-bottom: none;
}

.task-name {
  font-size: 16px;
  color: #495057;
  flex-grow: 1;
}

.status {
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  text-align: center;
  min-width: 80px;
}

.status.Completed {
  background-color: #d4edda;
  color: #155724;
}

.status.Pending {
  background-color: #f8d7da;
  color: #721c24;
}

.deadline {
  color: #868e96;
  font-size: 14px;
  white-space: nowrap;
}
</style>
