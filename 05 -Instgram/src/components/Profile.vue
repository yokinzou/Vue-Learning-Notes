<script setup>
import Container from './Container.vue'
import { useRoute } from 'vue-router'
import UserBar from './UserBar.vue'

const route = useRoute()
const username = route.params.username

const user_info_const = {
  username: 'Yokin Zou',
  user_info: {
    post_count: 5,
    follower_count: 389,
    following_count: 20,
  },
}
</script>

<template>
  <Container class="profile-container">
    <div class="profile-content">
      <UserBar :username="user_info_const.username" :user_info="user_info_const.user_info" />
      <!-- <h1>IMage Gallery</h1> -->
    </div>
  </Container>
</template>

<style scoped>
.profile-container {
  align-items: center;
  display: flex;
  /* justify-content: center; */
}
</style>
