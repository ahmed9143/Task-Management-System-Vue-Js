<template>
  <div class="chart-widget">
    <h3>{{ title }}</h3>
    <div class="chart-container">
      <bar-chart :data="data" :options="options"></bar-chart>
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: 'ChartWidget',
  components: {
    'bar-chart': Bar
  },
  props: {
    data: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => ({
        responsive: true,
        maintainAspectRatio: true, // Ensure the chart maintains its aspect ratio
        scales: {
          y: {
            beginAtZero: true
          }
        }
      })
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.chart-widget {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.chart-widget h3 {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
}

.chart-container {
  max-height: 300px; /* Limit the height of the chart */
  position: relative;
}

.bar-chart {
  max-width: 100%;
  height: 100%;
}
</style>
