<template>
  <div class="user-profile">
    <Sidebar class="sidebar" />
    <div class="profile-container mt-5 ml-5">
      <!-- User Header Section -->
      <div class="user-header">
        <div class="user-avatar">
          <img :src="user.avatar" :alt="user.name" />
        </div>
        <div class="user-info">
          <h2 class="user-name">{{ user.name }}</h2>
          <p class="user-email">{{ user.email }}</p>
          <p class="user-role">{{ user.role }}</p>
          <div class="user-meta">
            <p><strong>Location:</strong> {{ user.location }}</p>
            <p><strong>Joined:</strong> {{ formatDate(user.joinedDate) }}</p>
          </div>
          <button @click="editProfile" class="btn btn-primary">Edit Profile</button>
        </div>
      </div>

      <!-- User Stats Section -->
      <div class="user-stats">
        <div class="stat">
          <h3>Tasks Completed</h3>
          <p>{{ user.tasksCompleted }}</p>
        </div>
        <div class="stat">
          <h3>Projects Involved</h3>
          <p>{{ user.projectsInvolved }}</p>
        </div>
        <div class="stat">
          <h3>Reputation Points</h3>
          <p>{{ user.reputationPoints }}</p>
        </div>
      </div>

      <!-- User Activities Section -->
      <div class="user-activities">
        <h3>Recent Activities</h3>
        <ul>
          <li v-for="(activity, index) in user.recentActivities" :key="index">
            {{ activity }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '../Sidebar.vue';

export default {
  name: 'UserProfile',
  components: {
    Sidebar
  },
  data() {
    return {
      user: {
        avatar: 'https://via.placeholder.com/150',
        name: 'John Doe',
        email: 'johndoe@example.com',
        role: 'Frontend Developer',
        location: 'New York, USA',
        joinedDate: '2023-04-12',
        tasksCompleted: 120,
        projectsInvolved: 8,
        reputationPoints: 350,
        recentActivities: [
          'Completed task "Design Homepage"',
          'Commented on project "New Website Launch"',
          'Updated profile picture',
          'Joined project "E-commerce Platform"',
        ]
      }
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    },
    editProfile() {
      console.log('Edit Profile Clicked');
    }
  }
};
</script>

<style scoped>
.user-profile {
  margin-left: 100px;
  display: flex;
  background-color: #f4f4f4;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
}

.profile-container {
  flex: 1;
  margin: 40px auto;
  max-width: 800px;
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.user-header {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}

.user-avatar img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  object-fit: cover;
  border: 3px solid #3498db;
  margin-right: 30px;
}

.user-info {
  flex: 1;
}

.user-name {
  font-size: 1.8em;
  margin: 0 0 10px;
  color: #2c3e50;
}

.user-email, .user-role {
  color: #7f8c8d;
  margin: 0 0 5px;
}

.user-meta {
  margin: 15px 0;
  font-size: 1em;
  color: #95a5a6;
}

.user-meta p {
  margin: 5px 0;
}

.user-stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.stat {
  flex: 1;
  text-align: center;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.stat h3 {
  margin-bottom: 10px;
  font-size: 1.2em;
  color: #2c3e50;
}

.stat p {
  font-size: 2em;
  color: #3498db;
  margin: 0;
}

.user-activities {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.user-activities h3 {
  margin-bottom: 20px;
  font-size: 1.5em;
  color: #2c3e50;
}

.user-activities ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.user-activities li {
  margin-bottom: 10px;
  color: #7f8c8d;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  color: #fff;
}

.btn-primary {
  background-color: #3498db;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #2980b9;
}
</style>
