<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import { ref,watch } from 'vue'
import Cards from './Cards.vue'

const characters=ref(null)
const page=ref(0)

onMounted( async() =>{ 
const response= await axios.get(`https://rickandmortyapi.com/api/character/?page=1`)
// console.log("API 响应:", response);
characters.value = response.data.results
console.log(page.value)
console.log(characters.value)
} )



// 当某个值改变，需要执行 action，则用 watch；watch 只有当 page 值改变才会触发，不会在创建时立即执行回调函数。
watch(page,async() => {
 const res=await axios.get(`https://rickandmortyapi.com/api/character/?page=${page.value}`)
 console.log(page.value)
 characters.value=res.data.results
})

</script>

<template>

  <div class="container">

    <div class="cards">

      <Cards
      v-for="character in characters "
      :key="character.id"
      :image="character.image"
      :name="character.name"
       >
      <div>
       {{character.location.name}}

      </div>
    
      </Cards>
      
    </div>
      <div class="button-container"> 
        <button @click="page--"> &lt</button>
        <button @click="page++"> ></button>
      </div>

  </div>

  <!-- <main>
    <h1>Breaking Bad Cards </h1>
    <p> {{ characters}}</p>
    <div>
      <button @click="page++">
        Next
      </button>
      <button @click="page --">
        Back
      </button>
    </div>
  </main> -->

</template>

<style scoped>

.container {
    margin-top: 100px;
    background-color: rgb(27, 26, 26);
    padding: 30px;
    /* height: 1000px; */
}
.cards {
    max-width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    /* height: 600px */
}
.cards h3 {
    font-weight: bold;
}
.cards p {
    font-size: 10px;
}
.jobs {
    display: flex;
    flex-wrap: wrap;
}
.button-container {
    display: flex;
    justify-content: center;
    padding-top: 30px
}
.button-container button {
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin: 0 5px;
    cursor: pointer;
}
.spinner {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>