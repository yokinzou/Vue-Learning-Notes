<script setup>
import { defineProps,computed } from 'vue';

const {score,questionLength} =defineProps([
    'score',
    'questionLength'
])

const correctRate = computed( () => {
    if (questionLength === 0) return 0
    return Math.round((score / questionLength) * 100)
} )

</script>

   
<template>

 <div  class="Result">
        <h2> Finished!</h2>
        <div class="score_result">
        <p> Your Score: {{ score }} / {{ questionLength }}</p>
        <p> Correct Rate: {{ correctRate }}%</p>
            <button @click="$router.push('/')" class="back-home-btn">
            Back to Home 
            </button>
        </div>
 </div> 

</template>

<style scoped>

.Result {
   display: flex;
   align-items: center;
   justify-content: center;
   height: 400px;
   flex-direction: column;

}

.score_result {
    display: flex;
    flex-direction: column;

}

.back-home-btn {
    height: 30px;
    margin-top: 10px;
}


</style>