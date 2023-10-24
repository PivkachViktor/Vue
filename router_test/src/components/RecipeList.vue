<template>
    <div class="recipe-list">
      <h2>Список страв</h2>
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">
          <button @click="editRecipe(recipe)">Редагувати</button>
          {{ recipe.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecipeList',
    props: {
      recipes: Array,
    },
    methods: {
      editRecipe(recipe) {
        this.$emit('edit-clicked', recipe); 
      },
    },
  };
  </script>
  