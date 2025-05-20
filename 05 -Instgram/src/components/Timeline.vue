<script setup>
import Container from './Container.vue'
import Card from './Card.vue'

const posts = [
  {
    id: '1234',
    user_name: 'yokin zou',
    image_url: 'https://pic.rmb.bdstatic.com/bjh/news/ad9d57b602fe5bc89348e432cfcad49d.png',
    description: 'catoon what i like!',
  },
  {
    id: '1233',
    user_name: 'taal da waal',
    image_url:
      'https://cdn.wikimg.net/en/zeldawiki/images/thumb/6/68/TPHD_Link_Artwork.png/320px-TPHD_Link_Artwork.png',
    description: 'who know this!',
  },
]
// 调试数据
console.log('Posts:', posts)
</script>

<template>
  <Container class="card-container">
    <Card class="card-item" v-for="post in posts" :key="post.id" :post="post" />
  </Container>
</template>

<style scoped>
.card-container {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.card-container .card-item {
  margin-top: 10px;
}
</style>
