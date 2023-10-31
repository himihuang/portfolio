<script setup>
import { onMounted, ref } from 'vue'
import Card from '@/components/CardWork.vue'

import worksJson from '@/public/work.json'

const works = ref([])
works.value = worksJson

const showLoading = ref(true)
onMounted(()=>{
    showLoading.value = false;
})

</script>

<template>
  <loading :active="showLoading"></loading>
  <div class="border-b border-black">
    <div class="container mx-auto px-4 py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <p class="h1">Hi ! I am Himi!</p>
        <p>
          ”
          深知資訊是不斷迭代的過程,猶如產品一樣,需要透過用戶的反饋不斷的更新產品。才能帶給用戶體驗更佳的產品。
          平常透過不斷的吸收UIUX相關知識,期望帶給使用者不只是外表美觀的產品,而是真正能夠達到使用者需求的產品。”
        </p>
      </div>
    </div>
  </div>

  <div class="container mx-auto px-4 py-20">
    <div class="h1 font-medium pb-10">Works</div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card v-for="card in works" :item="card" :key="card.id" />
    </div>
    <div class="h2 text-center">Coming Soon...</div>
  </div>
</template>


<style scope>


</style>