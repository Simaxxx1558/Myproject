<template>
  <div class="login">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Пароль" required />
      <button type="submit">Войти</button>
    </form>
    <p>Нет аккаунта? <a href="#" @click="$router.push('/register')">Зарегистрируйтесь</a></p>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', { email: this.email, password: this.password });
        this.$router.push('/clients');
      } catch (err) {
        alert('Ошибка авторизации');
      }
    }
  }
};
</script>