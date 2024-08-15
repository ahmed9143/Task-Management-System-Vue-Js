<template>


  <div class="auth-form mt-5">
    <h2 class="form-title">Forgot Password</h2>
    <form @submit.prevent="resetPassword">
      <div class="form-group">
        <label for="email"><i class="fas fa-envelope"></i></label>
        <input class="shadow-none" v-model="email" type="email" id="email" placeholder="Enter your email" required />
      </div>
      <button type="submit" class="btn-login">
        <i class="fas fa-unlock-alt" style="margin-right: 5px;"></i> Reset Password
      </button>
      <p class="text-center mt-3">
        <router-link to="/login" class="text-decoration-none">
          <i class="fas fa-sign-in-alt" style="margin-right: 5px;"></i> Back to Login
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
      email: ''
    };
  },
  methods: {
    ...mapActions('auth', ['resetPassword']),
    async resetPassword() {
      try {
        await this.$store.dispatch('auth/resetPassword', { email: this.email });
        alert('If your email is registered, you will receive a password reset link.');
      } catch (error) {
        console.error('Password reset failed:', error);
      }
    }
  }
}
</script>

<style scoped src="../../assets/css/auth.css"></style>
