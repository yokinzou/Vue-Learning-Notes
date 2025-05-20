<script setup>
const props = defineProps(['post'])
</script>

<template>
  <a-card hoverable style="width: 240px">
    <template #cover>
      <img alt="example" :src="props.post.image_url" />
    </template>
    <a-card-meta :title="props.post.user_name">
      <template #description>{{ props.post.description }}</template>
    </a-card-meta>
  </a-card>
</template>
