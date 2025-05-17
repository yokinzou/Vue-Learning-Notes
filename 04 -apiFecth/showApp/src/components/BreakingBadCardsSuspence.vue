<script setup>
import BreakingBadCards from './BreakingBadCards.vue';
import { Suspense } from 'vue';
</script>


<template>

<Suspense>
<template #default>
  <BreakingBadCards/>
</template>
<template #fallback>

  <div>
    <p>
      Loading
    </p>

    <div class="spin-container" >
      <n-spin size="large" />
    </div>
   
  </div>


</template>

</Suspense>


</template>