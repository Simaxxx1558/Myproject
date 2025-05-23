<template>
  <div class="modal">
    <div class="modal-content">
      <span @click="$emit('close')">&times;</span>
      <h3>Детали клиента</h3>
      <p><strong>ИНН:</strong> {{ client.inn }}</p>
      <p><strong>Название:</strong> {{ client.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClientDetails',
  props: ['client']
};
</script>