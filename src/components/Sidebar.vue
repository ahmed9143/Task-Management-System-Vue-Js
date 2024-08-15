<template>
  <div :class="['sidebar', { 'collapsed': isCollapsed }]">
    <button @click="toggleSidebar" class="toggle-btn">
      <i :class="isCollapsed ? 'fas fa-chevron-right' : 'fas fa-chevron-left'"></i>
    </button>
    <nav class="sidebar-nav">
      <ul class="sidebar-list">
        <!-- Navigation Links -->
        <li 
          v-for="item in menuItems" 
          :key="item.name" 
          :class="['sidebar-item', { active: item.path === currentPath }]"
        >
          <router-link :to="item.path" class="sidebar-link">
            <i :class="item.icon"></i>
            <span>{{ isCollapsed ? '' : item.name }}</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <div class="sidebar-footer">
      <!-- Logout Link -->
      <button @click="logout" class="logout-btn">
        <i class="fas fa-sign-out-alt"></i>
        <span v-if="!isCollapsed">Logout</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      menuItems: [
        { name: 'UserProfile', path: '/user-profile', icon: 'fas fa-user' },
        { name: 'Dashboard', path: '/dashboard', icon: 'fas fa-home' },
        { name: 'Settings', path: '/settings', icon: 'fas fa-cogs' },
        { name: 'TaskManager', path: '/tasks', icon: 'fas fa-cogs' }
      ],
      currentPath: '',
      isCollapsed: false
    };
  },
  mounted() {
    this.currentPath = this.$route.path;
  },
  watch: {
    '$route.path': function(newPath) {
      this.currentPath = newPath;
    }
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
      this.$emit('toggleSidebar');
    },
    logout() {
      localStorage.removeItem('authToken');
      sessionStorage.removeItem('authToken');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped>
/* General Sidebar Styles */
.sidebar {
  width: 260px;
  background-color: #2c3e50;
  color: #ecf0f1;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 6px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
}

.sidebar.collapsed {
  width: 70px;
}

.sidebar-nav {
  flex-grow: 1;
}

.sidebar-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Sidebar Item Styles */
.sidebar-item {
  margin-bottom: 10px;
}

.sidebar-link {
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: #bdc3c7;
  text-decoration: none;
  border-radius: 8px;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
}

.sidebar-link i {
  margin-right: 15px;
  font-size: 18px;
  transition: color 0.3s;
}

.sidebar-link span {
  font-weight: 500;
  font-size: 16px;
  transition: opacity 0.3s ease;
}

.sidebar.collapsed .sidebar-link span {
  opacity: 0;
  width: 0;
}

.sidebar.collapsed .sidebar-link i {
  margin-right: 0;
  text-align: center;
  width: 100%;
}

/* Hover and Active States */
.sidebar-link:hover {
  background: #34495e;
  color: #ecf0f1;
  box-shadow: inset 3px 0 0 #1abc9c;
}

.sidebar-item.active .sidebar-link {
  background: #1abc9c;
  color: #fff;
  box-shadow: inset 3px 0 0 #16a085;
}

.sidebar-item.active .sidebar-link i {
  color: #fff;
}

/* Toggle Button Styles */
.toggle-btn {
  background: #1abc9c;
  border: none;
  color: #ecf0f1;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  position: absolute;
  top: 20px;
  right: -30px;
  transition: right 0.3s ease;
}

.sidebar.collapsed .toggle-btn {
  right: -60px;
}

/* Sidebar Footer Styles */
.sidebar-footer {
  margin-top: auto;
  padding: 15px 20px;
  border-top: 1px solid #34495e;
}

.logout-btn {
  background: #e74c3c;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  width: 15px;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  align-items: center;
  transition: background 0.3s, transform 0.3s;
}

.logout-btn i {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 20px;
}

.logout-btn:hover {
  background: #c0392b;
  transform: scale(1.05);
}
</style>
