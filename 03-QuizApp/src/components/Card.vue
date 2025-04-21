<script setup>

// 表示 Card 组件可以接收一个名为 quiz 的属性
const {quiz}=defineProps(['quiz'])

</script>

<template>

 <div class="card" >
   <img :src="quiz.img" alt="">
   <div class="card-text">
   <h2>{{quiz.name}}</h2>
   <p>{{ quiz.questions.length }} questions</p>
  </div>
  </div>

</template>

<style scoped>

.card {
  width: 300px;
  
  overflow: hidden;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);;
  border-radius: 2%;
  cursor: pointer;
}


.card img {
  width: 100%;
  height: 200px;
  margin:0
}

.card .card-text {
  padding: 0 5px;
}

</style>