<template>
    <div class="recipe-info">
        <figure>
            <img :src="recipe.image" class="recipe-img" alt="image">
        </figure>
        <div class="recipe-details">
            <h2 class="name">{{recipe.food_item_name}}</h2>
            <p class="recipe"><b>Ingredients : </b>{{recipe.ingredients}}</p>
            <p class="recipe"><b>Recipe : </b>{{recipe.recipe}}</p>
            <p class="recipe"><b>Nutrition : </b>{{recipe.nutrition_info}}</p>
            <p class="recipe"><b>Preparation time : </b> {{recipe.prep_time}}</p>
            <p class="recipe"><b>Country Of Origin : </b>{{recipe.country_of_origin}}</p>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'SingleRecipe',
        props:{
            recipe: Object
        }
    }
</script>

<style scoped>
    .recipe-img{
        width: 100%;
    }
    .recipe-info{
        background-color: rgba(33, 38, 35, .8);
        color: #FFF;
    }
    .recipe-details{
        padding: 1rem;
    }
    .name,.recipe{
        padding: 0.5rem 0;
        line-height: 1.5rem;
    }
    .recipe{
        font-size: 14px;
    }
</style>