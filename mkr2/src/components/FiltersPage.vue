<template>
  <div>
    <input v-model="numberFilter" placeholder="Номер" />

    <input v-model="endpointFilter" placeholder="Кінцева" />

    <input v-model="carFilter" placeholder="Автобус" />

    <button @click="applyFilters">Застосувати</button>

    <table>
      <tr>
        <th>Номер</th>
        <th>Кінцева</th>
        <th>Марка</th>
      </tr>
      <tr v-for="route in filteredList" :key="route.id">
        <td>{{ route.number }}</td>
        <td>{{ route.endpoint }}</td>
        <td>{{ route.car }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      routes: [],
      numberFilter: "",
      endpointFilter: "",
      carFilter: "",
    };
  },
  created() {
    this.routes = this.getItemsList;
  },
  computed: {
    ...mapGetters(["getItemsList"]),
    filteredList() {
      return this.routes.filter((route) => {
        return (
          (!this.numberFilter || route.number.includes(this.numberFilter)) &&
          (!this.endpointFilter ||
            route.endpoint.includes(this.endpointFilter)) &&
          (!this.carFilter || route.car.includes(this.carFilter))
        );
      });
    },
  },

  methods: {
    ...mapActions(["loadList", "deleteItem"]),
    applyFilters() {
      // не потрібна реалізація, фільтрація відбувається автоматично в filteredList
    },
    clearFilters() {
      this.numberFilter = "";
      this.endpointFilter = "";
      this.carFilter = "";

      this.routes = this.$store.getters.getAllRoutes;
    },
  },
};
</script>
