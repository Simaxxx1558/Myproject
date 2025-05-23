<template>
  <div class="register">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Пароль" required />
      <button type="submit">Зарегистрироваться</button>
    </form>
    <p>Уже есть аккаунт? <a href="#" @click="$router.push('/login')">Войдите</a></p>
  </div>
</template>

<script>
import api from '@/api';

export default {
  name: 'RegisterPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async register() {
      try {
        await api.register({ email: this.email, password: this.password });
        this.$router.push('/login');
      } catch (err) {
        alert('Ошибка регистрации');
      }
    }
  }
};
</script>