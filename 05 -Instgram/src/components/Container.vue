<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  /* background-color: aqua; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
