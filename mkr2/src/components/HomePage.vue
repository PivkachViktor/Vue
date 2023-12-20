<template>
  <div>
    <h1>Розклад маршрутних таксі</h1>
    
    <router-link to="/add">Додавання</router-link> | 
    <router-link to="/filters">Фільтри</router-link>
    <table>
      <tr>
        <th>Номер</th>
        <th>Кінцева</th>
        <th>Марка</th>
        <th>Час</th>
        <th></th>
      </tr>

      <tr v-for="route in getItemsList" v-bind:key="route.id">
        <td>{{ route.number }}</td>
        <td>{{ route.endpoint }}</td>
        <td>{{ route.car }}</td>
        <td>{{ route.time }} хв</td>
        <td>
          <router-link :to="`/schedule/${route.id}`">Переглянути</router-link>          
          <button @click="deleteItem(route.id)">Видалити</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["loadList",'deleteItem']),

  },
  computed: {
    ...mapGetters(["getItemsList"]),
  },

  async created() {
    await this.loadList();
  },
};
</script>
