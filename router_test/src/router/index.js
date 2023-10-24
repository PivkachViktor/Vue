import { createRouter, createWebHashHistory } from 'vue-router'

import RecipeForm from './components/RecipeForm.vue';
import RecipeCard from './components/RecipeCard.vue';
import RecipeList from './components/RecipeList.vue';
import RecipeDetails from './components/RecipeDetails.vue';


const routes = [
  
  { path: '/add', component: RecipeForm }, 
  { path: '/edit/:id', component: RecipeForm }, 
  { path: '/list', component: RecipeList }, 
  { path: '/details/:id', component: RecipeDetails }, 
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;