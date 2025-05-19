<script setup>
import { watch, ref } from 'vue'
const open = ref(false)
const showModal = () => {
  open.value = true
}
const handleOk = (e) => {
  console.log(e)
  open.value = false
}

const props = defineProps(['isLogin', 'isAuthentiated'])

const value = ref('')
const value1 = ref('')
const value2 = ref('')
watch(value, () => {
  console.log(value.value)
})
watch(value1, () => {
  console.log(value1.value)
})
watch(value2, () => {
  console.log(value2.value)
})
</script>

<template>
  <div v-if="!props.isAuthentiated">
    <a-button type="primary" @click="showModal">
      {{ props.isLogin ? 'Login' : 'Sign up' }}</a-button
    >
    <a-modal v-model:open="open" :title="props.isLogin ? 'Login' : 'Sign up'" @ok="handleOk">
      <div v-if="!props.isLogin" class="input1">
        <a-input v-model:value="value" placeholder="user name" />
      </div>
      <a-input class="input2" v-model:value="value1" placeholder="email" />
      <a-input class="input3" v-model:value="value2" autofocus placeholder="password" />
    </a-modal>
  </div>

  <div v-if="props.isAuthentiated">
    <a-button type="primary" @click="showModal"> Profile</a-button>
    <a-button type="primary" @click="showModal"> Logout</a-button>
  </div>
</template>

<style scoped>
.input1 {
  margin-bottom: 10px;
}

.input2 {
  margin-bottom: 10px;
}

.input3 {
  margin-bottom: 10px;
}
</style>
