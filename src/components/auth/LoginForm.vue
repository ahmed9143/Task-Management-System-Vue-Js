<template>
  <div class="auth-form mt-5">
    <h2 class="form-title">Sign in</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email"><i class="fas fa-envelope"></i></label>
        <input class="shadow-none" v-model="email" type="email" id="email" placeholder="Email" required />
      </div>
      <div class="form-group">
        <label for="password"><i class="fas fa-lock"></i></label>
        <input class="shadow-none" v-model="password" type="password" id="password" placeholder="Password" required />
      </div>
      <button type="submit" class="btn-login">
        <i class="fas fa-sign-in-alt" style="margin-right: 5px;"></i> Login
      </button>
      <p class="text-center mt-3">
        <router-link to="/register" class="text-decoration-none">
          <i class="fas fa-user-plus" style="margin-right: 5px;"></i> Register
        </router-link>
        <span class="link-separator">|</span>
        <router-link to="/forget-password" class="text-decoration-none">
          <i class="fas fa-unlock-alt" style="margin-right: 5px;"></i> Forgot Password?
        </router-link>
      </p>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    async login() {
      try {
        await this.$store.dispatch('auth/login', { email: this.email, password: this.password });
        this.$router.push('/dashboard');
      } catch (error) {
        console.error('Login failed:', error);
      }
    }
  }
};
</script>

<style scoped src="../../assets/css/auth.css"></style>
