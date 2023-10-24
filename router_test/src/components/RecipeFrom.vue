<template>
    <div class="recipe-form">
      <h2>{{ editMode ? 'Редагувати страву' : 'Додати нову страву' }}</h2>
      <form @submit.prevent="submitForm">
        <label for="name">Назва:</label>
        <input type="text" id="name" v-model="formData.name" required>
        <label for="ingredientsCount">Кількість складових:</label>
        <input type="number" id="ingredientsCount" v-model="formData.ingredientsCount" required>
        <label for="cookingTime">Час приготування (хвилини):</label>
        <input type="number" id="cookingTime" v-model="formData.cookingTime" required>
        <button type="submit">{{ editMode ? 'Зберегти' : 'Додати' }}</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecipeForm',
    props: {
      editMode: Boolean,
      formData: Object,
    },
    methods: {
      submitForm() {
        if (this.editMode) {
          this.$emit('edit-recipe', this.formData);
        } else {
          this.$emit('add-recipe', this.formData); 
        }
        this.clearForm();
      },
      clearForm() {
        this.formData = {
          name: '',
          ingredientsCount: 0,
          cookingTime: 0,
        };
      },
    },
  };
  </script>
  
 
  