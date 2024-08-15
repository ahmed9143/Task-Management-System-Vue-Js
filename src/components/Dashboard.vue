<template>
  <div :class="{'dashboard-container': true, 'dark-mode': isDarkMode, 'sidebar-collapsed': isSidebarCollapsed}">
    <Sidebar :collapsed="isSidebarCollapsed" @toggleSidebar="toggleSidebar"/>
    <main class="dashboard-content">
      <div class="dashboard-header">
        <h1>Dashboard</h1>
        <div class="user-actions">
          <input v-model="searchQuery" placeholder="Search..." class="search-bar" />
          <NotificationBell :notifications="notifications" />
          <UserProfile/>
          <button @click="toggleDarkMode" class="toggle-dark-mode" :class="{ 'dark-mode': isDarkMode }">
            <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
          </button>
        </div>
      </div>

      <div class="widget-container">
        <StatisticsCard title="Total Tasks" :value="totalTasks" icon="tasks-icon" />
        <StatisticsCard title="Completed Tasks" :value="completedTasks" icon="check-icon" />
        <ChartWidget :data="taskCompletionData" type="bar" title="Task Completion" />
        <RecentActivity :activities="recentActivities" />
        <TaskSummary :tasks="tasks" />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue'; 
import StatisticsCard from './widgets/StatisticsCard.vue';
import ChartWidget from './widgets/ChartWidget.vue';
import RecentActivity from './widgets/RecentActivity.vue';
import TaskSummary from './widgets/TaskSummary.vue';

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    StatisticsCard,
    ChartWidget,
    RecentActivity,
    TaskSummary
  },
  data() {
    return {
      isDarkMode: false,
      isSidebarCollapsed: false,
      searchQuery: '',
      notifications: [
        { message: 'Task A completed', timestamp: '2 hours ago' },
        { message: 'Task B deadline approaching', timestamp: '1 day ago' },
      ],
      totalTasks: 50,
      completedTasks: 35,
      taskCompletionData: {
        labels: ['Completed', 'Pending'],
        datasets: [
          {
            label: 'Tasks',
            data: [35, 15],
            backgroundColor: ['#42A5F5', '#66BB6A'],
          }
        ]
      },
      recentActivities: [
        { activity: 'Logged in', timestamp: 'Just now' },
        { activity: 'Updated task', timestamp: '1 hour ago' },
      ],
      tasks: [
        { name: 'Task A', status: 'Completed', deadline: '2024-08-10' },
        { name: 'Task B', status: 'Pending', deadline: '2024-08-15' },
      ]
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    },
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
  }
};
</script>

<style scoped>
.dashboard-container {
  display: flex;
  height: 100vh;
  transition: background-color 0.3s ease;
  transition: margin-left 0.3s ease; /* Add transition for smooth margin change */
}

.dashboard-container.dark-mode {
  background-color: #343a40;
  color: #ffffff;
}

.dashboard-container.sidebar-collapsed .dashboard-content {
  margin-left: 60px; /* Adjust this based on collapsed sidebar width */
}

.dashboard-content {
  margin-left: 270px; /* Default width when sidebar is expanded */
  padding: 20px;
  flex-grow: 1;
  transition: margin-left 0.3s ease; /* Add transition for smooth margin change */
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  margin-left: 40px;
}

.search-bar {
  padding: 10px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.toggle-dark-mode {
  padding: 10px 20px;
  background-color: #343a40;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggle-dark-mode:hover {
  background-color: #343a40;
}

.widget-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.widget {
  background: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .dashboard-content {
    margin-left: 0;
    padding: 10px;
  }

  .widget-container {
    grid-template-columns: 1fr;
  }
}
</style>
