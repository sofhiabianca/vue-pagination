<script setup>
import axios from 'axios'
import { ref, watch } from 'vue';

 const dogCharacters = ref(null);
 const page = ref(0)
 const response = await axios.get("https://dog.ceo/api/breeds/image/random?limit=20")
 dogCharacters.value = response.data;

watch(page, async () => {
    console.log(page.value)
    const res = await axios.get(`https://dog.ceo/api/breeds/image/random?limit=20&offset=${page.value * 20}`)
    dogCharacters.value = res.data;
})
</script>

<template>
    <img src="../images/bg.png">
    <h1>Random Dogs</h1>
    <div v-if="dogCharacters">
       <div>
         <button class="next" @click="page++">NEXT</button>
         <button class="back" @click="page--">BACK</button>
       </div>
       <img class="dogs" v-for="(imageUrl, index) in dogCharacters" :key="index" :src="imageUrl">
    </div>
   </template>
   
   <style scoped>
   @import url('https://fonts.googleapis.com/css2?family=Unna:ital,wght@0,400;0,700;1,400;1,700&display=swap');
   h1 {
    text-align: center;
    font-family: "Unna", serif;
    margin-top: -700px;
    margin-left: 500px;
    color: rgb(255, 255, 255);
    text-shadow: 2px 2px 4px #000000;
    position: absolute;
    font-size: 4rem;
   }
   .dogs {
    width: 20%;
    margin-left: 550px;
    margin-top: -500px;
    border-radius: 15px;
    position: absolute;
   }
   .next, .back {
    font-family: Poppins, sans-serif;
    text-decoration: none;
    background-color: yellow;
    border: 1px solid black;
    border-radius: 10px;
    padding: 0 10px 0 10px;
    transition: 0.5s all ease;
    cursor: pointer;
    margin-left: 690px;
    margin-top: -580px;
    position: absolute;
   }
   .next:hover, .back:hover {
    background-color: black;
    color: white;
   }
   .back {
    margin-left: 620px;
   }
   img{
    width: 100%;
   }
   </style>
   