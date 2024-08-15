<template>

  <Navbar />



  <div class="home">
    <div class="hero-section">
      <h1 class="hero-title">Welcome to Task Manager</h1>
      <p class="hero-description">
        Manage your tasks efficiently with our intuitive and user-friendly interface. 
      </p>
      <router-link to="/register" class="cta-button">Get Started</router-link>
    </div>
    <div class="features-section">
      <h2 class="features-title">Key Features</h2>

      <div class="features">

        <!-- 1 -->
        <div class="feature">
          <i class="fas fa-calendar-check feature-icon"></i>
          <h3 class="feature-title">Task Scheduling</h3>
          <p class="feature-description">
            Schedule and track your tasks with ease using our powerful calendar integration.
          </p>
        </div>
        <!-- 2 -->
        <div class="feature">
          <i class="fas fa-cogs feature-icon"></i>
          <h3 class="feature-title">Customizable Tasks</h3>
          <p class="feature-description">
            Customize tasks with different priorities and tags to fit your workflow.
          </p>
        </div>
        <!-- 3 -->
        <div class="feature">
          <i class="fas fa-chart-line feature-icon"></i>
          <h3 class="feature-title">Progress Tracking</h3>
          <p class="feature-description">
            Monitor your progress with detailed analytics and reports.
          </p>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import Navbar from './Navbar.vue';

export default {
  components: {
    Navbar,

  },
};
</script>

<style scoped>
.home {
  font-family: Arial, sans-serif;
  color: #333;
  text-align: center;
  padding: 2rem;
}

.hero-section {
  background: #007bff;
  color: #fff;
  padding: 4rem 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.hero-title {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
}

.cta-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  font-size: 1.25rem;
  color: #fff;
  background-color: #0056b3;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: #003d7a;
}

.features-section {
  padding: 2rem;
}

.features-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.feature {
  max-width: 300px;
  text-align: center;
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.feature-icon {
  font-size: 2rem;
  color: #007bff;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.feature-description {
  font-size: 1rem;
  color: #555;
}
</style>
