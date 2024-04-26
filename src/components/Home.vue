<script setup>
import { RouterLink } from 'vue-router';
import Dogs from '../views/Dogs.vue';
</script>

<template>
    <img src="../images/bg.png">
    <div class="container">
        <h1>Brighten up your day!</h1>
        <button><RouterLink class="router-button" to="/Dogs">Start</RouterLink></button>

    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
img{
    width: 100%;
    height: 100%;
}
.container{
    position: absolute;
    border: 2px solid rgb(78, 129, 163);
    border-radius: 15px;
    width: 50%;
    padding: 50px 0 50px 0;
    margin: -550px 0 0 350px;

}
.router-button{
    text-decoration: none;
    color: #000000;
}
    .router-button:hover{
        color: #ffff;
    }
h1{
    font-family: Bebas Neue, sans-serif;
    text-align: center;
    color: white;
    text-shadow: 2px 2px 4px #000000;
    font-size: 4rem;
}
button{
    font-family: Poppins, sans-serif;
    background-color: yellow;
    margin-left: 46%;
    border: 1px solid black;
    border-radius: 10px;
    padding: 0 10px 0 10px;
    transition: 0.5s all ease;
    cursor: pointer;
    
}
    button:hover{
        background-color: black;
        color: white;
    }
</style>
