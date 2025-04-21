<script setup>
import { defineProps } from 'vue';

const {
    questionStatus,
    barPercentage
}=defineProps([
    "questionStatus",
    "barPercentage"
])

</script>




<template>

<div class="header">
    <h1> Question {{ questionStatus }}</h1>
    <div class="bar">
        <div class="completion"  :style="{width:barPercentage}"> </div>
            
    </div>
</div>
</template>

<style scoped>
  .bar {
        width: 300px;
        height: 50px;
        border: 3px solid bisque 
    }
   .completion {
        height: 100%;
       
        background-color: bisque;
    }
</style>