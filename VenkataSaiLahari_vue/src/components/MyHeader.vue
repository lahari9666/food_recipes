<template>
<div>
    <h1 className="appName"> {{appName}} </h1>
</div>
</template>

<script>

export default{
    name: 'MyHeader',
    props:{ 
        appName:String
    }
}

</script>

<style scoped>

div{
    text-align: center;
}
.appName{
    padding: 1rem 0;
    margin: 0.5rem 0;
    background-color: #0a8935;
    color: #FFF;
}

</style>