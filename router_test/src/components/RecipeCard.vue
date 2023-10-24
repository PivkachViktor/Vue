<template>
    <div class="recipe-card">
        <h3>{{ recipe.name }}</h3>
        <p>Кількість складових:{{ recipe.ingredientsCount }}</p>
        <p>Час приготування: {{ recipe.cookingTime }} хвилин</p>
        <button @click="editRecipe">Редагувати</button>
        <button @click="deleteRecipe">Видалити</button>
    </div>
</template>

<script>


export default {
    name: 'RecipeCard',
    props: {
        recipe: Object,
    },
    methods: {
        editRecipe(){

        },
        deleteRecipe(){

        },
    },
};
</script>
