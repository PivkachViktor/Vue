<template>
  <div>
    <h1>Маршрут No{{ route.number }}</h1>

    <p><b>Кінцева зупинка:</b> {{ route.endpoint }}</p>

    <p><b>Марка автобуса:</b> {{ route.car }}</p>

    <p><b>Час у дорозі:</b> {{ route.time }} хвилин</p>

    <router-link to="/">
      <button>Назад</button>
    </router-link>

    <button @click="deleteItem(route.id).then(this.$router.push('/'))">Видалити</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      route: null,
    };
  },
  created() {
    const routeId = this.$route.params.id;
    this.route = this.getItemById(routeId)
  },
  methods: {
    ...mapActions(["loadList", "deleteItem"]),
  },
  computed: {
    ...mapGetters(["getItemById"]),
  },
};
</script>
