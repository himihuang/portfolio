<script setup>
import { ref, onMounted } from 'vue'
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
const msg = ref(null)
const key = ref(work.value['key'])

const check = () => {
  if (msg.value == 5411) {
    key.value = !key.value
    console.log(key.value)
  }
}

onMounted(() => {
  showLoading.value = false
})
</script>


<template>
  <loading :active="showLoading"></loading>

  <div class="mx-auto w-screen h-screen flex justify-center items-center" v-if="key">
    <input
      class="input"
      type="text"
      v-model="msg"
      @keyup.enter="check()"
      placeholder="請輸入密碼"
    />
    <button class="btn-fill" @click="check()">送出</button>
  </div>
  <div class="container mx-auto px-4 py-20" v-if="!key">
    <div class="grid grid-cols-6 gap-4">
      <div class="sm:col-start-2 sm:col-span-4 col-start-1 col-span-11">
        <div>
          <h3 class="h3 mb-2">{{ work['title'] }}</h3>
          <p class="body_text mb-6">{{ work['subtitle'] }}</p>
          <img :src="work['img']" alt="" class="aspect-video w-full" />
        </div>
        <div class="pt-10" v-html="work['html']">

        </div>
       
      </div>
    </div>
  </div>
</template>


<style>
</style>

