const state = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || []
};

const mutations = {
  setTasks(state, tasks) {
    state.tasks = tasks;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  },
  addTask(state, task) {
    state.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  },
  updateTask(state, updatedTask) {
    const index = state.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      state.tasks.splice(index, 1, updatedTask);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
  deleteTask(state, taskId) {
    state.tasks = state.tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }
};

const actions = {
  fetchTasks({ commit }) {
    // Tasks are already loaded from local storage
    commit('setTasks', state.tasks);
  },
  addTask({ commit }, task) {
    task.id = Date.now(); // Simple unique ID based on timestamp
    commit('addTask', task);
  },
  updateTask({ commit }, task) {
    commit('updateTask', task);
  },
  deleteTask({ commit }, taskId) {
    commit('deleteTask', taskId);
  }
};

const getters = {
  allTasks(state) {
    return state.tasks;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
