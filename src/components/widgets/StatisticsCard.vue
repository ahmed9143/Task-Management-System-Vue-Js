<template>
  <div class="statistics-card">
    <div class="icon-container">
      <div class="icon" :class="icon"></div>
    </div>
    <div class="details">
      <h3>{{ value }}</h3>
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatisticsCard',
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [Number, String],  // Allowing both Number and String for more flexibility
      required: true
    },
    icon: {
      type: String,
      required: false,
      default: ''
    }
  }
};
</script>

<style scoped>
.statistics-card {
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.statistics-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.icon-container {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #007bff;
  border-radius: 50%;
  margin-right: 20px;
}

.icon {
  font-size: 24px;
  color: #ffffff;
}

.details h3 {
  margin: 0;
  font-size: 28px;
  font-weight: bold;
  color: #343a40;
}

.details p {
  margin: 0;
  font-size: 16px;
  color: #6c757d;
}
</style>
