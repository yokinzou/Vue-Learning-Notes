<script setup>
const props = defineProps(['user_image_info'])
</script>

<template>
  <div class="user-image">
    <img v-for="image in props.user_image_info" :key="image.image_id" :src="image.image_link" />
  </div>
</template>

<style scoped>
.user-image {
  display: flex;
}

.user-image img {
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.user-image :not(:first-child) {
  margin-left: 10px;
}
</style>
