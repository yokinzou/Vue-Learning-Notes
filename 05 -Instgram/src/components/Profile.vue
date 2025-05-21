<script setup>
import Container from './Container.vue'
import { useRoute } from 'vue-router'
import UserBar from './UserBar.vue'
import ImageGallery from './ImageGallery.vue'

const route = useRoute()
const username = route.params.username

const user_info_const = {
  username: 'Yokin Zou',
  user_id: 123555,
  user_info: {
    post_count: 5,
    follower_count: 389,
    following_count: 20,
  },
  user_image_info: [
    {
      image_id: 1,
      image_link: 'https://i.ibb.co/FbW4Xb8Z/SCR-20250521-unsy.jpg',
    },
    {
      image_id: 2,
      image_link: 'https://deih43ym53wif.cloudfront.net/shutterstock_2430463771_3bbf7b9c27.jpg',
    },
  ],
}
</script>

<template>
  <Container class="profile-container">
    <div class="profile-content">
      <UserBar
        :username="user_info_const.username"
        :key="user_info_const.user_id"
        :user_info="user_info_const.user_info"
      />
      <ImageGallery :user_image_info="user_info_const.user_image_info" />
    </div>
  </Container>
</template>

<style scoped>
.profile-container {
  margin-top: 5px;
  align-items: center;
  display: flex;

  /* justify-content: center; */
}

.profile-content :not(:first-child) {
  margin-bottom: 50px;
}
</style>
