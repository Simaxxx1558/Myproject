<template>
  <div class="clients">
    <h2>Клиенты</h2>
    <input v-model="search" placeholder="Поиск по ИНН или названию" />
    <table>
      <thead>
        <tr>
          <th @click="sort('inn')">ИНН ▼</th>
          <th @click="sort('name')">Название ▼</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in sortedClients" :key="client.id" @click="openModal(client)">
          <td>{{ client.inn }}</td>
          <td>{{ client.name }}</td>
        </tr>
      </tbody>
    </table>
    <ClientDetails v-if="selectedClient" :client="selectedClient" @close="selectedClient = null" />
  </div>
</template>

<script>
import ClientDetails from './ClientDetails.vue';

export default {
  name: 'ClientList',
  components: { ClientDetails },
  data() {
    return {
      search: '',
      selectedClient: null,
      sortKey: '',
      sortDir: 1
    };
  },
  computed: {
    filteredClients() {
      return this.$store.state.clients.filter(client =>
        client.name.toLowerCase().includes(this.search.toLowerCase()) ||
        client.inn.includes(this.search)
      );
    },
    sortedClients() {
      if (!this.sortKey) return this.filteredClients;
      return [...this.filteredClients].sort((a, b) => {
        const valA = a[this.sortKey].toUpperCase();
        const valB = b[this.sortKey].toUpperCase();
        return (valA < valB ? -1 : valA > valB ? 1 : 0) * this.sortDir;
      });
    }
  },
  methods: {
    sort(key) {
      if (this.sortKey === key) {
        this.sortDir *= -1;
      } else {
        this.sortKey = key;
        this.sortDir = 1;
      }
    },
    openModal(client) {
      this.selectedClient = client;
    }
  },
  mounted() {
    this.$store.dispatch('fetchClients');
  }
};
</script>