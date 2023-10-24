<template>
  <div id="app">
    <header>
      <h1>Довідник кухарки</h1>
    </header>
    <main>
      <RecipeForm
        :edit-mode="editingMode"
        :form-data="formData"
        @edit-recipe="updateRecipe"
        @add-recipe="addNewRecipe"
      />
      <RecipeList
        :recipes="recipes"
        @edit-clicked="editRecipe"
      />
      <RecipeDetails
        v-if="showDetails"
        :recipe="selectedRecipe"
        @back-clicked="backToList"
      />
    </main>
  </div>
</template>

<script>
import RecipeForm from './components/RecipeForm.vue';
import RecipeList from './components/RecipeList.vue';
import RecipeDetails from './components/RecipeDetails.vue';
import RecipeCard from './components/RecipeCard.vue';

export default {
  name: 'App',
  components: {
    RecipeForm,
    RecipeList,
    RecipeDetails,
    RecipeCard,
  },
  data() {
    return {
      recipes: [], 
      editingMode: false, 
      formData: {
        name: '',
        ingredientsCount: 0,
        cookingTime: 0,
      }, 
      showDetails: false, 
      selectedRecipe: null, 
    };
  },
  methods: {
    addNewRecipe(recipeData) {
      
      this.recipes.push(recipeData);
      this.clearForm();
    },
    editRecipe(recipe) {
      
      this.editingMode = true;
      this.formData = { ...recipe };
    },
    updateRecipe(updatedData) {
      
      const index = this.recipes.findIndex((recipe) => recipe.name === updatedData.name);
      if (index !== -1) {
        this.recipes[index] = updatedData;
        this.clearForm();
        this.editingMode = false;
      }
    },
    clearForm() {
      
      this.formData = {
        name: '',
        ingredientsCount: 0,
        cookingTime: 0,
      };
      this.editingMode = false;
    },
    backToList() {
      
      this.showDetails = false;
      this.selectedRecipe = null;
    },
  },
};
</script>