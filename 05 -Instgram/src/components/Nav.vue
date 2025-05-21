<script setup>
import Container from './Container.vue'
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import authModal from './authModal.vue'

const SearchUserName = ref('')

const router = useRouter()

const onSearch = () => {
  if (SearchUserName.value) {
    router.push(`/profile/${SearchUserName.value}`)
  }
}

const isLogin = ref(false)

const isAuthentiated = ref(false)

const open = ref(false)
const showModal = () => {
  open.value = true
}
const handleOk = (e) => {
  console.log(e)
  open.value = false
}
</script>

<template>
  <a-layout>
    <a-layout-header class="header">
      <Container>
        <div class="left-content">
          <RouterLink to="/" class="logo-link">Instergram</RouterLink>
          <a-input-search
            class="search-content"
            v-model:value="SearchUserName"
            placeholder="user name ..."
            style="width: 200px"
            @search="onSearch"
          />
        </div>
        <div class="right-content">
          <div v-if="!isAuthentiated" class="notAuthentiaed-modal">
            <authModal :isAuthentiated="isAuthentiated" :isLogin="true" />
            <authModal :isAuthentiated="isAuthentiated" :isLogin="false" />
          </div>

          <div v-if="isAuthentiated">
            <authModal :isAuthentiated="isAuthentiated" />
          </div>
        </div>
      </Container>
    </a-layout-header>
  </a-layout>
</template>

<style scoped>
.left-content {
  display: flex;
  align-items: center;
}
.search-content {
  margin-left: 10px;
}

/* .right-content {
  display: flex;
  align-items: center;
} */

.right-content .notAuthentiaed-modal {
  display: flex;
  align-items: center;
}

.right-content .notAuthentiaed-modal :not(:first-child) {
  margin-left: 10px;
}

.logo-link {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 20px;
}
</style>
