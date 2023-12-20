<template>
  <form>
    <input v-model="route.number" placeholder="Номер" />

    <input v-model="route.endpoint" placeholder="Кінцева" />

    <input v-model="route.car" placeholder="Марка" />

    <input v-model="route.time" placeholder="Час" />

    <button @click="addItem(route).then(this.$router.push('/'))">Зберегти</button>

    <button @click="cancelForm()">Скасувати</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["id"],

  data() {
    return {
      route: {
        number: "",
        endpoint: "",
        car: "",
        time: null,
      },
    };
  },

  created() {
    if (this.id) {
      // отримуємо дані редагованого маршруту
      const route = this.$store.getters.getRouteById(this.id);

      // і записуємо його в локальний state
      this.route.number = route.number;
      this.route.endpoint = route.endpoint;
      // ...інші поля
    }
  },

  methods: {
    ...mapActions(["addItem"]),
    
    cancelForm() {
      // скидання даних форми
      this.route.number = "";
      this.route.endpoint = "";
      this.route.car = "";
      this.route.time = null;
      this.$router.push('/')
    },
  },
};
</script>
