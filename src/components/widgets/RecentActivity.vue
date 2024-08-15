<template>
  <div class="recent-activity">
    <h3>Recent Activity</h3>
    <ul>
      <li v-for="(activity, index) in activities" :key="index">
        <div class="activity-details">
          <span>{{ activity.activity }}</span>
          <span class="timestamp">{{ activity.timestamp }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RecentActivity',
  props: {
    activities: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.recent-activity {
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.3s ease-in-out;
}

.recent-activity:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.recent-activity h3 {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #343a40;
}

.recent-activity ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.recent-activity li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #e9ecef;
  transition: background-color 0.2s ease-in-out;
}

.recent-activity li:hover {
  background-color: #f1f3f5;
}

.recent-activity li:last-child {
  border-bottom: none;
}

.activity-details {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.activity-details span {
  font-size: 16px;
  color: #495057;
}

.timestamp {
  color: #868e96;
  font-size: 14px;
  white-space: nowrap;
}
</style>
