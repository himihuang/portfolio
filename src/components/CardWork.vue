<script setup>
const props = defineProps(['item'])
</script>


<template>
  <RouterLink class="card mb-6 wow animate__animated animate__fadeInUp" :to="`/work/${item.id}`">
    <img :src="item.img" alt="" />
    <span class="h4 mt-1">{{ item.title }}</span>
    <div class="mt-1 mb-3">
      <span v-for="tag in item.tag" :key="tag" class="body_text">{{ tag }}</span>
    </div>
  </RouterLink>
</template>


<style scoped>
</style>