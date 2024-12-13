<template>
    <div class="recepies-container">
        <div v-for="recipe of recipes" :key="recipe.id" > 
            <SingleRecipe :recipe=recipe />
        </div>
    </div>
</template>
<script>
import SingleRecipe from './SingleRecipe.vue'

export default {
    name: 'RecipesList',
    props:{
        recipes: Array
    },
    components:{
        SingleRecipe
    }
    
}
</script>
<style scoped>
    .recepies-container{
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        padding: 1rem;
        width: 65%;
        margin: auto;
    }
    @media screen and (max-width: 550px) {
        .recepies-container{
            width: 100%;
        }
    }
</style>
