<script setup>
import { onMounted } from 'vue'
import axios from 'axios'
import { ref,watch } from 'vue'

const characters=ref(null)
const page=ref(0)

const response = await axios.get(`http://localhost:8080/api/characters?limit=8`)
characters.value = response.data

// 当某个值改变，需要执行 action，则用 watch；watch 只有当 page 值改变才会触发，不会在创建时立即执行回调函数。
watch(page,async() => {
 const res=await axios.get(`http://localhost:8080/api/characters?limit=8&offset=${page.value *8}`)
 characters.value=res.data
})

</script>

<template>

  <main>
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
  </main>

</template>