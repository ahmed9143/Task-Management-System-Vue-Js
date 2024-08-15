<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div class="container">
        <a class="navbar-brand" href="#">Task Manager</a>
        <div class="collapse navbar-collapse justify-content-end">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link">Register</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about-me" class="nav-link">About Me </router-link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  .navbar {
    padding: 1rem 2rem;
  }
  
  .navbar-brand {
    font-weight: 500;
    font-size: 1.5rem;
  }
  
  .nav-link {
    font-weight: 500;
    color: #343a40 !important;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover {
    color: #007bff !important;
  }
  </style>
  