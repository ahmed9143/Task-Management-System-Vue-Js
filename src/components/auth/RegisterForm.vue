<template>
  <div class="auth-form mt-5">
    <h2 class="form-title">Sign Up</h2>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="name"><i class="fas fa-user"></i></label>
        <input class="shadow-none" v-model="name" type="text" id="name" placeholder="Full Name" required />
      </div>
      <div class="form-group">
        <label for="email"><i class="fas fa-envelope"></i></label>
        <input class="shadow-none" v-model="email" type="email" id="email" placeholder="Email" required />
      </div>
      <div class="form-group">
        <label for="password"><i class="fas fa-lock"></i></label>
        <input class="shadow-none" v-model="password" type="password" id="password" placeholder="Password" required />
      </div>
      <div class="form-group">
        <label for="confirm-password"><i class="fas fa-lock"></i></label>
        <input class="shadow-none" v-model="confirmPassword" type="password" id="confirm-password" placeholder="Confirm Password" required />
      </div>
      <button type="submit" class="btn-login">
        <i class="fas fa-user-plus" style="margin-right: 5px;"></i> Register
      </button>
      <p class="text-center mt-3">
        <router-link to="/login" class="text-decoration-none">
          <i class="fas fa-sign-in-alt" style="margin-right: 5px;"></i> Login
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
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    ...mapActions('auth', ['register']),
    async register() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      try {
        await this.$store.dispatch('auth/register', { name: this.name, email: this.email, password: this.password });
        this.$router.push('/home');
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  }
}
</script>

<style scoped src="../../assets/css/auth.css"></style>
