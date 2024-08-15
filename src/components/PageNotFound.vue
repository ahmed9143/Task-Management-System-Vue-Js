<template>
  <div class="page-not-found">
    <div class="container">
      <h1 class="error-code">404</h1>
      
      <h2 class="error-message">Oops! Page Not Found</h2>

      <p class="error-description">
        The page you're looking for doesn't exist. Go back to the home page.
      </p>
      
      <router-link class="back-home" to="/">Go to Home</router-link>
      
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.page-not-found {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to bottom, #f4f4f4 0%, #e0e0e0 100%);
  font-family: 'Arial', sans-serif;
  text-align: center;
  padding: 20px;
}

.container {
  max-width: 600px;
  padding: 40px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.error-code {
  font-size: 120px;
  font-weight: 700;
  color: #d9534f;
  margin: 0;
}

.error-message {
  font-size: 36px;
  font-weight: 600;
  color: #333;
  margin: 10px 0;
}

.error-description {
  font-size: 16px; /* Adjusted font size */
  color: #555;
  margin-bottom: 20px;
  line-height: 1.5;
}

.back-home {
  font-size: 16px;
  color: #ffffff;
  text-decoration: none;
  border: 2px solid #007bff;
  padding: 12px 24px;
  border-radius: 8px;
  background: #007bff;
  transition: background-color 0.3s, transform 0.3s;
}

.back-home:hover {
  background: #0056b3;
  color: #ffffff;
  transform: scale(1.05);
}

.back-home:focus {
  outline: 2px solid #0056b3;
  outline-offset: 2px;
}
</style>
