<script setup>
const props = defineProps(['username', 'user_info'])
</script>

<template>
  <a-typography-title :level="2">{{ props.username }}</a-typography-title>
  <div class="user_info">
    <a-typography-title :level="5">{{ props.user_info.post_count }} posts</a-typography-title>
    <a-typography-title :level="5"
      >{{ props.user_info.follower_count }} followers</a-typography-title
    >
    <a-typography-title :level="5"
      >{{ props.user_info.following_count }} following</a-typography-title
    >
  </div>
</template>

<style scoped>
.user_info {
  display: flex;
  align-items: center !important ;
}

.user_info :not(:first-child) {
  margin: 0 20px !important;
}

.user_info .ant-typography {
  margin-bottom: 0 !important;
  margin-top: 0 !important;
  line-height: 1 !important;
}
</style>
