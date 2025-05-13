<script setup> 
import BreakingBadCards from './components/BreakingBadCards.vue';
import RickyMortyCards from './components/RickyMortyCards.vue';
import { Suspense } from 'vue';
</script>

<template>

<h1> Hero</h1>
<Suspense>
<template #default>
  <BreakingBadCards/>
</template>
<template #fallback>

  <div>
    <p>
      Loading
    </p>
  </div>
</template>

</Suspense>

<RickyMortyCards />

</template>