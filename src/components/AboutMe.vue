<template>
    <div class="about-me-container d-flex align-items-center p-4 rounded shadow-lg mt-5">
      <div class="about-me-image-container">
        <img src="../assets/my-photo.jpg" alt="Profile" class="profile-img">
      </div>
      <div class="about-me-content ml-4">
        <div class="about-me-header mb-3">
          <h4>Ahmed Elsayed</h4>
          <p>Web Developer & Front-End (Vue Js)</p>
        </div>
        <p class="about-me-text">
          Hello! I'm Ahmed Elsayed, a passionate web developer with expertise in creating dynamic and responsive websites. I enjoy building modern web applications that provide excellent user experiences.
        </p>
        <div class="skills mt-3">
          <h5>Skills</h5>
          <ul class="list-inline">
            <li class="list-inline-item badge badge-primary">HTML</li>
            <li class="list-inline-item badge badge-success">CSS</li>
            <li class="list-inline-item badge badge-warning">JavaScript</li>
            <li class="list-inline-item badge badge-info">Vue.js</li>
            <li class="list-inline-item badge badge-secondary">Bootstrap</li>
          </ul>
        </div>
        <div class="social-links mt-3">
          <h5>Connect with Me</h5>
          <a href="https://www.linkedin.com/in/ahmed-elsayed-a064071bb/" target="_blank" class="btn btn-outline-primary btn-sm mx-1">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/ahmed9143" target="_blank" class="btn btn-outline-dark btn-sm mx-1">
            <i class="fab fa-github"></i> GitHub
          </a>
          <a href="mailto:ahmedelsayed9909@gmail.com" class="btn btn-outline-danger btn-sm mx-1">
            <i class="fas fa-envelope"></i> Email
          </a>
        </div>
      </div>
    </div>
  </template>
  


  <script>
  export default {
    name: 'AboutMe',
  };
  </script>
  


  
  <style scoped>
  .about-me-container {
    max-width: 1000px;
    margin: 0 auto;
    background-color: #f8f9fa;
    color: #333;
    border-radius: 15px;
    display: flex;
    align-items: center;
    transform: scale(1.1); /* Increases size by 10% */
  }
  
  .about-me-image-container {
    flex-shrink: 0;
  }
  
  .profile-img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 50%;
    border: 5px solid #fff;
    transition: transform 0.3s ease;
  }
  
  .profile-img:hover {
    transform: scale(1.1);
  }
  
  .about-me-content {
    flex-grow: 1;
    margin-left: 20px;
  }
  
  .about-me-header h4 {
    margin-bottom: 5px;
    font-size: 1.5rem;
  }
  
  .about-me-header p {
    margin-bottom: 15px;
    font-size: 1rem;
    color: #666;
  }
  
  .about-me-text {
    background: rgba(255, 255, 255, 0.9);
    padding: 15px;
    border-radius: 5px;
    font-size: 1rem;
    line-height: 1.5;
  }
  
  .skills ul {
    padding: 0;
    list-style: none;
  }
  
  .skills li {
    margin: 5px;
    font-size: 14px;
    color: #333;
  }
  
  .social-links .btn {
    font-size: 14px;
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  .social-links h5 {
    margin-bottom: 15px;
  }

  .social-links .icons {
    margin-right: 10px;
  }
  
  .social-links .btn:hover {
    color: #fff;
  }
  
  .social-links .btn-outline-primary:hover {
    background-color: #007bff;
    border-color: #007bff;
  }
  
  .social-links .btn-outline-dark:hover {
    background-color: #333;
    border-color: #333;
  }
  
  .social-links .btn-outline-danger:hover {
    background-color: #dc3545;
    border-color: #dc3545;
  }
  
  .social-links .btn i {
    margin-right: 5px;
  }
  </style>
  