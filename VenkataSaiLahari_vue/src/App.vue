<template>
  <MyHeader appName="FOOD RECIPES"/> 
  <RecipesList :recipes=recipes />
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import RecipesList from './components/RecipesList.vue'


export default{
  name: 'App',
  components:{
    MyHeader,
    RecipesList
  },
  data(){
    return {
      recipes: []
    }
  },
  methods:{
    async fetchjobs(){
      const res = await fetch('https://recipenode.onrender.com/api');
      const data = await res.json()
      console.log(data)
      return data.recipes;
    }
  },
  async created(){
      this.recipes = await this.fetchjobs();
  }
}
</script>


<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
}

#app{
  background-color: #FFF;
}
</style>
