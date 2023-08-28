<script setup>
import { ref, onMounted } from 'vue'

const showLoading = ref(true)
onMounted(() => {
  showLoading.value = false
})
</script>


<template>
  <loading :active="showLoading"></loading>

  <div class="wrapper flex items-center justify-center grow">
    <div class="container mx-auto">
      <div class="text-center">
        <div class="h2">Contact with Me</div>
        <div class="body_text">有任何需求，想要與我聊聊，歡迎來信</div>

        <div class="h4">ptc5321@gmail.com</div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
</style>