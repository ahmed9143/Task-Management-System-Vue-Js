<template>
  <div class="settings-wrapper mt-5">
    <Sidebar />
    <div class="settings-container p-4">
      <h2>Settings</h2>

      <div class="settings-section">
        <h4>Profile Settings</h4>
        <form @submit.prevent="saveProfileSettings">
          <div class="form-group">
            <label for="username">Username</label>
            <input 
              type="text" 
              id="username" 
              v-model="profileSettings.username" 
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="profileSettings.email" 
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input 
              type="password" 
              id="password" 
              v-model="profileSettings.password" 
              class="form-control"
            />
          </div>
          <button type="submit" class="btn btn-primary">Save Changes</button>
        </form>
      </div>
      
      <div class="settings-section mt-4">
        <h4>Application Preferences</h4>
        <form @submit.prevent="saveAppPreferences">
          <div class="form-group">
            <label for="theme">Theme</label>
            <select 
              id="theme" 
              v-model="appPreferences.theme" 
              class="form-control"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          <div class="form-group">
            <label for="notifications">Notifications</label>
            <div>
              <input 
                type="checkbox" 
                id="notifications" 
                v-model="appPreferences.notifications"
              />
              <label for="notifications">Enable Notifications</label>
            </div>
          </div>
          <button type="submit" class="btn btn-primary">Save Preferences</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './Sidebar.vue';
export default {
  name: 'Settings',
  components: {
    Sidebar,
  },
  data() {
    return {
      profileSettings: {
        username: '',
        email: '',
        password: ''
      },
      appPreferences: {
        theme: 'light',
        notifications: false
      }
    };
  },
  methods: {
    saveProfileSettings() {
      console.log('Profile settings saved:', this.profileSettings);
    },
    saveAppPreferences() {
      console.log('Application preferences saved:', this.appPreferences);
    }
  }
};
</script>

<style scoped>
.settings-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.settings-container {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 600px;
}

.settings-section h4 {
  margin-bottom: 10px;
}

.form-group {
  margin-bottom: 15px;
}

.btn {
  width: 100%;
}
</style>
