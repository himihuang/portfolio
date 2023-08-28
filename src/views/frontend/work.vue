<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import worksJson from '@/public/work.json'

const works = ref([])
works.value = worksJson

// const getImgPath = (path) /work.json'


const route = useRoute()

const work = ref([])
const id = ref(0)
id.value = route.params.id - 1
work.value = worksJson[id.value]
const showLoading = ref(true)
onMounted(()=>{
    showLoading.value = false;
})

</script>


<template>
  <loading :active="showLoading"></loading>

  <div class="container mx-auto px-4 py-20">
    <div>
      <h3 class="h3 mb-2">{{ work['title'] }}</h3>
      <p class="body_text mb-6">{{ work['subtitle'] }}</p>
      <img :src="work['img']" alt="" class="aspect-video w-full" />
    </div>
    <div class="pt-10" v-html="work['html']">
     
    </div>
  </div>
</template>


<style>
</style>

