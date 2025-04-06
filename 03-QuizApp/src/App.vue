
<script setup>
import q from "../data/quizes.json" 
import { ref,watch } from "vue";
// 把 Card 分离到component 中
import Card from "./components/Card.vue";

const quizes=ref(q)
const search=ref("")

// watch的作用是监听并执行一些 action
watch(search,() =>{
  quizes.value=q.filter(item =>item.name.toLowerCase().includes(search.value.toLowerCase()))
})

</script>



<template>
  <div class="container">
  
  <header>
      <h1 >Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search ...">
  </header>

  <div class="option-container">
  <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
  <!-- <div class="card" v-for="quiz in quizes" :key="quiz.id">
   <img :src="quiz.img" alt="">
   <div class="card-text">
   <h2>{{quiz.name}}</h2>
   <p>{{ quiz.questions.length }} questions</p>
  </div>
  </div> -->
  </div>
  </div>
</template>


<style scoped>
.container {
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 15px;
}

.container header {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container h1 {
  font-weight: bold;
  margin-right: 20px;
  padding: 5px;
}
.container input {
  border: none;
  height: 30px;
  background-color: aliceblue;
  border-radius: 5px;
  padding: 5px;
}

.option-container {
  display: flex;
  /* 允许内部的元素自动换行，而不是自动挤在一行 */
  flex-wrap: wrap;
  margin-top: 40px;
}

</style>