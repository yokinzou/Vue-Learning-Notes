<script setup>
import { onMounted } from 'vue'
import axios from 'axios'

const response = await axios.get("http://localhost:8080/api/characters")
console.log(response)

</script>

<template>

  <main>
    <h1>Breaking Bad Cards </h1>
    <p> {{ response }}</p>
  </main>

</template>