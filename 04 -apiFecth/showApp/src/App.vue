<script setup> 
import BreakingBadCardsSuspence from './components/BreakingBadCardsSuspence.vue';
import RickyMortyCards from './components/RickyMortyCards.vue';
import Hero from './components/Hero.vue';
import { ref } from 'vue';

const isBreakingBad=ref(true)

const toggleShow =()=>{
  isBreakingBad.value=!isBreakingBad.value
}
</script>

<template>

<Hero
:isBreakingBad="isBreakingBad"  @selectShow="toggleShow"/>

<!-- keep-alive 是让状态保持不变 -->
<keep-alive>
  <component :is="isBreakingBad?BreakingBadCardsSuspence
                               :RickyMortyCards" > 
  </component>
</keep-alive>


<!-- <div v-if="isBreakingBad"> <BreakingBadCardsSuspence/>  </div>

<div v-else>  <RickyMortyCards />  </div> -->


</template>

<style scoped>
.spin-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
}

</style>