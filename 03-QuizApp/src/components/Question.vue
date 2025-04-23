<script setup>
const {
    currentQuestion,
    handleOptionClick

}  =defineProps([
    'currentQuestion',
    'handleOptionClick'

])
</script>

<template>
<div class="quiz"> 

<h2 class="quiz-question">  
   {{currentQuestion.text}} 
</h2>

 <div class="quiz-option">
       <div  v-for="option in currentQuestion.options" 
               :key="option.id"
               class="single-option"
               @click="handleOptionClick(option)">
           
           <div class="serial-number">
               {{option.label}}
           </div>
           <div class="option-value">
               {{option.text}}
           </div>
       </div>
 </div>
</div>
 </template>

<style scoped>

.quiz .single-option {
    display: flex;
    width: 300px;
    height: 40px;
    margin-bottom: 10px;
    cursor: pointer;
  
}

.quiz .single-option .serial-number {
   background-color: bisque;
   padding-left: 10px;
   width: 40px;
   height: 100%;
   display: flex;
   align-items: center;
     
}


.quiz .single-option .option-value {
    background-color: aliceblue;
    width: 100%;
    padding-left: 10px;
    height: 100%;
    display: flex; 
    align-items: center; 
}

.quiz-question {
    margin-top: 15px;
    margin-bottom: 10px;
}

</style>